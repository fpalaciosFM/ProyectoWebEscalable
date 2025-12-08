import { useSearchParams, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useScrollTop } from '../hooks/useScrollTop';
import { donationOptions, volunteerRoles, proposalTypes, faqItems } from '../data/contribuirData';

/**
 * Contribuir Page
 * Página que centraliza las formas de colaborar con el proyecto:
 * - Donar fondos (opciones estáticas por ahora)
 * - Ser voluntario (lista de roles y formulario de interés)
 * - Proponer experimentos (formulario de envío)
 *
 * La tab activa se controla mediante el query param `?tab=` (p. ej. `?tab=donar`).
 */

const Contribuir = () => {
    const [searchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'donar';

    useScrollTop();

    return (
        <div className="min-h-screen bg-slate-50">
            <NavBar />
            {/* Hero Section */}
            <div className="bg-hero-contribuir text-white py-12 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    ¡Sé Parte del Cambio! 🌟
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                    Hay muchas formas de contribuir a la divulgación de ciencia para niños.
                    Elige la que mejor se ajuste a ti.
                </p>
            </div>

            {/* Tabs Navigation */}
            <div className="max-w-4xl mx-auto px-6 py-8">
                <div className="flex flex-wrap gap-4 justify-center mb-12">
                    <Link
                        to="/contribuir?tab=donar"
                        className={`px-8 py-3 rounded-full font-bold transition ${
                            activeTab === 'donar'
                                ? 'bg-[var(--color-success)] text-white shadow-lg'
                                : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-[var(--color-success)]'
                        }`}
                    >
                        💰 Donar Fondos
                    </Link>
                    <Link
                        to="/contribuir?tab=voluntario"
                        className={`px-8 py-3 rounded-full font-bold transition ${
                            activeTab === 'voluntario'
                                ? 'bg-[var(--color-primary)] text-white shadow-lg'
                                : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-[var(--color-primary)]'
                        }`}
                    >
                        🤝 Ser Voluntario
                    </Link>
                    <Link
                        to="/contribuir?tab=proponer"
                        className={`px-8 py-3 rounded-full font-bold transition ${
                            activeTab === 'proponer'
                                ? 'bg-[var(--color-accent)] text-white shadow-lg'
                                : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-[var(--color-accent)]'
                        }`}
                    >
                        💡 Proponer Experimentos
                    </Link>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    {/* TAB: Donar Fondos */}
                    {activeTab === 'donar' && (
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-success">💰 Donar Fondos</h2>
                            <p className="text-gray-700 text-lg mb-6">
                                Tu donación nos ayuda a comprar materiales, transportarnos a comunidades,
                                y mejorar nuestros talleres para que más niños accedan a la ciencia de calidad.
                            </p>

                            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-8">
                                <h3 className="font-bold text-indigo-900 mb-2">¿A dónde va tu donación?</h3>
                                <ul className="text-gray-700 space-y-2">
                                    <li>✓ 40% — Materiales y equipos para experimentos</li>
                                    <li>✓ 30% — Transporte y logística de talleres</li>
                                    <li>✓ 20% — Desarrollo de plataforma digital</li>
                                    <li>✓ 10% — Administración y gestión</li>
                                </ul>
                            </div>

                            <h3 className="text-2xl font-bold mb-6 text-gray-800">Opciones de Donación</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {donationOptions.map((option) => (
                                    <div
                                        key={option.id}
                                        className={`bg-gradient-to-br border-2 rounded-xl p-6 text-center hover:shadow-lg transition ${
                                            option.popular ? 'transform scale-105' : ''
                                        }`}
                                        style={{
                                            backgroundImage: `linear-gradient(to bottom right, ${option.bgFrom}, ${option.bgTo})`,
                                            borderColor: option.borderColor,
                                        }}
                                    >
                                        <div className="text-4xl mb-3">{option.emoji}</div>
                                        <p className="font-bold text-lg mb-1" style={{ color: option.textColor }}>
                                            {option.amount}
                                        </p>
                                        <p className="text-sm text-gray-700 mb-4">{option.description}</p>
                                        {option.popular && (
                                            <p className="text-xs font-bold mb-3" style={{ color: option.badgeColor }}>
                                                ⭐ MÁS POPULAR
                                            </p>
                                        )}
                                        <button className="btn-main w-full">Donar Ahora</button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-600 rounded">
                                <p className="text-amber-900 font-semibold mb-2">🔒 100% Seguro</p>
                                <p className="text-gray-700 text-sm">
                                    Tus donaciones se procesan de forma segura. Recibirás un comprobante fiscal
                                    y acceso a reportes trimestrales sobre cómo se usó tu aporte.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* TAB: Ser Voluntario */}
                    {activeTab === 'voluntario' && (
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-primary">🤝 Ser Voluntario</h2>
                            <p className="text-gray-700 text-lg mb-6">
                                ¿Te apasiona la ciencia y quieres inspirar a la próxima generación?
                                Únete a nuestro equipo de voluntarios.
                            </p>

                            <h3 className="text-2xl font-bold mb-4 text-gray-800">Roles de Voluntarios</h3>
                            <div className="space-y-6">
                                {volunteerRoles.map((role) => (
                                    <div key={role.id} className="pl-6 py-4 border-l-4" style={{ borderColor: role.borderColor }}>
                                        <h4 className="text-xl font-bold mb-2" style={{ color: role.borderColor }}>
                                            {role.emoji} {role.title}
                                        </h4>
                                        <p className="text-gray-700 mb-3">{role.description}</p>
                                        <p className="text-sm text-gray-600">{role.details}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded">
                                <h4 className="font-bold text-indigo-900 mb-3">Beneficios de Ser Voluntario</h4>
                                <ul className="text-gray-700 space-y-2">
                                    <li>✓ Certificado de voluntariado</li>
                                    <li>✓ Experiencia en educación y divulgación científica</li>
                                    <li>✓ Red de profesionales comprometidos</li>
                                    <li>✓ Flexibilidad horaria</li>
                                    <li>✓ Impacto directo en comunidades</li>
                                </ul>
                            </div>

                            <div className="mt-8">
                                <button className="btn-main w-full text-lg">
                                    ¡Quiero Ser Voluntario! 📝
                                </button>
                            </div>
                        </div>
                    )}

                    {/* TAB: Proponer Experimentos */}
                    {activeTab === 'proponer' && (
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-accent">💡 Proponer Experimentos</h2>
                            <p className="text-gray-700 text-lg mb-6">
                                ¿Tienes una idea de experimento genial? ¿Conoces un científico local dispuesto a colaborar?
                                ¡Comparte tus ideas con nosotros!
                            </p>

                            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-8 rounded">
                                <h3 className="font-bold text-indigo-900 mb-3">🎯 ¿Por qué tu propuesta importa?</h3>
                                <p className="text-gray-700">
                                    Nuestros experimentos son co-creados con la comunidad. Cada propuesta nos ayuda a mantener
                                    contenido fresco, relevante y adaptado a los intereses locales de los niños.
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold mb-6 text-gray-800">¿Qué Buscamos?</h3>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                                    <h4 className="text-lg font-bold text-blue-600 mb-3">Experimentos Simples</h4>
                                    <p className="text-gray-700 text-sm">
                                        Actividades que se hagan con materiales caseros, en máximo 30 minutos,
                                        seguras para niños de 5-12 años.
                                    </p>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
                                    <h4 className="text-lg font-bold text-green-600 mb-3">Colaboradores Expertos</h4>
                                    <p className="text-gray-700 text-sm">
                                        Profesionales (biólogos, físicos, químicos) que quieran hacer una sesión de
                                        "Ciencia en Vivo" o guiar un taller.
                                    </p>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                                    <h4 className="text-lg font-bold text-purple-600 mb-3">Recursos Educativos</h4>
                                    <p className="text-gray-700 text-sm">
                                        Videos, guías descargables, libros digitales, podcasts o cualquier material
                                        que creas útil para niños.
                                    </p>
                                </div>

                                <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
                                    <h4 className="text-lg font-bold text-orange-600 mb-3">Alianzas y Espacios</h4>
                                    <p className="text-gray-700 text-sm">
                                        Acceso a laboratorios, museos, parques naturales, o espacios comunitarios
                                        donde podamos realizar talleres.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8 rounded">
                                <h4 className="font-bold text-yellow-900 mb-2">📋 Criterios de Aceptación</h4>
                                <ul className="text-gray-700 text-sm space-y-2">
                                    <li>✓ Seguridad comprobada</li>
                                    <li>✓ Alineación con objetivos educativos</li>
                                    <li>✓ Accesibilidad (materiales asequibles)</li>
                                    <li>✓ Relevancia para el público infantil (5-12 años)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">Envía tu Propuesta</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2">Tu Nombre</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                                            placeholder="Tu nombre"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600"
                                            placeholder="tu@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2">Tipo de Propuesta</label>
                                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600">
                                            <option>Selecciona una opción...</option>
                                            {proposalTypes.map((type) => (
                                                <option key={type.id}>{type.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-bold mb-2">Descripción de tu Propuesta</label>
                                        <textarea
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-600 h-32"
                                            placeholder="Cuéntanos detalles sobre tu propuesta..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition text-lg"
                                    >
                                        Enviar Propuesta 🚀
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                    {faqItems.map((item) => (
                        <details key={item.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition cursor-pointer">
                            <summary className="font-bold text-lg text-indigo-600">{item.question}</summary>
                            <p className="text-gray-700 mt-4">{item.answer}</p>
                        </details>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contribuir;
