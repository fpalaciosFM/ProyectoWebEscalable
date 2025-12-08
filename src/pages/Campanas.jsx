import { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CampanaCard from '../components/CampanaCard';
import { campanas, categoriasCampanas, estadosCampanas } from '../data/campanasData';
import { useScrollTop } from '../hooks/useScrollTop';

/**
 * Página: Listado de Campañas
 * Ruta: /campanas
 * 
 * Muestra todas las campañas de recaudación de fondos organizadas por estado
 * 
 * Características:
 * - Hero section con gradiente personalizado
 * - Sección de impacto con 3 métricas principales
 * - Búsqueda en tiempo real por nombre o descripción
 * - Filtros por estado (todas/activas/completadas/próximas)
 * - Filtros por categoría (Infraestructura, Educación, Eventos, Equipamiento)
 * - Grillas responsivas con CampanaCard para cada estado
 * - CTA para proponer nuevas campañas
 * - 17 campañas de demostración: 1 activa, 4 próximas, 7 completadas, 5+ históricas
 */
const Campanas = () => {
    useScrollTop();

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
    const [estadoSeleccionado, setEstadoSeleccionado] = useState('todas');
    const [busqueda, setBusqueda] = useState('');

    // Filtrar campañas
    const campanasFiltradas = campanas.filter(campana => {
        const matchCategoria = categoriaSeleccionada === 'Todas' || campana.categoria === categoriaSeleccionada;
        const matchEstado = estadoSeleccionado === 'todas' || campana.estado === estadoSeleccionado;
        const matchBusqueda = campana.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                             campana.descripcion.toLowerCase().includes(busqueda.toLowerCase());
        
        return matchCategoria && matchEstado && matchBusqueda;
    });

    // Separar campañas por estado
    const campanasActivas = campanasFiltradas.filter(c => c.estado === 'activa');
    const campanasCompletadas = campanasFiltradas.filter(c => c.estado === 'completada');
    const campanasProximas = campanasFiltradas.filter(c => c.estado === 'proxima');

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <NavBar />
            
            {/* Hero Section */}
            <Hero
                gradientClass="bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500"
                title="Campañas de Recaudación"
                subtitle="Únete a nuestras causas y ayuda a hacer posible más ciencia para todos"
            />

            {/* Contenido Principal */}
            <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 space-y-12">
                
                {/* Impacto Total */}
                <section className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-4xl font-bold text-indigo-600">
                                {campanas.length}
                            </p>
                            <p className="text-gray-600 mt-2">Campañas Totales</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-emerald-600">
                                {campanas.filter(c => c.estado === 'activa').length}
                            </p>
                            <p className="text-gray-600 mt-2">Activas Ahora</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-blue-600">
                                ${campanas.reduce((acc, c) => acc + c.recaudado, 0).toLocaleString()}
                            </p>
                            <p className="text-gray-600 mt-2">Recaudado Total (MXN)</p>
                        </div>
                    </div>
                </section>

                {/* Filtros y Búsqueda */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800">Explora Campañas</h2>
                    
                    {/* Barra de Búsqueda */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar campañas por nombre o descripción..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            className="w-full px-6 py-4 pr-12 rounded-2xl border-2 border-gray-200 focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all text-lg"
                        />
                        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
                    </div>

                    {/* Filtros por Estado */}
                    <div className="flex flex-wrap gap-3">
                        {estadosCampanas.map(({ id, label }) => (
                            <button
                                key={id}
                                onClick={() => setEstadoSeleccionado(id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${
                                    estadoSeleccionado === id
                                        ? 'bg-indigo-600 text-white shadow-lg scale-105'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border-2 border-gray-200'
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Filtros por Categoría */}
                    <div className="flex flex-wrap gap-3">
                        {categoriasCampanas.map(categoria => (
                            <button
                                key={categoria}
                                onClick={() => setCategoriaSeleccionada(categoria)}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${
                                    categoriaSeleccionada === categoria
                                        ? 'bg-purple-600 text-white shadow-lg scale-105'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 border-2 border-gray-200'
                                }`}
                            >
                                {categoria}
                            </button>
                        ))}
                    </div>

                    {/* Contador de resultados */}
                    <p className="text-gray-600">
                        Mostrando <span className="font-bold text-indigo-600">{campanasFiltradas.length}</span> campaña{campanasFiltradas.length !== 1 ? 's' : ''}
                    </p>
                </section>

                {/* Campañas Activas */}
                {campanasActivas.length > 0 && (
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <h2 className="text-3xl font-bold text-gray-800">Campañas Activas</h2>
                            <span className="badge-base badge-success animate-pulse">¡Dona Ahora!</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {campanasActivas.map(campana => (
                                <CampanaCard key={campana.id} {...campana} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Campañas Próximas */}
                {campanasProximas.length > 0 && (
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <h2 className="text-3xl font-bold text-gray-800">Próximas Campañas</h2>
                            <span className="badge-base badge-secondary">Muy Pronto</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {campanasProximas.map(campana => (
                                <CampanaCard key={campana.id} {...campana} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Campañas Completadas */}
                {campanasCompletadas.length > 0 && (
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <h2 className="text-3xl font-bold text-gray-800">Campañas Completadas</h2>
                            <span className="badge-base badge-info">Logros</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {campanasCompletadas.map(campana => (
                                <CampanaCard key={campana.id} {...campana} />
                            ))}
                        </div>
                    </section>
                )}

                {/* Estado vacío */}
                {campanasFiltradas.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-6xl mb-4">🔍</p>
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">
                            No se encontraron campañas
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Intenta con otros filtros o términos de búsqueda
                        </p>
                        <button
                            onClick={() => {
                                setCategoriaSeleccionada('Todas');
                                setEstadoSeleccionado('todas');
                                setBusqueda('');
                            }}
                            className="btn-main"
                        >
                            Limpiar Filtros
                        </button>
                    </div>
                )}

                {/* CTA para proponer campañas */}
                <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">¿Tienes una idea para una campaña?</h2>
                    <p className="text-xl mb-8 text-white/90">
                        Comparte tu propuesta y ayúdanos a crear más oportunidades para la ciencia
                    </p>
                    <a href="/#/contribuir" className="btn-main bg-white text-indigo-600 hover:bg-gray-100">
                        Proponer Campaña
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Campanas;
