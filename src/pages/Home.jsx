// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import SocialIcon from '../components/SocialIcon';

/**
 * Home Page - Página de Inicio Completa
 * Landing page rediseñada que presenta todas las secciones de la aplicación.
 * Incluye:
 * - Hero section con CTA principal
 * - Exploración de contenido (Experimentos, Galería, Eventos)
 * - Presentación de equipo (teaser a Nosotros)
 * - Formas de contribuir
 * - Footer con navegación y redes sociales
 */
const Home = () => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">

            {/* 1. NAVBAR / ENCABEZADO */}
            <NavBar />

            {/* 2. HERO SECTION - Mejorado */}
            <header className="relative bg-hero-rainbow text-white py-24 px-6 text-center overflow-hidden">
                {/* Decoración de fondo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 text-6xl">🧪</div>
                    <div className="absolute bottom-20 right-20 text-5xl">🔬</div>
                    <div className="absolute top-1/2 right-10 text-5xl">📚</div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        Descubre la Magia de la Ciencia ✨
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed">
                        Aprende, experimenta y construye el futuro con nosotros. 
                        Una plataforma interactiva para pequeños y grandes científicos.
                    </p>
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
                </div>
            </header>

            {/* 3. SECCIÓN DE EXPLORACIÓN - 3 áreas principales */}
            <section className="py-20 px-6 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Explora Nuestro Universo Científico</h2>
                    <p className="text-center text-muted mb-16 max-w-2xl mx-auto text-lg">
                        Descubre experimentos fascinantes, momentos especiales y eventos inspiradores
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Tarjeta Experimentos */}
                        <Link to="/experimentos" className="group cursor-pointer">
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4" style={{borderTopColor: 'var(--color-primary)'}}>
                                <div className="text-6xl mb-6">🔬</div>
                                <h3 className="text-2xl font-bold mb-3 text-primary group-hover:opacity-75 transition">Experimentos</h3>
                                <p className="text-muted mb-6">Guías paso a paso para hacer ciencia segura y divertida con materiales caseros. Aprende el "por qué" de las cosas.</p>
                                <span className="badge-primary">
                                    Explorar →
                                </span>
                            </div>
                        </Link>

                        {/* Tarjeta Galería */}
                        <Link to="/galeria" className="group cursor-pointer">
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4" style={{borderTopColor: 'var(--color-secondary)'}}>
                                <div className="text-6xl mb-6">📸</div>
                                <h3 className="text-2xl font-bold mb-3 text-secondary group-hover:opacity-75 transition">Galería de Momentos</h3>
                                <p className="text-muted mb-6">Revive nuestros mejores momentos en talleres, eventos y actividades comunitarias. Inspiración visual de ciencia en acción.</p>
                                <span className="badge-secondary" style={{backgroundColor: 'var(--color-secondary-light)', color: 'var(--color-secondary)'}}>
                                    Ver Galería →
                                </span>
                            </div>
                        </Link>

                        {/* Tarjeta Eventos */}
                        <Link to="/eventos-noticias" className="group cursor-pointer">
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4" style={{borderTopColor: 'var(--color-success)'}}>
                                <div className="text-6xl mb-6">📅</div>
                                <h3 className="text-2xl font-bold mb-3 text-success group-hover:opacity-75 transition">Eventos y Noticias</h3>
                                <p className="text-muted mb-6">Descubre próximos eventos, talleres y las últimas noticias de nuestro proyecto. Mantente actualizado con nosotros.</p>
                                <span className="badge-success">
                                    Ver Eventos →
                                </span>
                            </div>
                        </Link>
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
                        {/* Donar */}
                        <div className="card-success">
                            <div className="text-5xl mb-4">💰</div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Donar Fondos</h3>
                            <p className="text-muted mb-6">
                                Tu aporte nos ayuda a mantener nuestros programas, comprar materiales y llegar a más personas.
                            </p>
                            <Link
                                to="/contribuir?tab=donar"
                                className="btn-main inline-block"
                            >
                                Donar Ahora
                            </Link>
                        </div>

                        {/* Voluntario */}
                        <div className="card-primary">
                            <div className="text-5xl mb-4">🤝</div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Ser Voluntario</h3>
                            <p className="text-muted mb-6">
                                Únete a nuestro equipo de voluntarios y ayuda a facilitar experimentos, talleres y eventos.
                            </p>
                            <Link
                                to="/contribuir?tab=voluntario"
                                className="btn-main inline-block"
                            >
                                Voluntariado
                            </Link>
                        </div>

                        {/* Proponer */}
                        <div className="card-accent">
                            <div className="text-5xl mb-4">💡</div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-800">Proponer Experimentos</h3>
                            <p className="text-muted mb-6">
                                ¿Tienes una idea genial? Propón un experimento nuevo para nuestra plataforma.
                            </p>
                            <Link
                                to="/contribuir?tab=proponer"
                                className="btn-main inline-block"
                            >
                                Proponer
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. SECCIÓN DE IMPACTO - Números */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Nuestro Impacto</h2>

                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-5xl font-bold text-primary mb-2">1500+</div>
                            <p className="text-muted text-lg">Estudiantes Impactados</p>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold text-secondary mb-2">200+</div>
                            <p className="text-muted text-lg">Experimentos Realizados</p>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold text-accent mb-2">50+</div>
                            <p className="text-muted text-lg">Eventos Comunitarios</p>
                        </div>
                        <div className="p-6">
                            <div className="text-5xl font-bold text-success mb-2">12+</div>
                            <p className="text-muted text-lg">Años de Trayectoria</p>
                        </div>
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
            <footer className="text-white py-12 px-6" style={{backgroundColor: '#1f2937'}}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        {/* About */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-primary">Puentes de 100cia</h3>
                            <p style={{color: 'var(--color-text-secondary)'}} className="text-sm">
                                Inspirando la próxima generación de científicos a través de la educación interactiva y la experimentación.
                            </p>
                        </div>

                        {/* Navegación */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-primary">Navegación</h3>
                            <ul className="space-y-2 text-sm" style={{color: 'var(--color-text-secondary)'}}>
                                <li><Link to="/" className="link-primary">Inicio</Link></li>
                                <li><Link to="/nosotros" className="link-primary">Nosotros</Link></li>
                                <li><Link to="/experimentos" className="link-primary">Experimentos</Link></li>
                                <li><Link to="/galeria" className="link-primary">Galería</Link></li>
                            </ul>
                        </div>

                        {/* Más */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-primary">Explorar</h3>
                            <ul className="space-y-2 text-sm" style={{color: 'var(--color-text-secondary)'}}>
                                <li><Link to="/eventos-noticias" className="link-primary">Eventos y Noticias</Link></li>
                                <li><Link to="/contribuir" className="link-primary">Contribuir</Link></li>
                                <li><a href="#contacto" className="link-primary">Contacto</a></li>
                                <li><a href="#privacidad" className="link-primary">Privacidad</a></li>
                            </ul>
                        </div>

                        {/* Redes Sociales */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-primary">Síguenos</h3>
                            <div className="flex gap-4">
                                <SocialIcon type="facebook" />
                                <SocialIcon type="instagram" />
                                <SocialIcon type="tiktok" />
                                <SocialIcon type="linkedin" />
                                <SocialIcon type="whatsapp" />
                            </div>
                        </div>
                    </div>

                    <div className="border-t pt-8 text-center text-sm" style={{borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)'}}>
                        <p>© 2025 Puentes de 100cia. Hecho con ❤️ y curiosidad científica.</p>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Home;