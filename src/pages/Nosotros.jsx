import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import StatsCounter from '../components/StatsCounter';
import Carrusel from '../components/Carrusel';
import SocialIcon from '../components/SocialIcon';
import { useScrollTop } from '../hooks/useScrollTop';
import { Link } from 'react-router-dom';
import { teamMembers, carouselImages, impactStats, testimonies, timeline } from '../data/nosotrosData';

/**
 * Nosotros (About) page - illustrated style scaffold
 */
const Nosotros = () => {
    // Scroll to top when component mounts
    useScrollTop();

    return (
        <div className="min-h-screen bg-slate-50">
            <NavBar />

            <header className="bg-hero-nosotros text-white py-20">
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Nosotros</h1>
                        <p className="text-lg opacity-90 mb-6">Conectamos niños con experiencias prácticas de ciencia, promoviendo curiosidad y pensamiento crítico.</p>
                        <div className="flex gap-3">
                            <Link to={{ pathname: "/contribuir", search: "?tab=donar" }} className="btn-main">Donar</Link>
                            <Link to={{ pathname: "/contribuir", search: "?tab=voluntario" }} className="btn-main">Ser Voluntario</Link>
                        </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        {/* Illustrated hero: simple SVG */}
                        <svg viewBox="0 0 400 300" className="w-72 h-56" xmlns="http://www.w3.org/2000/svg">
                            <rect rx="20" width="100%" height="100%" fill="#EEF2FF" />
                            <g transform="translate(40,30)">
                                <circle cx="60" cy="60" r="34" fill="#6366F1" opacity="0.12" />
                                <path d="M20 160 C60 120 100 120 140 160" stroke="#7C3AED" strokeWidth="6" fill="none" strokeLinecap="round" />
                                <rect x="80" y="40" width="60" height="80" rx="12" fill="#7C3AED" opacity="0.12" />
                                <circle cx="200" cy="80" r="30" fill="#FDE68A" opacity="0.9" />
                            </g>
                        </svg>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12">
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Impacto / Números clave</h2>
                    <p className="text-gray-700 mb-6">Algunas cifras representativas del trabajo realizado hasta ahora.</p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {impactStats.map((stat) => (
                            <StatsCounter key={stat.label} value={stat.value} label={stat.label} />
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Nuestra misión</h2>
                    <p className="text-gray-700">Fomentar el acceso a la ciencia práctica para niñas y niños, mediante talleres presenciales, materiales abiertos y alianzas locales.</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Nuestra visión</h2>
                    <p className="text-gray-700 mb-4">Ser un referente regional en educación científica para las infancias, donde cada escuela y comunidad tenga acceso a experiencias prácticas de ciencia que despierten curiosidad y habilidades críticas.</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Expandir el programa a 100+ escuelas en 5 años.</li>
                        <li>Generar recursos educativos abiertos que miles de docentes puedan usar.</li>
                        <li>Construir una red sostenible de voluntariado y aliados locales.</li>
                    </ul>
                </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Qué hacemos</h2>
                        <p className="text-gray-700 mb-4">Desarrollamos actividades y recursos pensados para acercar la ciencia a niñas y niños de forma segura, práctica y divertida. Algunas de nuestras líneas de trabajo:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                            <li><strong>Talleres presenciales:</strong> sesiones prácticas en escuelas y centros comunitarios, con materiales adaptados por edad.</li>
                            <li><strong>Recursos abiertos:</strong> guías, hojas de actividades y vídeos para docentes y familias bajo licencias abiertas.</li>
                            <li><strong>Formación docente:</strong> cursos y acompañamiento para que profesores integren actividades experimentales en su aula.</li>
                            <li><strong>Eventos comunitarios:</strong> ferias de ciencia y actividades familiares para divulgar métodos científicos de forma lúdica.</li>
                            <li><strong>Desarrollo de kits:</strong> diseño y testeo de kits seguros y económicos para realizar experimentos en contextos con pocos recursos.</li>
                        </ul>
                        <p className="text-gray-700">Si tienes una escuela o centro interesado, contáctanos y adaptamos una propuesta según tus necesidades.</p>
                    </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Galería de Momentos</h2>
                    <p className="text-gray-700 mb-6">Un vistazo a nuestros talleres, eventos y actividades en acción.</p>
                    <Carrusel images={carouselImages} autoplayDelay={4000} />
                    <div className="text-center mt-6">
                        <Link
                            to="/galeria"
                            className="btn-main inline-block"
                        >
                            Ver Galería Completa →
                        </Link>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Equipo</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {teamMembers.map((t) => (
                            <TeamCard key={t.name} name={t.name} role={t.role} bio={t.bio} />
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Aliados y Partners</h2>
                    <p className="text-gray-700 mb-6">Colaboramos con instituciones educativas, centros culturales y organizaciones sin ánimo de lucro que potencian nuestro impacto.</p>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-indigo-600 mb-4">Escuelas e Institutos</h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-600">
                                <div className="font-semibold text-gray-800">Escuela Primaria "Semillitas"</div>
                                <p className="text-sm text-gray-600">Implementación de talleres mensuales para 150 niños.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-600">
                                <div className="font-semibold text-gray-800">Colegio Técnico "Innovación"</div>
                                <p className="text-sm text-gray-600">Formación docente en metodología STEAM.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-600">
                                <div className="font-semibold text-gray-800">Instituto Estatal de Educación</div>
                                <p className="text-sm text-gray-600">Diseño de currículo y validación de recursos.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-semibold text-purple-600 mb-4">Centros Culturales y Museos</h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-600">
                                <div className="font-semibold text-gray-800">Museo de Ciencias "Explora"</div>
                                <p className="text-sm text-gray-600">Espacios para ferias y eventos comunitarios.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-600">
                                <div className="font-semibold text-gray-800">Centro Cultural Barrial</div>
                                <p className="text-sm text-gray-600">Talleres para familias en zonas periféricas.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-600">
                                <div className="font-semibold text-gray-800">Biblioteca Pública Central</div>
                                <p className="text-sm text-gray-600">Hosting de recursos digitales abiertos.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-green-600 mb-4">Organizaciones sin Ánimo de Lucro</h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-600">
                                <div className="font-semibold text-gray-800">Fundación por la Educación</div>
                                <p className="text-sm text-gray-600">Financiamiento de materiales y transporte.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-600">
                                <div className="font-semibold text-gray-800">Red de Voluntarios Tech</div>
                                <p className="text-sm text-gray-600">Desarrollo y mantenimiento de plataforma web.</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-600">
                                <div className="font-semibold text-gray-800">ONG de Inclusión Social</div>
                                <p className="text-sm text-gray-600">Extensión de talleres a poblaciones vulnerables.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4">Historias / Testimonios</h2>
                    <p className="text-gray-700 mb-6">Algunas voces de quienes han participado en los talleres y actividades.</p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {testimonies.map((testimony) => (
                            <div key={testimony.author} className="bg-white p-6 rounded-xl shadow-md">
                                <p className="text-gray-800 italic mb-4">"{testimony.quote}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold">{testimony.author}</div>
                                        <div className="text-sm text-gray-500">{testimony.city}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Cronograma / Línea de Tiempo</h2>
                    <p className="text-gray-700 mb-8">Hitos importantes en el desarrollo de Puentes de 100cia.</p>
                    
                    <div className="space-y-6">
                        {timeline.map((event, index) => (
                            <div key={event.year} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className={`w-4 h-4 rounded-full ${index === timeline.length - 1 ? 'bg-green-500' : 'bg-indigo-600'}`}></div>
                                    {index < timeline.length - 1 && <div className="w-1 h-20 bg-gray-300"></div>}
                                </div>
                                <div>
                                    <div className={`font-bold text-lg ${index === timeline.length - 1 ? 'text-green-600' : 'text-indigo-600'}`}>{event.year}</div>
                                    <p className="text-gray-700"><strong>{event.title}</strong> — {event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Contacto</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Ponte en contacto</h3>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">📧</span>
                                    <div>
                                        <p className="font-semibold">Email</p>
                                        <p className="text-gray-600"><a href="mailto:hola@puentesde100cia.org" className="text-indigo-600 hover:underline">hola@puentesde100cia.org</a></p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">📱</span>
                                    <div>
                                        <p className="font-semibold">Teléfono</p>
                                        <p className="text-gray-600">+52 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">📍</span>
                                    <div>
                                        <p className="font-semibold">Ubicación</p>
                                        <p className="text-gray-600">Av. Principal 123, Ciudad de México</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold mb-3">Síguenos en redes</p>
                                <div className="flex gap-3">
                                    <SocialIcon type="facebook" href="#" />
                                    <SocialIcon type="instagram" href="#" />
                                    <SocialIcon type="tiktok" href="#" />
                                    <SocialIcon type="linkedin" href="#" />
                                    <SocialIcon type="whatsapp" href="#" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">Envíanos un mensaje</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Nombre</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="Tu nombre" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Email</label>
                                    <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="tu@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Asunto</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" placeholder="¿En qué podemos ayudarte?" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1">Mensaje</label>
                                    <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600" rows="4" placeholder="Cuéntanos más..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700">Enviar</button>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-indigo-50 to-white p-8 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">¿Te interesa colaborar?</h3>
                    <p className="text-gray-700 mb-4">Puedes donar, apuntarte como voluntario o proponernos un experimento. ¡Tu aporte cuenta!</p>
                    <div className="flex gap-3">
                        <Link to={{ pathname: "/contribuir", search: "?tab=donar" }} className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg">Donar</Link>
                        <Link to={{ pathname: "/contribuir", search: "?tab=voluntario" }} className="bg-white text-indigo-600 font-semibold py-2 px-4 rounded-lg">Ser Voluntario</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Nosotros;
