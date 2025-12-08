import React from 'react';

/**
 * FAQCard
 * Componente reutilizable para mostrar preguntas frecuentes en formato accordion.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.question - Texto de la pregunta
 * @param {string} props.answer - Respuesta/contenido que se revela al abrir
 * @param {string} [props.className] - Clases CSS adicionales personalizadas
 * 
 * @example
 * <FAQCard
 *   question="¿Cómo empiezo?"
 *   answer="Puedes contactarnos en hola@puentesde100cia.org"
 * />
 * 
 * @returns {JSX.Element} Tarjeta de pregunta/respuesta con efecto accordion
 */
const FAQCard = ({ question, answer, className = '' }) => {
    return (
        <details className={`bg-white p-6 rounded-lg shadow hover:shadow-md transition cursor-pointer ${className}`}>
            <summary className="font-bold text-lg text-indigo-600 outline-none hover:text-indigo-700">
                {question}
            </summary>
            <p className="text-gray-700 mt-4 leading-relaxed">
                {answer}
            </p>
        </details>
    );
};

export default FAQCard;
