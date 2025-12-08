import React from 'react';

/**
 * NoticiaCard
 * Componente para mostrar una noticia con imagen, metadatos y enlace.
 * Incluye funcionalidad de "Leer más" para acceder al artículo completo.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.titulo - Título de la noticia
 * @param {string} props.fecha - Fecha de publicación (ej: "5 de Diciembre, 2024")
 * @param {string} props.resumen - Resumen/descripción breve de la noticia
 * @param {string} props.imagen - URL de la imagen principal
 * @param {string} [props.autor] - Autor/editor de la noticia
 * @param {string} [props.categoria] - Categoría (novedades|logros|recursos)
 * 
 * @example
 * <NoticiaCard
 *   titulo="¡Alcanzamos los 1,200 niños impactados!"
 *   fecha="5 de Diciembre, 2024"
 *   resumen="Con el último taller realizado en Guadalajara..."
 *   imagen="imagen.jpg"
 *   autor="Angelina Vázquez"
 *   categoria="logros"
 * />
 * 
 * @returns {JSX.Element} Card de noticia con imagen, contenido y enlace
 */
const NoticiaCard = ({ titulo, fecha, resumen, imagen, autor, categoria }) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col h-full">
            {/* Imagen */}
            <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                    src={imagen}
                    alt={titulo}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Contenido */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Metadata */}
                <div className="flex items-center justify-between mb-3 text-xs text-gray-600">
                    <span>📅 {fecha}</span>
                    {categoria && (
                        <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-semibold">
                            {categoria}
                        </span>
                    )}
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{titulo}</h3>

                {/* Resumen */}
                <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">{resumen}</p>

                {/* Autor */}
                {autor && (
                    <div className="text-xs text-gray-500 mb-3 border-t pt-3">
                        Por: <span className="font-semibold text-gray-700">{autor}</span>
                    </div>
                )}

                {/* Botón Leer más */}
                <button className="text-indigo-600 font-semibold hover:text-indigo-700 transition inline-flex items-center gap-1">
                    Leer más →
                </button>
            </div>
        </div>
    );
};

export default NoticiaCard;
