import { Link } from 'react-router-dom';
import { calcularProgreso, formatearMoneda, calcularDiasRestantes } from '../data/campanasData';

/**
 * CampanaCard - Componente reutilizable para mostrar tarjetas de campañas
 * 
 * Visualización en grid de campañas con información resumida y barra de progreso dinámica
 * 
 * Props:
 * @param {string} slug - Identificador único para navegación (/campanas/:slug)
 * @param {string} titulo - Título de la campaña
 * @param {string} descripcion - Descripción breve (limitada a 2 líneas en UI)
 * @param {string} categoria - Categoría: Infraestructura, Educación, Eventos, Equipamiento
 * @param {string} estado - Estado: activa, completada, proxima (determina color y badge)
 * @param {number} metaTotal - Meta de recaudación en moneda
 * @param {number} recaudado - Cantidad recaudada hasta ahora
 * @param {string} moneda - Código de moneda (MXN, USD, etc)
 * @param {string} fechaFin - Fecha límite de la campaña (ISO format)
 * @param {string} imagen - URL de la imagen de portada
 * 
 * Características:
 * - Barra de progreso con colores dinámicos según avance (cyan → blue → indigo → emerald)
 * - Badges para estado y categoría
 * - Hover effects con escalado y sombra
 * - Contador de días restantes para campañas activas
 * - Checkmark de "Meta alcanzada" para campañas completadas
 * - Link a detalle de campaña
 */
const CampanaCard = ({
    slug,
    titulo,
    descripcion,
    categoria,
    estado,
    metaTotal,
    recaudado,
    moneda,
    fechaFin,
    imagen
}) => {
    const progreso = calcularProgreso(recaudado, metaTotal);
    const diasRestantes = calcularDiasRestantes(fechaFin);

    const estadoConfig = {
        activa: { badge: 'Activa', color: 'bg-emerald-100 text-emerald-700', badgeColor: 'badge-success' },
        completada: { badge: 'Completada', color: 'bg-blue-100 text-blue-700', badgeColor: 'badge-info' },
        proxima: { badge: 'Próximamente', color: 'bg-purple-100 text-purple-700', badgeColor: 'badge-secondary' }
    };

    const config = estadoConfig[estado] || estadoConfig.activa;

    return (
        <Link 
            to={`/campanas/${slug}`}
            className="card-base group hover:scale-[1.02] transition-all duration-300"
        >
            {/* Imagen */}
            <div className="relative h-48 bg-neutral-100 rounded-t-2xl overflow-hidden">
                <img 
                    src={imagen}
                    alt={titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges sobre la imagen */}
                <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`badge-base ${config.badgeColor} shadow-lg`}>
                        {config.badge}
                    </span>
                    <span className="badge-base badge-neutral shadow-lg">
                        {categoria}
                    </span>
                </div>
            </div>

            {/* Contenido */}
            <div className="p-6 space-y-4">
                {/* Título */}
                <h3 className="text-2xl font-bold text-neutral-800 group-hover:text-indigo-600 transition-colors">
                    {titulo}
                </h3>

                {/* Descripción */}
                <p className="text-neutral-600 line-clamp-2">
                    {descripcion}
                </p>

                {/* Barra de progreso */}
                {estado !== 'proxima' && (
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-neutral-600">Progreso</span>
                            <span className="font-semibold text-indigo-600">{progreso}%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                                className={`h-full transition-all duration-500 rounded-full ${
                                    progreso >= 100 
                                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' 
                                        : progreso >= 75 
                                            ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' 
                                            : progreso >= 50 
                                                ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
                                                : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                                }`}
                                style={{ width: `${progreso}%` }}
                            ></div>
                        </div>
                    </div>
                )}

                {/* Meta y Recaudado */}
                <div className="flex justify-between items-end pt-2 border-t border-neutral-200">
                    <div>
                        <p className="text-xs text-neutral-500">Recaudado</p>
                        <p className="text-lg font-bold text-indigo-600">
                            {formatearMoneda(recaudado, moneda)}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-neutral-500">Meta</p>
                        <p className="text-lg font-semibold text-neutral-700">
                            {formatearMoneda(metaTotal, moneda)}
                        </p>
                    </div>
                </div>

                {/* Footer con días restantes */}
                {estado === 'activa' && (
                    <div className="pt-3 border-t border-neutral-200">
                        <div className="flex items-center gap-2 text-sm text-neutral-600">
                            <span>⏰</span>
                            <span>
                                {diasRestantes > 0 
                                    ? `${diasRestantes} día${diasRestantes !== 1 ? 's' : ''} restante${diasRestantes !== 1 ? 's' : ''}`
                                    : 'Último día'
                                }
                            </span>
                        </div>
                    </div>
                )}

                {estado === 'completada' && (
                    <div className="pt-3 border-t border-neutral-200">
                        <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                            <span>✓</span>
                            <span>Meta alcanzada</span>
                        </div>
                    </div>
                )}
            </div>
        </Link>
    );
};

export default CampanaCard;
