import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

/**
 * Galería
 * Página dedicada a mostrar galería de fotos de talleres, eventos y actividades.
 * Incluye filtros por categoría, grid responsive y visor modal.
 */
const Galeria = () => {
    const [selectedCategory, setSelectedCategory] = useState('todos');
    const [selectedImage, setSelectedImage] = useState(null);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Datos de ejemplo - fotos con categoría
    const fotos = [
        {
            id: 1,
            titulo: 'Taller de Química',
            categoria: 'talleres',
            descripcion: 'Niños experimentando con reacciones químicas seguras',
            imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23f0f4ff" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%236366f1" text-anchor="middle" dominant-baseline="middle"%3E🧪%3C/text%3E%3C/svg%3E'
        },
        {
            id: 2,
            titulo: 'Evento Comunitario',
            categoria: 'eventos',
            descripcion: 'Feria de ciencia en la plaza central',
            imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23f0fdf4" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%2310b981" text-anchor="middle" dominant-baseline="middle"%3E🎪%3C/text%3E%3C/svg%3E'
        },
        {
            id: 3,
            titulo: 'Clase Práctica de Biología',
            categoria: 'talleres',
            descripcion: 'Observación de microorganismos con microscopios',
            imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23fef3c7" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%23d97706" text-anchor="middle" dominant-baseline="middle"%3E🔬%3C/text%3E%3C/svg%3E'
        },
        {
            id: 4,
            titulo: 'Voluntarios en Acción',
            categoria: 'voluntarios',
            descripcion: 'Equipo de voluntarios preparando materiales',
            imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23fce7f3" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle"%3E🤝%3C/text%3E%3C/svg%3E'
        },
        {
            id: 5,
            titulo: 'Taller de Física',
            categoria: 'talleres',
            descripcion: 'Experimentos de mecánica con materiales reciclados',
            imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23f0f4ff" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%236366f1" text-anchor="middle" dominant-baseline="middle"%3E⚙️%3C/text%3E%3C/svg%3E'
        },
        {
            id: 6,
            titulo: 'Encuentro con Docentes',
            categoria: 'eventos',
            descripcion: 'Capacitación para maestros en metodología STEAM',
            imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23fef3c7" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%23d97706" text-anchor="middle" dominant-baseline="middle"%3E👨%E2%80%8D🏫%3C/text%3E%3C/svg%3E'
        },
        {
            id: 7,
            titulo: 'Taller Infantil de Electrónica',
            categoria: 'talleres',
            descripcion: 'Niños construyendo circuitos simples',
            imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23fce7f3" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle"%3E⚡%3C/text%3E%3C/svg%3E'
        },
        {
            id: 8,
            titulo: 'Jornada de Voluntariado',
            categoria: 'voluntarios',
            descripcion: 'Voluntarios trabajando en comunidad',
            imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23f0fdf4" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%2310b981" text-anchor="middle" dominant-baseline="middle"%3E💪%3C/text%3E%3C/svg%3E'
        }
    ];

    const categorias = [
        { id: 'todos', label: 'Todos' },
        { id: 'talleres', label: 'Talleres' },
        { id: 'eventos', label: 'Eventos' },
        { id: 'voluntarios', label: 'Voluntarios' }
    ];

    // Filtrar fotos según categoría seleccionada
    const fotosFiltradas = selectedCategory === 'todos'
        ? fotos
        : fotos.filter(foto => foto.categoria === selectedCategory);

    return (
        <div className="min-h-screen bg-slate-50">
            <NavBar />

            {/* Hero Section */}
            <header className="bg-hero-galeria text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Galería de Fotos</h1>
                    <p className="text-lg opacity-90">Revisa momentos especiales de nuestros talleres, eventos y actividades.</p>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12">
                {/* Filtros de Categoría */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Filtrar por Categoría</h2>
                    <div className="flex flex-wrap gap-3">
                        {categorias.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-6 py-2 rounded-lg font-semibold transition ${
                                    selectedCategory === cat.id
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-gray-700 border-2 border-indigo-600 hover:bg-indigo-50'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid de Fotos */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                    {fotosFiltradas.map((foto) => (
                        <div
                            key={foto.id}
                            onClick={() => setSelectedImage(foto)}
                            className="cursor-pointer group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-105"
                        >
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={foto.imagen}
                                    alt={foto.titulo}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition"></div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 mb-1">{foto.titulo}</h3>
                                <p className="text-sm text-gray-600">{foto.descripcion}</p>
                                <span className="inline-block mt-2 text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                                    {foto.categoria}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal de Imagen Ampliada */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={selectedImage.imagen}
                                alt={selectedImage.titulo}
                                className="w-full h-96 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">{selectedImage.titulo}</h2>
                                <p className="text-gray-700 mb-4">{selectedImage.descripcion}</p>
                                <div className="flex gap-3">
                                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded">
                                        {selectedImage.categoria}
                                    </span>
                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="ml-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA de Regreso */}
                <section className="card-primary p-8 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-4">¿Quieres conocer más sobre nosotros?</h3>
                    <Link
                        to="/nosotros"
                        className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700"
                    >
                        Volver a Nosotros
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default Galeria;
