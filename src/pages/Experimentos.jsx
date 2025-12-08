// src/pages/Experimentos.jsx
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ExperimentCard from '../components/ExperimentCard';
import { useScrollTop } from '../hooks/useScrollTop';
import { experimentos, categorias, dificultades, edades } from '../data/experimentosData';

/**
 * ListaExperimentos
 * Página que muestra el catálogo completo de experimentos científicos.
 * 
 * Patrón Arquitectónico:
 * - Datos: importa de src/data/experimentosData.js (9 experimentos detallados)
 * - Componentes: Hero, ExperimentCard (reutilizable), Footer
 * - Hook: useScrollTop para scroll automático
 * - Estilo: sistema de diseño centralizado con clases semánticas
 * 
 * Características:
 * - Filtros múltiples: categoría, dificultad, edad
 * - Grid responsive de experimentos
 * - Modal con detalles completos (materiales, pasos)
 * - Búsqueda por texto
 * - Estado de carga mejorado
 */
const ListaExperimentos = () => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
    const [dificultadSeleccionada, setDificultadSeleccionada] = useState('Todas');
    const [edadSeleccionada, setEdadSeleccionada] = useState('Todas');
    const [experimentoSeleccionado, setExperimentoSeleccionado] = useState(null);
    const [busqueda, setBusqueda] = useState('');

    useScrollTop();

    // Filtrar experimentos
    const experimentosFiltrados = experimentos.filter(exp => {
        const matchCategoria = categoriaSeleccionada === 'Todas' || exp.categoria === categoriaSeleccionada;
        const matchDificultad = dificultadSeleccionada === 'Todas' || exp.dificultad === dificultadSeleccionada;
        const matchEdad = edadSeleccionada === 'Todas' || exp.edadRecomendada === edadSeleccionada;
        const matchBusqueda = busqueda === '' || 
            exp.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
            exp.descripcion.toLowerCase().includes(busqueda.toLowerCase());
        
        return matchCategoria && matchDificultad && matchEdad && matchBusqueda;
    });

    const limpiarFiltros = () => {
        setCategoriaSeleccionada('Todas');
        setDificultadSeleccionada('Todas');
        setEdadSeleccionada('Todas');
        setBusqueda('');
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <NavBar />

            {/* Hero Section */}
            <Hero
                gradientClass="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600"
                title="Experimentos Científicos"
                subtitle="Descubre, aprende y experimenta con ciencia divertida y segura para todas las edades"
            >
                <div className="flex gap-3 justify-center mt-6">
                    <button 
                        onClick={() => {
                            const filtrosEl = document.getElementById('filtros');
                            filtrosEl?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn-main"
                    >
                        Explorar Experimentos
                    </button>
                </div>
            </Hero>

            <main className="max-w-7xl mx-auto px-6 py-12">
                {/* Barra de búsqueda */}
                <div className="mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar experimentos por nombre o descripción..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            className="w-full px-5 py-3 pl-12 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 text-gray-700"
                        />
                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                            🔍
                        </span>
                    </div>
                </div>

                {/* Filtros */}
                <div id="filtros" className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Filtros</h3>
                        <button
                            onClick={limpiarFiltros}
                            className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold"
                        >
                            Limpiar filtros
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Filtro Categoría */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Categoría</label>
                            <div className="flex flex-wrap gap-2">
                                {categorias.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setCategoriaSeleccionada(cat)}
                                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${
                                            categoriaSeleccionada === cat
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Filtro Dificultad */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Dificultad</label>
                            <div className="flex flex-wrap gap-2">
                                {dificultades.map(dif => (
                                    <button
                                        key={dif}
                                        onClick={() => setDificultadSeleccionada(dif)}
                                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${
                                            dificultadSeleccionada === dif
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {dif}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Filtro Edad */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Edad Recomendada</label>
                            <select
                                value={edadSeleccionada}
                                onChange={(e) => setEdadSeleccionada(e.target.value)}
                                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                            >
                                {edades.map(edad => (
                                    <option key={edad} value={edad}>{edad}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Contador de resultados */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        Mostrando <span className="font-bold text-indigo-600">{experimentosFiltrados.length}</span> de {experimentos.length} experimentos
                    </p>
                </div>

                {/* Grid de Experimentos */}
                {experimentosFiltrados.length > 0 ? (
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {experimentosFiltrados.map((exp) => (
                            <ExperimentCard
                                key={exp.id}
                                {...exp}
                                onClick={() => setExperimentoSeleccionado(exp)}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔬</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No se encontraron experimentos</h3>
                        <p className="text-gray-600 mb-4">Intenta ajustar los filtros o la búsqueda</p>
                        <button onClick={limpiarFiltros} className="btn-main">
                            Limpiar Filtros
                        </button>
                    </div>
                )}

                {/* Modal de Detalles */}
                {experimentoSeleccionado && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        onClick={() => setExperimentoSeleccionado(null)}
                    >
                        <div
                            className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header del Modal */}
                            <div className="relative h-64 bg-gradient-to-br from-indigo-500 to-purple-600">
                                <img
                                    src={experimentoSeleccionado.imagen}
                                    alt={experimentoSeleccionado.titulo}
                                    className="w-full h-full object-cover opacity-30"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-4xl font-bold text-white text-center px-6">
                                        {experimentoSeleccionado.titulo}
                                    </h2>
                                </div>
                                <button
                                    onClick={() => setExperimentoSeleccionado(null)}
                                    className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Contenido del Modal */}
                            <div className="p-8">
                                {/* Badges */}
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="badge-primary">{experimentoSeleccionado.categoria}</span>
                                    <span className="badge-warning">{experimentoSeleccionado.dificultad}</span>
                                    <span className="badge-secondary">⏱️ {experimentoSeleccionado.tiempo}</span>
                                    <span className="badge-success">👶 {experimentoSeleccionado.edadRecomendada}</span>
                                </div>

                                {/* Descripción */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Descripción</h3>
                                    <p className="text-gray-700 leading-relaxed">{experimentoSeleccionado.descripcion}</p>
                                </div>

                                {/* Materiales */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Materiales Necesarios</h3>
                                    <ul className="grid md:grid-cols-2 gap-2">
                                        {experimentoSeleccionado.materiales.map((material, index) => (
                                            <li key={index} className="flex items-center gap-2 text-gray-700">
                                                <span className="text-indigo-600">✓</span>
                                                {material}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Pasos */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">Instrucciones Paso a Paso</h3>
                                    <ol className="space-y-3">
                                        {experimentoSeleccionado.pasos.map((paso, index) => (
                                            <li key={index} className="flex gap-3">
                                                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                                                    {index + 1}
                                                </span>
                                                <p className="text-gray-700 pt-1">{paso}</p>
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                                {/* Botón de cierre */}
                                <div className="flex gap-3 justify-end pt-4 border-t">
                                    <button
                                        onClick={() => setExperimentoSeleccionado(null)}
                                        className="btn-main"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <section className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center border border-indigo-100">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">¿Tienes una idea para un experimento?</h3>
                    <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                        Comparte tus experimentos favoritos con la comunidad. Ayúdanos a inspirar a más niños a amar la ciencia.
                    </p>
                    <a href="/#/contribuir?tab=proponer" className="btn-main inline-block">
                        Proponer Experimento
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ListaExperimentos;