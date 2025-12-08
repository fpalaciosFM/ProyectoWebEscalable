import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useScrollTop } from '../hooks/useScrollTop';
import { volunteerRoles } from '../data/contribuirData';

/**
 * Página: Voluntariado
 * Centraliza toda la información y formulario para ser voluntario en Puentes de 100cia.
 * 
 * Características:
 * - Descripción clara de la oportunidad
 * - Roles disponibles con detalles
 * - Beneficios de ser voluntario
 * - Formulario de interés (mock)
 * 
 * Datos: Los roles y FAQs vienen de contribuirData.js
 */

const Voluntariado = () => {
    useScrollTop();

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <NavBar />

            {/* Hero Section */}
            <header className="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white py-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        🤝 Únete a Nuestro Equipo
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                        Ayúdanos a llevar la ciencia a más comunidades. Tu pasión por la educación 
                        puede transformar la vida de cientos de niños.
                    </p>
                </div>
            </header>

            <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-12">
                {/* Sección: Por qué ser voluntario */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-8">¿Por qué ser voluntario?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="card-base p-6">
                            <div className="text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-bold text-neutral-800 mb-3">Impacto Real</h3>
                            <p className="text-neutral-600">
                                Cada taller que facilitas impacta directamente en decenas de niños, 
                                inspirando futuras carreras científicas.
                            </p>
                        </div>
                        <div className="card-base p-6">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="text-xl font-bold text-neutral-800 mb-3">Crecimiento Personal</h3>
                            <p className="text-neutral-600">
                                Mejora tus habilidades de comunicación, liderazgo y enseñanza en un 
                                ambiente colaborativo y amigable.
                            </p>
                        </div>
                        <div className="card-base p-6">
                            <div className="text-4xl mb-4">🤗</div>
                            <h3 className="text-xl font-bold text-neutral-800 mb-3">Comunidad</h3>
                            <p className="text-neutral-600">
                                Forma parte de una red de profesionales y entusiastas comprometidos 
                                con la educación científica.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sección: Roles disponibles */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-8">Roles de Voluntarios</h2>
                    <p className="text-neutral-600 text-lg mb-8">
                        Tenemos múltiples formas de contribuir. Elige el rol que mejor se ajuste 
                        a tu disponibilidad, habilidades e intereses.
                    </p>
                    <div className="space-y-6">
                        {volunteerRoles.map((role, index) => (
                            <div 
                                key={role.id} 
                                className="card-base p-8 border-l-4" 
                                style={{ borderColor: role.borderColor }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl">{role.emoji}</div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-2" style={{ color: role.borderColor }}>
                                            {role.title}
                                        </h3>
                                        <p className="text-neutral-700 mb-3 text-lg">
                                            {role.description}
                                        </p>
                                        <p className="text-neutral-600 mb-4">
                                            {role.details}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="badge-base bg-neutral-100 text-neutral-700">
                                                ⏱️ Flexible
                                            </span>
                                            <span className="badge-base bg-neutral-100 text-neutral-700">
                                                📍 Remoto/Presencial
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sección: Beneficios */}
                <section className="mb-16 card-base p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
                    <h2 className="text-2xl font-bold text-neutral-800 mb-6">Beneficios de Ser Voluntario</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="text-xl">✓</span>
                                <div>
                                    <p className="font-bold text-neutral-800">Certificado de Voluntariado</p>
                                    <p className="text-sm text-neutral-600">Válido para currículum y referencias laborales</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xl">✓</span>
                                <div>
                                    <p className="font-bold text-neutral-800">Experiencia en Divulgación</p>
                                    <p className="text-sm text-neutral-600">Aprende metodologías modernas de enseñanza</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xl">✓</span>
                                <div>
                                    <p className="font-bold text-neutral-800">Red Profesional</p>
                                    <p className="text-sm text-neutral-600">Conecta con científicos, educadores y emprendedores</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="text-xl">✓</span>
                                <div>
                                    <p className="font-bold text-neutral-800">Flexibilidad Total</p>
                                    <p className="text-sm text-neutral-600">Elige tu horario y frecuencia de participación</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xl">✓</span>
                                <div>
                                    <p className="font-bold text-neutral-800">Acceso a Recursos</p>
                                    <p className="text-sm text-neutral-600">Materiales, capacitación y apoyo continuo</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xl">✓</span>
                                <div>
                                    <p className="font-bold text-neutral-800">Impacto Medible</p>
                                    <p className="text-sm text-neutral-600">Reportes de tu contribución y alcance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección: Preguntas comunes */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-8">Preguntas Frecuentes</h2>
                    <div className="space-y-4">
                        <details className="card-base p-6 cursor-pointer group">
                            <summary className="font-bold text-neutral-800 flex items-center gap-2">
                                <span className="group-open:rotate-180 transition">▼</span>
                                ¿Necesito tener experiencia científica?
                            </summary>
                            <p className="text-neutral-600 mt-4 ml-6">
                                No es necesario. Lo más importante es tu pasión por la educación y tu disposición 
                                a aprender. Proporcionamos toda la capacitación y materiales que necesitas.
                            </p>
                        </details>
                        <details className="card-base p-6 cursor-pointer group">
                            <summary className="font-bold text-neutral-800 flex items-center gap-2">
                                <span className="group-open:rotate-180 transition">▼</span>
                                ¿Cuánto tiempo necesito dedicar?
                            </summary>
                            <p className="text-neutral-600 mt-4 ml-6">
                                Depende del rol que elijas. Algunos voluntarios participan en 1-2 talleres mensuales, 
                                otros dedican más tiempo. Tú controlas tu disponibilidad.
                            </p>
                        </details>
                        <details className="card-base p-6 cursor-pointer group">
                            <summary className="font-bold text-neutral-800 flex items-center gap-2">
                                <span className="group-open:rotate-180 transition">▼</span>
                                ¿Puedo ser voluntario desde cualquier lugar?
                            </summary>
                            <p className="text-neutral-600 mt-4 ml-6">
                                Sí. Tenemos roles tanto presenciales (en comunidades específicas) como remotos 
                                (diseño de experimentos, revisión de contenidos, etc.).
                            </p>
                        </details>
                        <details className="card-base p-6 cursor-pointer group">
                            <summary className="font-bold text-neutral-800 flex items-center gap-2">
                                <span className="group-open:rotate-180 transition">▼</span>
                                ¿Hay un compromiso mínimo?
                            </summary>
                            <p className="text-neutral-600 mt-4 ml-6">
                                Recomendamos un mínimo de 3 meses para que puedas sentir el impacto real. 
                                Después, puedes continuar o pausar cuando lo necesites.
                            </p>
                        </details>
                    </div>
                </section>

                {/* Sección: CTA - Formulario */}
                <section className="card-base p-8 bg-gradient-to-br from-indigo-600 to-blue-600 text-white rounded-2xl text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4">¿Listo para Empezar?</h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Completa el formulario y nos pondremos en contacto contigo en 48 horas para 
                        discutir la mejor forma de colaborar.
                    </p>
                    <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition text-lg">
                        📝 Solicitar Voluntariado
                    </button>
                </section>

                {/* Sección: Testimonios (mock) */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-8">Lo que Dicen Nuestros Voluntarios</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="card-base p-6 border-t-4 border-indigo-600">
                            <p className="text-neutral-600 mb-4 italic">
                                "La experiencia más gratificante de mi vida. Ver cómo los ojos de los niños 
                                se iluminan cuando descubren la ciencia es inolvidable."
                            </p>
                            <p className="font-bold text-neutral-800">María González</p>
                            <p className="text-sm text-neutral-600">Facilitadora de Talleres</p>
                        </div>
                        <div className="card-base p-6 border-t-4 border-blue-600">
                            <p className="text-neutral-600 mb-4 italic">
                                "Como ingeniero, encontré en Puentes la forma perfecta de devolver a mi comunidad 
                                mientras desarrollo habilidades de liderazgo."
                            </p>
                            <p className="font-bold text-neutral-800">Carlos Rodríguez</p>
                            <p className="text-sm text-neutral-600">Mentor de Proyectos</p>
                        </div>
                        <div className="card-base p-6 border-t-4 border-cyan-600">
                            <p className="text-neutral-600 mb-4 italic">
                                "Desde casa, diseño experimentos para comunidades rurales. Es increíble contribuir 
                                sin sacrificar mi trabajo principal."
                            </p>
                            <p className="font-bold text-neutral-800">Ana Martínez</p>
                            <p className="text-sm text-neutral-600">Diseñadora de Contenidos (Remota)</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Voluntariado;
