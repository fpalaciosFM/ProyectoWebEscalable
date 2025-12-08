import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';
import NoticiaCard from '../components/NoticiaCard';
import Calendario from '../components/Calendario';
import { useScrollTop } from '../hooks/useScrollTop';
import { eventos, noticias, categoriesEventos, categoriesNoticias } from '../data/eventosNoticiasData';

/**
 * EventosNoticias
 * Página que centraliza eventos próximos, noticias y un calendario de actividades.
 */
const EventosNoticias = () => {
    const [filtroEventos, setFiltroEventos] = useState('todos');
    const [filtroNoticias, setFiltroNoticias] = useState('todos');

    useScrollTop();

    // Filtrar eventos
    const eventosFiltrados = filtroEventos === 'todos'
        ? eventos
        : eventos.filter(e => e.categoria === filtroEventos);

    // Filtrar noticias
    const noticiasFiltradas = filtroNoticias === 'todos'
        ? noticias
        : noticias.filter(n => n.categoria === filtroNoticias);

    return (
        <div className="min-h-screen bg-slate-50">
            <NavBar />

            {/* Hero Section */}
            <header className="bg-hero-eventos text-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Eventos y Noticias</h1>
                    <p className="text-lg opacity-90">Mantente informado sobre nuestras próximas actividades y novedades del proyecto.</p>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Sección Principal: Eventos y Noticias */}
                    <div className="lg:col-span-2">
                        {/* SECCIÓN EVENTOS */}
                        <section className="mb-16">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-3xl font-bold text-gray-800">📅 Próximos Eventos</h2>
                            </div>
                            <p className="text-gray-700 mb-6">Descubre nuestros talleres, conferencias y actividades comunitarias.</p>

                            {/* Filtros de Eventos */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {categoriesEventos.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setFiltroEventos(cat)}
                                        className={`px-4 py-2 rounded-lg font-semibold transition ${
                                            filtroEventos === cat
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-white text-gray-700 border-2 border-indigo-600 hover:bg-indigo-50'
                                        }`}
                                    >
                                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                    </button>
                                ))}
                            </div>

                            {/* Grid de Eventos */}
                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                {eventosFiltrados.map(evento => (
                                    <EventCard key={evento.id} {...evento} />
                                ))}
                            </div>
                        </section>

                        {/* SECCIÓN NOTICIAS */}
                        <section>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-3xl font-bold text-gray-800">📰 Últimas Noticias</h2>
                            </div>
                            <p className="text-gray-700 mb-6">Lee nuestras novedades, logros y actualizaciones del proyecto.</p>

                            {/* Filtros de Noticias */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {categoriesNoticias.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setFiltroNoticias(cat)}
                                        className={`px-4 py-2 rounded-lg font-semibold transition ${
                                            filtroNoticias === cat
                                                ? 'bg-indigo-600 text-white'
                                                : 'bg-white text-gray-700 border-2 border-indigo-600 hover:bg-indigo-50'
                                        }`}
                                    >
                                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                    </button>
                                ))}
                            </div>

                            {/* Grid de Noticias */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                {noticiasFiltradas.map(noticia => (
                                    <NoticiaCard key={noticia.id} {...noticia} />
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar: Calendario */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <Calendario eventos={eventos.map(e => ({ fecha: e.fecha.split(' ')[0], titulo: e.titulo }))} />

                            {/* Widget: Próximo Evento */}
                            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">🌟 Próximo Evento</h3>
                                {eventosFiltrados.length > 0 && (
                                    <div className="border-l-4 border-indigo-600 pl-4">
                                        <p className="text-sm font-semibold text-indigo-600 mb-1">
                                            {eventosFiltrados[0].fecha} - {eventosFiltrados[0].hora}
                                        </p>
                                        <p className="text-gray-800 font-bold mb-2">{eventosFiltrados[0].titulo}</p>
                                        <p className="text-sm text-gray-600 mb-4">{eventosFiltrados[0].ubicacion}</p>
                                        <button className="btn-main w-full">
                                            Registrarse
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Widget: Newsletter */}
                            <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg shadow-md p-6 border border-indigo-200">
                                <h3 className="text-lg font-bold text-gray-800 mb-3">📬 Suscribirse</h3>
                                <p className="text-sm text-gray-700 mb-4">Recibe eventos y noticias directamente en tu correo.</p>
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                />
                                <button className="btn-main w-full">
                                    Suscribirse
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default EventosNoticias;
