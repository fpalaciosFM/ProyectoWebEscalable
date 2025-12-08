import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useScrollTop } from '../hooks/useScrollTop';
import { fotos, galeryCategories } from '../data/galeriaData';

/**
 * Galería
 * Página dedicada a mostrar galería de fotos de talleres, eventos y actividades.
 * Incluye filtros por categoría, grid responsive y visor modal.
 */
const Galeria = () => {
    const [selectedCategory, setSelectedCategory] = useState('todos');
    const [selectedImage, setSelectedImage] = useState(null);

    useScrollTop();

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
                        {galeryCategories.map((cat) => (
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
            <Footer />
        </div>
    );
};

export default Galeria;
