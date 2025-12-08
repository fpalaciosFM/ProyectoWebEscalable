import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useScrollTop } from '../hooks/useScrollTop';

/**
 * Página: Proponer Experimento
 * Centraliza la información, guía y formulario para proponer nuevos experimentos.
 * 
 * Características:
 * - Guía clara sobre qué tipos de experimentos buscamos
 * - Ejemplos de experimentos exitosos
 * - Formulario de propuesta
 * - Criterios de evaluación
 * - FAQ específica
 * 
 * Estado: El formulario es un mock. En producción conectaría con backend.
 */

const ProponerExperimento = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        titulo: '',
        descripcion: '',
        materiales: '',
        duracion: '15-30 minutos',
        nivelEdad: 'primaria',
        tipo: 'simple'
    });
    const [enviado, setEnviado] = useState(false);

    useScrollTop();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Propuesta enviada:', formData);
        setEnviado(true);
        setTimeout(() => {
            setEnviado(false);
            setFormData({
                nombre: '',
                email: '',
                titulo: '',
                descripcion: '',
                materiales: '',
                duracion: '15-30 minutos',
                nivelEdad: 'primaria',
                tipo: 'simple'
            });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <NavBar />

            {/* Hero Section */}
            <header className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white py-16 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        💡 Propón Tu Experimento
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                        ¿Tienes una idea brillante? ¿Conoces a un científico local? 
                        Ayúdanos a crear contenido científico increíble para niños.
                    </p>
                </div>
            </header>

            <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-12">
                {/* Sección: Por qué buscamos propuestas */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-8">¿Por Qué Tus Propuestas Importan?</h2>
                    <div className="card-base p-8 bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-600">
                        <p className="text-neutral-700 text-lg leading-relaxed">
                            Nuestro contenido no viene de un grupo pequeño. Es co-creado con la comunidad. Cada propuesta 
                            que recibimos nos ayuda a mantener los talleres frescos, relevantes y adaptados a los intereses 
                            reales de los niños. Algunas de nuestras ideas más populares nacieron de propuestas como la tuya.
                        </p>
                    </div>
                </section>

                {/* Sección: Qué buscamos */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-8">¿Qué Buscamos?</h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="card-base p-6 border-2 border-blue-200 bg-blue-50">
                            <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🧪</span> Experimentos Simples
                            </h3>
                            <ul className="space-y-2 text-neutral-700">
                                <li>✓ Materiales caseros o de bajo costo</li>
                                <li>✓ Máximo 30 minutos de duración</li>
                                <li>✓ Seguros para niños de 5-12 años</li>
                                <li>✓ Que demuestren conceptos científicos claros</li>
                                <li>✓ Divertidos y visibles (resultados obvios)</li>
                            </ul>
                        </div>
                        <div className="card-base p-6 border-2 border-green-200 bg-green-50">
                            <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center gap-2">
                                <span className="text-2xl">👨‍🔬</span> Colaboradores Expertos
                            </h3>
                            <ul className="space-y-2 text-neutral-700">
                                <li>✓ Científicos en activo (cualquier disciplina)</li>
                                <li>✓ Que quieran dar una sesión "Ciencia en Vivo"</li>
                                <li>✓ O guiar un taller especial</li>
                                <li>✓ Disponibilidad flexible (1-2 sesiones/mes)</li>
                                <li>✓ Pasión por la divulgación</li>
                            </ul>
                        </div>
                        <div className="card-base p-6 border-2 border-orange-200 bg-orange-50">
                            <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center gap-2">
                                <span className="text-2xl">📚</span> Temas Específicos
                            </h3>
                            <ul className="space-y-2 text-neutral-700">
                                <li>✓ Biología y naturaleza</li>
                                <li>✓ Física y movimiento</li>
                                <li>✓ Química segura</li>
                                <li>✓ Tecnología e ingeniería</li>
                                <li>✓ Sostenibilidad y ecología</li>
                            </ul>
                        </div>
                        <div className="card-base p-6 border-2 border-pink-200 bg-pink-50">
                            <h3 className="text-xl font-bold text-pink-600 mb-4 flex items-center gap-2">
                                <span className="text-2xl">🎯</span> Impacto Local
                            </h3>
                            <ul className="space-y-2 text-neutral-700">
                                <li>✓ Experimentos relacionados con tu comunidad</li>
                                <li>✓ Uso de recursos locales disponibles</li>
                                <li>✓ Problemas que niños de tu región enfrentan</li>
                                <li>✓ Conectados con profesiones locales</li>
                                <li>✓ Que inspiren a futuras carreras</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Sección: Ejemplos exitosos */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-8">Ejemplos de Experimentos Exitosos</h2>
                    <div className="space-y-6">
                        <div className="card-base p-6 border-l-4 border-indigo-600">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">🌱</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-neutral-800 mb-2">
                                        Crecimiento de Plantas en 7 Días
                                    </h3>
                                    <p className="text-neutral-600 mb-2">
                                        Con semillas de frijol, vasos y algodón. Los niños ven germinación en tiempo real.
                                    </p>
                                    <p className="text-sm text-indigo-600 font-semibold">
                                        → 150+ niños lo han hecho | Nivel: Primaria baja
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-base p-6 border-l-4 border-blue-600">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">⚡</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-neutral-800 mb-2">
                                        Batería de Limón Casera
                                    </h3>
                                    <p className="text-neutral-600 mb-2">
                                        Demuestran energía eléctrica y circuitos con materiales mundanos.
                                    </p>
                                    <p className="text-sm text-blue-600 font-semibold">
                                        → 220+ niños lo han hecho | Nivel: Primaria alta
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-base p-6 border-l-4 border-cyan-600">
                            <div className="flex items-start gap-4">
                                <div className="text-3xl">🔬</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-neutral-800 mb-2">
                                        Microscopía DIY con Móvil
                                    </h3>
                                    <p className="text-neutral-600 mb-2">
                                        Convierte celulares en microscopios. Descubren microorganismos en agua.
                                    </p>
                                    <p className="text-sm text-cyan-600 font-semibold">
                                        → 85+ niños lo han hecho | Nivel: Primaria alta + Secundaria
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección: Criterios de aceptación */}
                <section className="mb-16 card-base p-8 bg-amber-50 border-l-4 border-amber-600">
                    <h2 className="text-2xl font-bold text-neutral-800 mb-6">✓ Criterios de Evaluación</h2>
                    <p className="text-neutral-600 mb-6">
                        Todas las propuestas son revisadas por nuestro equipo científico. Aquí están los criterios:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-lg">✓</span>
                            <div>
                                <p className="font-bold text-neutral-800">Seguridad</p>
                                <p className="text-sm text-neutral-600">Debe ser completamente seguro para niños sin supervisión constante</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-lg">✓</span>
                            <div>
                                <p className="font-bold text-neutral-800">Claridad Científica</p>
                                <p className="text-sm text-neutral-600">El concepto debe ser claro y el experimento debe demostrarlo de forma obvia</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-lg">✓</span>
                            <div>
                                <p className="font-bold text-neutral-800">Accesibilidad</p>
                                <p className="text-sm text-neutral-600">Los materiales deben estar disponibles en comunidades con bajos recursos</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-lg">✓</span>
                            <div>
                                <p className="font-bold text-neutral-800">Interés</p>
                                <p className="text-sm text-neutral-600">Debe ser divertido y mantener la atención de niños de 5-12 años</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-lg">✓</span>
                            <div>
                                <p className="font-bold text-neutral-800">Duración</p>
                                <p className="text-sm text-neutral-600">Debe caber en nuestro marco de talleres (máximo 30-45 minutos)</p>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Sección: Formulario */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-8">Envía Tu Propuesta</h2>
                    
                    {enviado && (
                        <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-600 rounded-lg">
                            <p className="text-green-700 font-semibold">
                                ✓ ¡Propuesta enviada exitosamente! 
                            </p>
                            <p className="text-sm text-green-600 mt-2">
                                Nos pondremos en contacto en 1-2 semanas para darte retroalimentación.
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="card-base p-8 space-y-6">
                        {/* Datos Personales */}
                        <fieldset>
                            <legend className="text-xl font-bold text-neutral-800 mb-4">Información Personal</legend>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="nombre"
                                    placeholder="Tu nombre completo"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-indigo-600"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Tu email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-indigo-600"
                                />
                            </div>
                        </fieldset>

                        {/* Detalles del Experimento */}
                        <fieldset>
                            <legend className="text-xl font-bold text-neutral-800 mb-4">Detalles del Experimento</legend>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    name="titulo"
                                    placeholder="Título del experimento (ej: Cristales de Sal Caseros)"
                                    value={formData.titulo}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-indigo-600"
                                />
                                <textarea
                                    name="descripcion"
                                    placeholder="Descripción completa: qué se hace, qué se observa, qué concepto se demuestra"
                                    value={formData.descripcion}
                                    onChange={handleChange}
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-indigo-600"
                                />
                                <textarea
                                    name="materiales"
                                    placeholder="Lista de materiales necesarios (uno por línea)"
                                    value={formData.materiales}
                                    onChange={handleChange}
                                    rows="3"
                                    required
                                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-indigo-600"
                                />
                            </div>
                        </fieldset>

                        {/* Clasificación */}
                        <fieldset>
                            <legend className="text-xl font-bold text-neutral-800 mb-4">Clasificación</legend>
                            <div className="grid md:grid-cols-3 gap-4">
                                <select
                                    name="tipo"
                                    value={formData.tipo}
                                    onChange={handleChange}
                                    className="px-4 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-indigo-600"
                                >
                                    <option value="simple">Tipo: Simple</option>
                                    <option value="intermedio">Tipo: Intermedio</option>
                                    <option value="complejo">Tipo: Complejo</option>
                                </select>
                                <select
                                    name="nivelEdad"
                                    value={formData.nivelEdad}
                                    onChange={handleChange}
                                    className="px-4 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-indigo-600"
                                >
                                    <option value="primaria">Primaria</option>
                                    <option value="secundaria">Secundaria</option>
                                    <option value="ambos">Ambos</option>
                                </select>
                                <select
                                    name="duracion"
                                    value={formData.duracion}
                                    onChange={handleChange}
                                    className="px-4 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-indigo-600"
                                >
                                    <option value="5-15 minutos">5-15 minutos</option>
                                    <option value="15-30 minutos">15-30 minutos</option>
                                    <option value="30-45 minutos">30-45 minutos</option>
                                </select>
                            </div>
                        </fieldset>

                        {/* Botón Submit */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-lg transition text-lg"
                            >
                                🚀 Enviar Propuesta
                            </button>
                        </div>
                    </form>
                </section>

                {/* Sección: FAQ */}
                <section className="mb-8">
                    <h2 className="text-3xl font-bold text-neutral-800 mb-8">Preguntas Frecuentes</h2>
                    <div className="space-y-4">
                        <details className="card-base p-6 cursor-pointer group">
                            <summary className="font-bold text-neutral-800 flex items-center gap-2">
                                <span className="group-open:rotate-180 transition">▼</span>
                                ¿Cuánto tiempo tarda la revisión de mi propuesta?
                            </summary>
                            <p className="text-neutral-600 mt-4 ml-6">
                                Revisamos propuestas cada 2 semanas. Te notificaremos por email con nuestro feedback, 
                                ya sea aprobación, sugerencias o devolución.
                            </p>
                        </details>
                        <details className="card-base p-6 cursor-pointer group">
                            <summary className="font-bold text-neutral-800 flex items-center gap-2">
                                <span className="group-open:rotate-180 transition">▼</span>
                                ¿Qué pasa si mi experimento es aceptado?
                            </summary>
                            <p className="text-neutral-600 mt-4 ml-6">
                                Lo incluimos en nuestro catálogo oficial. Si es un colaborador, lo contactaremos para 
                                coordinar las sesiones. Si es un experimento, lo usaremos en nuestros talleres y te 
                                acreditaremos como creador.
                            </p>
                        </details>
                        <details className="card-base p-6 cursor-pointer group">
                            <summary className="font-bold text-neutral-800 flex items-center gap-2">
                                <span className="group-open:rotate-180 transition">▼</span>
                                ¿Puedo proponer múltiples experimentos?
                            </summary>
                            <p className="text-neutral-600 mt-4 ml-6">
                                Absolutamente. Muchos de nuestros colaboradores tienen varias propuestas. Envía cada 
                                una por separado usando este formulario.
                            </p>
                        </details>
                        <details className="card-base p-6 cursor-pointer group">
                            <summary className="font-bold text-neutral-800 flex items-center gap-2">
                                <span className="group-open:rotate-180 transition">▼</span>
                                ¿Necesito ser científico o educador?
                            </summary>
                            <p className="text-neutral-600 mt-4 ml-6">
                                No. Aceptamos propuestas de cualquier persona apasionada por la educación científica. 
                                Un maestro, un padre o un entusiasta pueden tener ideas excelentes.
                            </p>
                        </details>
                        <details className="card-base p-6 cursor-pointer group">
                            <summary className="font-bold text-neutral-800 flex items-center gap-2">
                                <span className="group-open:rotate-180 transition">▼</span>
                                ¿Hay reconocimiento público?
                            </summary>
                            <p className="text-neutral-600 mt-4 ml-6">
                                Sí. Acreditamos a todos nuestros colaboradores en la plataforma, redes sociales y 
                                eventos. Puedes elegir si deseas reconocimiento público o anónimo.
                            </p>
                        </details>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProponerExperimento;
