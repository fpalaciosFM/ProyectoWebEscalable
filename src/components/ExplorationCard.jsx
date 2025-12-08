import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ExplorationCard Component - Tarjeta reutilizable para exploración
 * Usado en secciones como "Explora nuestro universo científico"
 * 
 * @param {string} titulo - Título de la tarjeta
 * @param {string} emoji - Emoji representativo
 * @param {string} descripcion - Descripción breve
 * @param {string} href - URL de destino
 * @param {string} borderColor - Color del borde superior (variable CSS)
 * @param {string} badgeClass - Clase del badge (ej: 'badge-primary')
 * @param {string} badgeText - Texto del badge
 * 
 * @example
 * <ExplorationCard
 *   titulo="Experimentos"
 *   emoji="🔬"
 *   descripcion="Guías paso a paso..."
 *   href="/experimentos"
 *   borderColor="var(--color-primary)"
 *   badgeClass="badge-primary"
 *   badgeText="Explorar →"
 * />
 */
const ExplorationCard = ({ 
    titulo, 
    emoji, 
    descripcion, 
    href, 
    borderColor,
    badgeClass = 'badge-primary',
    badgeText = 'Explorar →'
}) => {
    return (
        <Link to={href} className="group cursor-pointer">
            <div 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4"
                style={{ borderTopColor: borderColor }}
            >
                <div className="text-6xl mb-6">{emoji}</div>
                <h3 className="text-2xl font-bold mb-3 text-primary group-hover:opacity-75 transition">
                    {titulo}
                </h3>
                <p className="text-muted mb-6">{descripcion}</p>
                <span className={badgeClass}>
                    {badgeText}
                </span>
            </div>
        </Link>
    );
};

export default ExplorationCard;
