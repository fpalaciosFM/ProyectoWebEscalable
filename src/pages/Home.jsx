// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

/**
 * Home Page
 * Página de inicio con hero, resumen de características y llamada a la acción.
 * - Importante: usa `NavBar` como encabezado común de la aplicación
 */
const Home = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-gray-800">

            {/* 1. NAVBAR / ENCABEZADO */}
            <NavBar />

            {/* 2. HERO SECTION */}
            <header className="bg-hero-rainbow text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                    Descubre la Magia de la Ciencia 🧪
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Aprende, experimenta y construye el futuro con nosotros.
                    Una plataforma interactiva para pequeños científicos.
                </p>
                <Link
                    to="/experimentos"
                    className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 hover:text-indigo-800 transition transform hover:scale-105 inline-block"
                >
                    ¡Quiero Experimentar!
                </Link>
            </header>

            {/* 3. SECCIÓN DE CARACTERÍSTICAS (Grid de 3 columnas) */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">¿Qué encontrarás aquí?</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Tarjeta 1 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-blue-400">
                        <div className="text-4xl mb-4">🔬</div>
                        <h3 className="text-xl font-bold mb-2">Experimentos Caseros</h3>
                        <p className="text-gray-600">Guías paso a paso para hacer ciencia segura con cosas que tienes en tu cocina.</p>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-purple-400">
                        <div className="text-4xl mb-4">🧱</div>
                        <h3 className="text-xl font-bold mb-2">Muro de la Ciencia</h3>
                        <p className="text-gray-600">Deja tu huella en nuestro muro virtual y ayuda a construir nuestro laboratorio real.</p>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition border-t-4 border-green-400">
                        <div className="text-4xl mb-4">🎓</div>
                        <h3 className="text-xl font-bold mb-2">Aprende Jugando</h3>
                        <p className="text-gray-600">Artículos divertidos y videos que explican el "por qué" de las cosas.</p>
                    </div>
                </div>
            </section>

            {/* 4. FOOTER SIMPLE */}
            <footer className="bg-gray-800 text-white text-center py-6 mt-10">
                <p>© 2025 Muro de la Ciencia. Hecho con curiosidad.</p>
            </footer>

        </div>
    );
};

export default Home;