// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ExplorationCard from '../components/ExplorationCard';
import { useScrollTop } from '../hooks/useScrollTop';
import { exploracionCards, contribucionCards, impactStats } from '../data/homeData';

/**
 * Home Page - Página de Inicio Completa
 * Landing page rediseñada que presenta todas las secciones de la aplicación.
 * 
 * Patrón Arquitectónico:
 * - Datos: importa de src/data/homeData.js (fácil mantener/actualizar)
 * - Componentes: Hero (flexible), ExplorationCard (reutilizable), Footer (consistente)
 * - Hook: useScrollTop para scroll automático al navegar aquí
 * - Estilo: clases CSS semánticas (.btn-main, .card-*, etc) del sistema centralizado
 * 
 * Este patrón se replica en todas las páginas para consistencia y escalabilidad.
 * 
 * Secciones:
 * - Hero section con CTA principal
 * - Exploración de contenido (Experimentos, Galería, Eventos)
 * - Cómo contribuir (Donar, Voluntario, Proponer)
 * - Impacto y estadísticas
 * - Presentación de equipo (teaser a Nosotros)
 * - Formas de contribuir
 * - Footer con navegación y redes sociales
 */
const Home = () => {
    useScrollTop();

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. NAVBAR / ENCABEZADO */}
            <NavBar />

            {/* 2. HERO SECTION */}
            <Hero 
                gradientClass="bg-hero-rainbow"
                title="Descubre la Magia de la Ciencia ✨"
                subtitle="Aprende, experimenta y construye el futuro con nosotros. Una plataforma interactiva para pequeños y grandes científicos."
                padding="py-24 relative overflow-hidden"
            >
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/experimentos"
                        className="btn-main inline-block"
                    >
                        🔬 Explorar Experimentos
                    </Link>
                    <Link
                        to="/nosotros"
                        className="btn-main inline-block"
                    >
                        👥 Conocer nuestro equipo
                    </Link>
                </div>
            </Hero>

            {/* 3. SECCIÓN DE EXPLORACIÓN - 3 áreas principales */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Explora Nuestro Universo Científico</h2>
                    <p className="text-center text-muted mb-16 max-w-2xl mx-auto text-lg">
                        Descubre experimentos fascinantes, momentos especiales y eventos inspiradores
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {exploracionCards.map((card) => (
                            <ExplorationCard
                                key={card.id}
                                titulo={card.titulo}
                                emoji={card.emoji}
                                descripcion={card.descripcion}
                                href={card.href}
                                borderColor={card.borderColor}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SECCIÓN DE EQUIPO - Teaser a Nosotros */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-800">Conoce Nuestro Equipo</h2>
                            <p className="text-lg text-muted mb-4">
                                Somos un equipo apasionado de educadores, científicos y voluntarios dedicados a inspirar la próxima generación de investigadores.
                            </p>
                            <p className="text-lg text-muted mb-8">
                                Nuestra misión es democratizar la ciencia y hacer que sea accesible, divertida e inspiradora para todos.
                            </p>
                            <Link
                                to="/nosotros"
                                className="btn-main inline-block"
                            >
                                Leer Nuestra Historia →
                            </Link>
                        </div>
                        <div className="card-primary rounded-xl p-8 text-center">
                            <div className="text-7xl mb-4">👥</div>
                            <p className="text-muted text-lg mb-6">Un equipo multidisciplinario trabajando juntos por la educación científica de calidad.</p>
                            <div className="space-y-3">
                                <p className="text-2xl font-bold text-primary">+50 Voluntarios</p>
                                <p className="text-2xl font-bold text-secondary">+1000 Participantes</p>
                                <p className="text-2xl font-bold text-accent">+100 Eventos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SECCIÓN DE CONTRIBUCIÓN - Formas de participar */}
            <section className="py-20 px-6" style={{backgroundColor: 'var(--color-primary-light)'}}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Sé Parte del Cambio</h2>
                    <p className="text-center text-muted mb-16 max-w-2xl mx-auto text-lg">
                        Hay muchas formas de contribuir a nuestra misión. Elige la que mejor se adapte a ti.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {contribucionCards.map((card) => (
                            <div key={card.id} className={card.cardClass}>
                                <div className="text-5xl mb-4">{card.emoji}</div>
                                <h3 className="text-2xl font-bold mb-3 text-gray-800">{card.titulo}</h3>
                                <p className="text-muted mb-6">
                                    {card.descripcion}
                                </p>
                                <Link
                                    to={card.href}
                                    className="btn-main inline-block"
                                >
                                    {card.titulo === 'Donar Fondos' ? 'Donar Ahora' : 
                                     card.titulo === 'Ser Voluntario' ? 'Voluntariado' : 
                                     'Proponer'}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. SECCIÓN DE IMPACTO - Números */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Nuestro Impacto</h2>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        {impactStats.map((stat, index) => (
                            <div key={index} className="p-6">
                                <div className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.numero}</div>
                                <p className="text-muted text-lg">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. SECCIÓN CTA FINAL */}
            <section className="py-16 px-6 bg-hero-rainbow text-white text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
                    <p className="text-lg mb-8 opacity-90">
                        Explora nuestra plataforma, descubre nuevos experimentos y únete a una comunidad apasionada por la ciencia.
                    </p>
                    <Link
                        to="/experimentos"
                        className="btn-main inline-block"
                    >
                        ¡Comenzar Ahora!
                    </Link>
                </div>
            </section>

            {/* 8. FOOTER MEJORADO */}
            <Footer />

        </div>
    );
};

export default Home;