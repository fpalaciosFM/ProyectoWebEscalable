import React from 'react';

/**
 * ExperimentCard
 * Componente reutilizable para mostrar experimentos científicos.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.titulo - Título del experimento
 * @param {string} props.descripcion - Descripción breve del experimento
 * @param {string} props.categoria - Categoría (Química, Física, Biología, etc)
 * @param {string} props.dificultad - Nivel de dificultad (Fácil, Intermedio, Avanzado)
 * @param {string} props.tiempo - Tiempo estimado de realización
 * @param {string} props.edadRecomendada - Rango de edad recomendado
 * @param {string} props.imagen - URL de la imagen del experimento
 * @param {Function} [props.onClick] - Función ejecutada al hacer clic en la tarjeta
 * 
 * @example
 * <ExperimentCard
 *   titulo="El Volcán de Bicarbonato"
 *   descripcion="¡Crea una erupción segura!"
 *   categoria="Química"
 *   dificultad="Fácil"
 *   tiempo="15 min"
 *   edadRecomendada="5-8 años"
 *   imagen="volcano.jpg"
 *   onClick={() => console.log('Card clicked')}
 * />
 * 
 * @returns {JSX.Element} Tarjeta de experimento con información y badges
 */
const ExperimentCard = ({ 
    titulo, 
    descripcion, 
    categoria, 
    dificultad, 
    tiempo, 
    edadRecomendada, 
    imagen,
    onClick 
}) => {
    const dificultadColors = {
        'Fácil': 'bg-green-100 text-green-800',
        'Intermedio': 'bg-yellow-100 text-yellow-800',
        'Avanzado': 'bg-red-100 text-red-800'
    };

    const categoriaColors = {
        'Química': 'bg-purple-100 text-purple-800',
        'Física': 'bg-blue-100 text-blue-800',
        'Biología': 'bg-green-100 text-green-800',
        'Astronomía': 'bg-indigo-100 text-indigo-800'
    };

    return (
        <div 
            onClick={onClick}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:scale-105 border border-gray-100"
        >
            {/* Imagen */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50">
                <img
                    src={imagen}
                    alt={titulo}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Contenido */}
            <div className="p-5">
                {/* Título */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {titulo}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {descripcion}
                </p>

                {/* Badges Superior */}
                <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoriaColors[categoria] || 'bg-gray-100 text-gray-800'}`}>
                        {categoria}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${dificultadColors[dificultad] || 'bg-gray-100 text-gray-800'}`}>
                        {dificultad}
                    </span>
                </div>

                {/* Info adicional */}
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-1">
                        <span>⏱️</span>
                        <span>{tiempo}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>👶</span>
                        <span>{edadRecomendada}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperimentCard;
