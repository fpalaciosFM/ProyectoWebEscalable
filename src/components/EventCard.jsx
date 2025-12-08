import React from 'react';

/**
 * EventCard
 * Componente para mostrar un evento próximo con información completa.
 * Incluye fecha, hora, ubicación, descripción, categoría y botón de registro.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.fecha - Fecha del evento (ej: "15 de Diciembre")
 * @param {string} props.hora - Hora del evento (ej: "10:00 AM")
 * @param {string} props.titulo - Título/nombre del evento
 * @param {string} props.ubicacion - Ubicación física del evento
 * @param {string} props.descripcion - Descripción breve del evento
 * @param {string} [props.categoria="taller"] - Categoría (taller|evento|conferencia|reunion)
 * @param {string} [props.capacidad] - Capacidad/límite de asistentes (p. ej: "25 niños")
 * 
 * @example
 * <EventCard
 *   fecha="15 de Diciembre"
 *   hora="10:00 AM"
 *   titulo="Taller de Química"
 *   ubicacion="Escuela Primaria"
 *   descripcion="Experimentos seguros y divertidos"
 *   categoria="taller"
 *   capacidad="25 niños"
 * />
 * 
 * @returns {JSX.Element} Card del evento con información y botón de registro
 */
const EventCard = ({ fecha, hora, titulo, ubicacion, descripcion, categoria = 'taller', capacidad }) => {
    const categoriaColors = {
        taller: 'bg-blue-100 text-blue-800',
        evento: 'bg-green-100 text-green-800',
        conferencia: 'bg-purple-100 text-purple-800',
        reunion: 'bg-orange-100 text-orange-800'
    };

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden border-l-4 border-indigo-600">
            {/* Header con Fecha */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-sm font-semibold text-indigo-600">📅 {fecha}</div>
                        <div className="text-xs text-gray-600">🕐 {hora}</div>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoriaColors[categoria]}`}>
                        {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                    </span>
                </div>
            </div>

            {/* Contenido */}
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{titulo}</h3>
                <p className="text-sm text-gray-600 mb-3">{descripcion}</p>

                {/* Ubicación */}
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-3">
                    <span>📍</span>
                    <span>{ubicacion}</span>
                </div>

                {/* Capacidad */}
                {capacidad && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <span>👥</span>
                        <span>Capacidad: {capacidad}</span>
                    </div>
                )}

                {/* Botón CTA */}
                <button className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition">
                    Registrarse →
                </button>
            </div>
        </div>
    );
};

export default EventCard;
