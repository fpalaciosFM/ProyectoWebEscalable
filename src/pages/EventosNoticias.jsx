import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import EventCard from '../components/EventCard';
import NoticiaCard from '../components/NoticiaCard';
import Calendario from '../components/Calendario';

/**
 * EventosNoticias
 * Página que centraliza eventos próximos, noticias y un calendario de actividades.
 */
const EventosNoticias = () => {
    const [filtroEventos, setFiltroEventos] = useState('todos');
    const [filtroNoticias, setFiltroNoticias] = useState('todos');

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Datos de eventos próximos
    const eventos = [
        {
            id: 1,
            fecha: '15 de Diciembre',
            hora: '10:00 AM',
            titulo: 'Taller de Química: Reacciones Fascinantes',
            ubicacion: 'Escuela Primaria "Semillitas"',
            descripcion: 'Experimentaremos con reacciones químicas seguras y divertidas.',
            categoria: 'taller',
            capacidad: '25 niños'
        },
        {
            id: 2,
            fecha: '18 de Diciembre',
            hora: '3:00 PM',
            titulo: 'Conferencia: Mujeres en STEM',
            ubicacion: 'Centro Cultural Barrial',
            descripcion: 'Panel de mujeres científicas compartiendo sus experiencias.',
            categoria: 'conferencia',
            capacidad: 'Público abierto'
        },
        {
            id: 3,
            fecha: '22 de Diciembre',
            hora: '9:00 AM',
            titulo: 'Taller de Electrónica: Construye tu LED',
            ubicacion: 'Colegio Técnico "Innovación"',
            descripcion: 'Los niños construirán circuitos simples y encenderán LEDs.',
            categoria: 'taller',
            capacidad: '30 niños'
        },
        {
            id: 4,
            fecha: '28 de Diciembre',
            hora: '11:00 AM',
            titulo: 'Feria Comunitaria de Ciencia',
            ubicacion: 'Parque Central',
            descripcion: 'Gran evento con múltiples talleres, demostraciones y actividades interactivas.',
            categoria: 'evento',
            capacidad: 'Público abierto'
        },
        {
            id: 5,
            fecha: '5 de Enero',
            hora: '2:00 PM',
            titulo: 'Reunión de Voluntarios',
            ubicacion: 'Sede de Puentes de 100cia',
            descripcion: 'Planificación de actividades para el próximo semestre.',
            categoria: 'reunion',
            capacidad: '40 voluntarios'
        },
        {
            id: 6,
            fecha: '12 de Enero',
            hora: '10:30 AM',
            titulo: 'Taller de Biología: Microscopía',
            ubicacion: 'Instituto Estatal de Educación',
            descripcion: 'Observaremos células y microorganismos con microscopios reales.',
            categoria: 'taller',
            capacidad: '20 niños'
        }
    ];

    // Datos de noticias
    const noticias = [
        {
            id: 1,
            titulo: '¡Alcanzamos los 1,200 niños impactados!',
            fecha: '5 de Diciembre, 2024',
            resumen: 'Con el último taller realizado en Guadalajara, hemos alcanzado la cifra histórica de 1,200 niños impactados con nuestras actividades de divulgación científica.',
            imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300"%3E%3Crect fill="%23f0f4ff" width="500" height="300"/%3E%3Ctext x="250" y="150" font-size="80" fill="%236366f1" text-anchor="middle" dominant-baseline="middle"%3E🎉%3C/text%3E%3C/svg%3E',
            autor: 'Angelina Vázquez',
            categoria: 'logros'
        },
        {
            id: 2,
            titulo: 'Nueva alianza con Museo de Ciencias "Explora"',
            fecha: '1 de Diciembre, 2024',
            resumen: 'Nos complace anunciar una nueva colaboración estratégica para expandir nuestros programas de educación científica en la región.',
            imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300"%3E%3Crect fill="%23fef3c7" width="500" height="300"/%3E%3Ctext x="250" y="150" font-size="80" fill="%23d97706" text-anchor="middle" dominant-baseline="middle"%3E🤝%3C/text%3E%3C/svg%3E',
            autor: 'Ana Gómez',
            categoria: 'novedades'
        },
        {
            id: 3,
            titulo: 'Programa de Voluntariado 2025 abierto',
            fecha: '28 de Noviembre, 2024',
            resumen: 'Si te apasiona la educación y la ciencia, ¡únete a nuestro equipo de voluntarios! Contamos con roles para facilitadores, diseñadores de contenido y coordinadores.',
            imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300"%3E%3Crect fill="%23fce7f3" width="500" height="300"/%3E%3Ctext x="250" y="150" font-size="80" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle"%3E🙋%3C/text%3E%3C/svg%3E',
            autor: 'Carlos Pérez',
            categoria: 'novedades'
        },
        {
            id: 4,
            titulo: 'Publicado nuevo kit educativo: "Química en Casa"',
            fecha: '20 de Noviembre, 2024',
            resumen: 'Acabamos de lanzar nuestro nuevo kit de bajo costo para que familias puedan realizar experimentos químicos seguros en el hogar.',
            imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300"%3E%3Crect fill="%23f0fdf4" width="500" height="300"/%3E%3Ctext x="250" y="150" font-size="80" fill="%2310b981" text-anchor="middle" dominant-baseline="middle"%3E🧪%3C/text%3E%3C/svg%3E',
            autor: 'Fernando Palacios',
            categoria: 'recursos'
        }
    ];

    // Eventos para el calendario
    const eventosCalendario = eventos.map(e => ({
        fecha: e.fecha.split(' ')[0],
        titulo: e.titulo
    }));

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
                                {['todos', 'taller', 'evento', 'conferencia', 'reunion'].map(cat => (
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
                                {['todos', 'novedades', 'logros', 'recursos'].map(cat => (
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
                            <Calendario eventos={eventosCalendario} />

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
        </div>
    );
};

export default EventosNoticias;
