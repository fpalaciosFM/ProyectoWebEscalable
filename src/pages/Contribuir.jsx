import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useScrollTop } from '../hooks/useScrollTop';

/**
 * Página: Contribuir
 * Página hub que centraliza todas las formas de colaborar con Puentes de 100cia.
 * 
 * Propósito: 
 * - Explicar las diferentes formas de contribuir
 * - Guiar a usuarios a las páginas específicas según sus intereses
 * - Mostrar impacto de las contribuciones
 * 
 * Rutas:
 * - /campanas/donacion-general → Donaciones y fondo general
 * - /voluntariado → Roles y formulario de voluntariado
 * - /proponer-experimento → Proponer experimentos y colaboradores
 */

const Contribuir = () => {
    useScrollTop();

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <NavBar />

            {/* Hero Section */}
            <header className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        ¡Sé Parte del Cambio! 🌟
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                        Hay muchas formas de contribuir a la divulgación de ciencia para niños.
                        Elige la que mejor se ajuste a ti.
                    </p>
                </div>
            </header>

            <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-12">
                {/* Sección: Stats de impacto */}
                <section className="mb-16 grid md:grid-cols-3 gap-6">
                    <div className="card-base p-6 text-center">
                        <p className="text-4xl font-bold text-indigo-600 mb-2">2,500+</p>
                        <p className="text-neutral-700 font-semibold">Niños impactados</p>
                        <p className="text-sm text-neutral-600 mt-2">en 2024</p>
                    </div>
                    <div className="card-base p-6 text-center">
                        <p className="text-4xl font-bold text-purple-600 mb-2">45+</p>
                        <p className="text-neutral-700 font-semibold">Voluntarios activos</p>
                        <p className="text-sm text-neutral-600 mt-2">contribuyendo</p>
                    </div>
                    <div className="card-base p-6 text-center">
                        <p className="text-4xl font-bold text-pink-600 mb-2">$150k+</p>
                        <p className="text-neutral-700 font-semibold">Donado</p>
                        <p className="text-sm text-neutral-600 mt-2">en campañas</p>
                    </div>
                </section>

                {/* Sección: Opciones principales */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-12 text-center">
                        Formas de Contribuir
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Opción 1: Donar */}
                        <div className="card-base p-8 hover:shadow-xl transition border-t-4 border-emerald-600 flex flex-col">
                            <div className="text-5xl mb-4">💰</div>
                            <h3 className="text-2xl font-bold text-neutral-800 mb-3">
                                Donar Fondos
                            </h3>
                            <p className="text-neutral-600 mb-6 flex-grow">
                                Financia nuestras operaciones, compra materiales y lleva ciencia a más comunidades.
                            </p>
                            <div className="space-y-2 mb-6">
                                <p className="text-sm text-neutral-700">
                                    <span className="font-bold">Opciones:</span> Una sola vez o recurrente
                                </p>
                                <p className="text-sm text-neutral-700">
                                    <span className="font-bold">Elijas:</span> Fondo general o campañas específicas
                                </p>
                                <p className="text-sm text-neutral-700">
                                    <span className="font-bold">Impacto:</span> 2-3 niños por MXN donado
                                </p>
                            </div>
                            <Link
                                to="/campanas"
                                className="btn-main text-center w-full"
                            >
                                Ver Campañas 💙
                            </Link>
                        </div>

                        {/* Opción 2: Voluntariado */}
                        <div className="card-base p-8 hover:shadow-xl transition border-t-4 border-indigo-600 flex flex-col">
                            <div className="text-5xl mb-4">🤝</div>
                            <h3 className="text-2xl font-bold text-neutral-800 mb-3">
                                Ser Voluntario
                            </h3>
                            <p className="text-neutral-600 mb-6 flex-grow">
                                Facilita talleres, diseña experimentos, o apoya desde casa.
                            </p>
                            <div className="space-y-2 mb-6">
                                <p className="text-sm text-neutral-700">
                                    <span className="font-bold">Roles:</span> Facilitador, diseñador, mentor
                                </p>
                                <p className="text-sm text-neutral-700">
                                    <span className="font-bold">Flexibilidad:</span> Desde 2 horas/mes
                                </p>
                                <p className="text-sm text-neutral-700">
                                    <span className="font-bold">Impacto:</span> 10-50 niños por sesión
                                </p>
                            </div>
                            <Link
                                to="/voluntariado"
                                className="btn-main text-center w-full"
                            >
                                Explorar Voluntariado 🤗
                            </Link>
                        </div>

                        {/* Opción 3: Proponer */}
                        <div className="card-base p-8 hover:shadow-xl transition border-t-4 border-purple-600 flex flex-col">
                            <div className="text-5xl mb-4">💡</div>
                            <h3 className="text-2xl font-bold text-neutral-800 mb-3">
                                Proponer Experimentos
                            </h3>
                            <p className="text-neutral-600 mb-6 flex-grow">
                                Comparte tus ideas de experimentos o conecta científicos con nosotros.
                            </p>
                            <div className="space-y-2 mb-6">
                                <p className="text-sm text-neutral-700">
                                    <span className="font-bold">Ideal para:</span> Educadores y entusiastas
                                </p>
                                <p className="text-sm text-neutral-700">
                                    <span className="font-bold">Tiempo:</span> 20 minutos para proponer
                                </p>
                                <p className="text-sm text-neutral-700">
                                    <span className="font-bold">Impacto:</span> 100+ niños si es adoptado
                                </p>
                            </div>
                            <Link
                                to="/proponer-experimento"
                                className="btn-main text-center w-full"
                            >
                                Proponer Idea ✨
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Sección: CTA Final */}
                <section className="card-base p-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl text-center">
                    <h2 className="text-3xl font-bold mb-4">¿Aún No Sabes Por Dónde Empezar?</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Cada forma de contribuir es importante. Elige la que mejor se ajuste a tu tiempo y pasión.
                    </p>
                    <div className="space-y-4">
                        <p className="text-sm opacity-80">
                            Próximas sesiones de información: Viernes 6pm y Domingo 10am
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contribuir;