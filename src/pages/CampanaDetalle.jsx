import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { 
    campanas, 
    calcularProgreso, 
    formatearMoneda, 
    calcularDiasRestantes 
} from '../data/campanasData';
import { useScrollTop } from '../hooks/useScrollTop';

/**
 * Componente: Muro de Ladrillos
 * Visualización interactiva para campañas de infraestructura
 * 
 * Props:
 * - totalLadrillos: número total de ladrillos en el muro (por defecto 100)
 * - ladrillosColocados: cantidad de ladrillos que ya están colocados (basado en monto recaudado)
 * - donacionesPorLadrillo: objeto con información de donadores por índice de ladrillo
 *   Estructura: { 0: { nombre, mensaje, donacionId }, 1: { nombre, mensaje, donacionId }, ... }
 * 
 * Características:
 * - Grid 10x10 responsive de ladrillos
 * - Ladrillos colocados con gradiente naranja, pendientes en gris
 * - Tooltips que aparecen al pasar el cursor mostrando nombre y mensaje del donador
 * - Leyenda con contadores de ladrillos colocados vs pendientes
 * - Animaciones suaves en transición de estados
 */
const MuroLadrillos = ({ totalLadrillos, ladrillosColocados, donacionesPorLadrillo }) => {
    const [ladrilloHover, setLadrilloHover] = useState(null);
    // Calcular dimensiones responsivas del muro
    const filas = 10;
    const columnas = totalLadrillos / filas;

    return (
        <div className="bg-neutral-100 rounded-3xl p-8">
            <div className="flex flex-wrap gap-1 justify-center">
                {Array.from({ length: totalLadrillos }).map((_, index) => {
                    const colocado = index < ladrillosColocados;
                    const fila = Math.floor(index / columnas);
                    const esFilaPar = fila % 2 === 0;
                    const infoLadrillo = donacionesPorLadrillo[index];
                    
                    return (
                        <div 
                            key={index} 
                            className="relative"
                            onMouseEnter={() => setLadrilloHover(index)}
                            onMouseLeave={() => setLadrilloHover(null)}
                        >
                            <div
                                className={`
                                    w-16 h-8 rounded-sm transition-all duration-500 border-2 cursor-pointer
                                    ${colocado 
                                        ? 'bg-gradient-to-br from-orange-500 to-orange-700 border-orange-800 shadow-md' 
                                        : 'bg-neutral-200 border-neutral-300 opacity-40'
                                    }
                                    ${esFilaPar ? 'mr-8' : ''}
                                    hover:scale-110 hover:z-20
                                `}
                                style={{
                                    transform: colocado ? 'translateY(0)' : 'translateY(-10px)',
                                    opacity: colocado ? 1 : 0.3
                                }}
                                title={colocado ? `Ladrillo ${index + 1}` : 'Pendiente'}
                            />
                            
                            {/* Tooltip con información del donador */}
                            {ladrilloHover === index && infoLadrillo && colocado && (
                                <div className="absolute bg-gray-900 text-white px-4 py-3 rounded-lg text-sm z-50 shadow-xl border border-gray-700 pointer-events-none"
                                    style={{
                                        bottom: '100%',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        marginBottom: '8px',
                                        whiteSpace: 'normal',
                                        maxWidth: '280px',
                                        minWidth: '200px'
                                    }}
                                >
                                    <p className="font-semibold text-yellow-300">{infoLadrillo.nombre}</p>
                                    {infoLadrillo.mensaje && (
                                        <p className="text-gray-200 italic mt-1 text-xs">{infoLadrillo.mensaje}</p>
                                    )}
                                    <div className="absolute w-2 h-2 bg-gray-900 border border-gray-700" 
                                        style={{
                                            top: '100%',
                                            left: '50%',
                                            transform: 'translateX(-50%) rotate(45deg)'
                                        }}
                                    ></div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            
            {/* Leyenda del muro */}
            <div className="flex justify-center gap-8 mt-8">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-4 bg-gradient-to-br from-orange-500 to-orange-700 border-2 border-orange-800 rounded-sm"></div>
                    <span className="text-sm text-neutral-600">Colocados: {ladrillosColocados}</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-4 bg-neutral-200 border-2 border-neutral-300 rounded-sm opacity-40"></div>
                    <span className="text-sm text-neutral-600">Pendientes: {totalLadrillos - ladrillosColocados}</span>
                </div>
            </div>
        </div>
    );
};

/**
 * Página: Detalle de Campaña
 * Ruta: /campanas/:slug
 * 
 * Muestra la información completa de una campaña individual con:
 * - Visualización del progreso (muro de ladrillos para infraestructura)
 * - Información detallada: historia, beneficios, donaciones recientes, actualizaciones
 * - Panel de donación con opciones sugeridas y modal interactivo
 * - Sistema de rastreo de donaciones listo para BD
 * 
 * Estructura de datos para BD (lista para migración a API):
 * {
 *   id: "sim-1733660400000-abc123def",
 *   campaña_id: 1,
 *   cantidad: 5000,
 *   nombre: "Juan García",
 *   mensaje: "Mucho éxito con el proyecto",
 *   fecha: "2025-12-08T15:40:00.000Z",
 *   estado: "completada"
 * }
 */
const CampanaDetalle = () => {
    useScrollTop();
    const { slug } = useParams();
    
    // Buscar campaña por slug
    const campana = useMemo(() => 
        campanas.find(c => c.slug === slug),
        [slug]
    );

    // Estados para modal de donación
    const [modalDonacion, setModalDonacion] = useState(false);
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(null);
    const [cantidadPersonalizada, setCantidadPersonalizada] = useState('');
    const [nombreDonador, setNombreDonador] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
    const [recaudadoSimulado, setRecaudadoSimulado] = useState(campana?.recaudado || 0);
    
    // Array de TODAS las donaciones (existentes + simuladas)
    // Estructura lista para BD: { id, campaña_id, cantidad, nombre, mensaje, fecha, estado }
    // Inicializa con las donaciones existentes de la campaña y se actualiza al agregar nuevas
    const [donacionesCompletas, setDonacionesCompletas] = useState(() => {
        if (campana?.donaciones) {
            return campana.donaciones.map((d, idx) => ({
                id: d.id || `existing-${idx}`,
                campaña_id: campana.id,
                cantidad: d.cantidad,
                nombre: d.nombre || 'Anónimo',
                mensaje: d.mensaje || '',
                fecha: d.fecha || new Date().toISOString(),
                estado: 'completada'
            }));
        }
        return [];
    });

    // Derivar donacionesPorLadrillo a partir del array de donaciones
    // useMemo asegura que solo se recalcula cuando cambian las donaciones
    // Esto permite que la visualización del muro se actualice automáticamente
    const donacionesPorLadrillo = useMemo(() => {
        if (campana?.visualizacion.tipo !== 'muro-ladrillos') return {};
        
        const donaciones = {};
        let ladrilloIndex = 0;
        
        donacionesCompletas.forEach(donacion => {
            const ladrillosDeEsta = Math.floor(donacion.cantidad / campana.visualizacion.costoLadrillo);
            for (let i = 0; i < ladrillosDeEsta; i++) {
                donaciones[ladrilloIndex] = {
                    nombre: donacion.nombre,
                    mensaje: donacion.mensaje,
                    donacionId: donacion.id  // Referencia a la donación original
                };
                ladrilloIndex++;
            }
        });
        
        return donaciones;
    }, [donacionesCompletas, campana]);

    // Si no se encuentra la campaña
    if (!campana) {
        return (
            <div className="min-h-screen flex flex-col">
                <NavBar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-6xl mb-4">🔍</p>
                        <h2 className="text-3xl font-bold text-neutral-700 mb-4">
                            Campaña no encontrada
                        </h2>
                        <Link to="/campanas" className="btn-main">
                            Ver todas las campañas
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const progreso = calcularProgreso(recaudadoSimulado, campana.metaTotal);
    const diasRestantes = calcularDiasRestantes(campana.fechaFin);
    const ladrillosColocados = campana.visualizacion.tipo === 'muro-ladrillos' 
        ? Math.floor((recaudadoSimulado / campana.metaTotal) * campana.visualizacion.totalLadrillos)
        : 0;

    // Procesar donación simulada
    // En producción, esto conectaría con PayPal/Stripe API y guardaría en BD
    // Estructura de la función:
    // 1. Validar cantidad
    // 2. Crear objeto donación con estructura lista para BD
    // 3. Log para debugging y futuro API call
    // 4. Actualizar array de donaciones (trigger para recalcular ladrillos)
    // 5. Actualizar monto recaudado
    // 6. Mostrar confirmación visual
    const procesarDonacion = () => {
        const cantidad = cantidadSeleccionada || parseFloat(cantidadPersonalizada);
        
        if (!cantidad || cantidad <= 0) {
            alert('Por favor ingresa una cantidad válida');
            return;
        }

        // Crear objeto de donación con estructura lista para BD
        const nuevaDonacion = {
            id: `sim-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, // ID único simulado
            campaña_id: campana.id,
            cantidad: cantidad,
            nombre: nombreDonador || 'Anónimo',
            mensaje: mensaje || '',
            fecha: new Date().toISOString(),
            estado: 'completada'
        };

        // Log para debugging y para futuro API call
        console.log('Procesando donación (lista para BD):', nuevaDonacion);

        // Actualizar el array de donaciones completas
        setDonacionesCompletas(prev => [...prev, nuevaDonacion]);

        // Actualizar el monto recaudado simulado
        setRecaudadoSimulado(prevRecaudado => prevRecaudado + cantidad);

        // Simular éxito
        setMostrarConfirmacion(true);
        setTimeout(() => {
            setModalDonacion(false);
            setMostrarConfirmacion(false);
            setCantidadSeleccionada(null);
            setCantidadPersonalizada('');
            setNombreDonador('');
            setMensaje('');
        }, 3000);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />

            {/* Header de la campaña */}
            <header className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-4">
                        {/* Breadcrumb */}
                        <div className="flex justify-center gap-2 text-sm text-white/80">
                            <Link to="/campanas" className="hover:underline">Campañas</Link>
                            <span>/</span>
                            <span>{campana.titulo}</span>
                        </div>

                        {/* Badges */}
                        <div className="flex justify-center gap-3">
                            <span className="badge-base bg-white/20 text-white border-white/30">
                                {campana.categoria}
                            </span>
                            <span className="badge-base bg-white text-indigo-600">
                                {campana.estado === 'activa' && '🔥 Activa'}
                                {campana.estado === 'completada' && '✓ Completada'}
                                {campana.estado === 'proxima' && '⏰ Próximamente'}
                            </span>
                        </div>

                        {/* Título */}
                        <h1 className="text-5xl font-bold">{campana.titulo}</h1>
                        
                        {/* Descripción */}
                        <p className="text-xl text-white/90 max-w-2xl mx-auto">
                            {campana.descripcion}
                        </p>
                    </div>
                </div>
            </header>

            <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Columna Principal */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Visualización según tipo */}
                        {campana.visualizacion.tipo === 'muro-ladrillos' && (
                            <section>
                                <h2 className="text-3xl font-bold text-neutral-800 mb-6">
                                    Progreso del Muro 🧱
                                </h2>
                                <MuroLadrillos 
                                    totalLadrillos={campana.visualizacion.totalLadrillos}
                                    ladrillosColocados={ladrillosColocados}
                                    donacionesPorLadrillo={donacionesPorLadrillo}
                                />
                                <p className="text-center mt-4 text-neutral-600">
                                    Cada ladrillo representa <span className="font-bold text-indigo-600">
                                        {formatearMoneda(campana.visualizacion.costoLadrillo, campana.moneda)}
                                    </span> de donación
                                </p>
                            </section>
                        )}

                        {/* Historia y descripción completa */}
                        <section className="card-base p-8">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                                Nuestra Historia
                            </h2>
                            <p className="text-neutral-700 text-lg leading-relaxed">
                                {campana.descripcionCompleta}
                            </p>
                        </section>

                        {/* Beneficios */}
                        <section className="card-base p-8">
                            <h2 className="text-3xl font-bold text-neutral-800 mb-6">
                                ¿Qué lograremos?
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {campana.beneficios.map((beneficio, index) => (
                                    <div 
                                        key={index}
                                        className="flex items-start gap-3 p-4 bg-indigo-50 rounded-xl"
                                    >
                                        <span className="text-2xl">✓</span>
                                        <p className="text-neutral-700">{beneficio}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Donaciones recientes */}
                        {campana.donaciones.length > 0 && (
                            <section className="card-base p-8">
                                <h2 className="text-3xl font-bold text-neutral-800 mb-6">
                                    Donaciones Recientes 💙
                                </h2>
                                <div className="space-y-4">
                                    {campana.donaciones.slice(0, 5).map(donacion => (
                                        <div 
                                            key={donacion.id}
                                            className="flex justify-between items-start p-4 bg-neutral-50 rounded-xl"
                                        >
                                            <div>
                                                <p className="font-bold text-neutral-800">
                                                    {donacion.nombre}
                                                </p>
                                                {donacion.mensaje && (
                                                    <p className="text-sm text-neutral-600 italic mt-1">
                                                        "{donacion.mensaje}"
                                                    </p>
                                                )}
                                                <p className="text-xs text-neutral-500 mt-1">
                                                    {new Date(donacion.fecha).toLocaleDateString('es-MX')}
                                                </p>
                                            </div>
                                            <p className="font-bold text-indigo-600">
                                                {formatearMoneda(donacion.cantidad, campana.moneda)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Actualizaciones */}
                        {campana.actualizaciones.length > 0 && (
                            <section className="card-base p-8">
                                <h2 className="text-3xl font-bold text-neutral-800 mb-6">
                                    Actualizaciones 📢
                                </h2>
                                <div className="space-y-6">
                                    {campana.actualizaciones.map((update, index) => (
                                        <div key={index} className="border-l-4 border-indigo-600 pl-6">
                                            <p className="text-sm text-neutral-500">
                                                {new Date(update.fecha).toLocaleDateString('es-MX', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                            <h3 className="text-xl font-bold text-neutral-800 mt-1">
                                                {update.titulo}
                                            </h3>
                                            <p className="text-neutral-600 mt-2">
                                                {update.descripcion}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar - Panel de Donación */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            
                            {/* Card de progreso */}
                            <div className="card-base p-6 space-y-6">
                                
                                {/* Cantidad recaudada */}
                                <div>
                                    <p className="text-4xl font-bold text-indigo-600">
                                        {formatearMoneda(recaudadoSimulado, campana.moneda)}
                                    </p>
                                    <p className="text-neutral-600 mt-1">
                                        de {formatearMoneda(campana.metaTotal, campana.moneda)}
                                    </p>
                                </div>

                                {/* Barra de progreso */}
                                <div>
                                    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
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
                                    <p className="text-center mt-2 font-semibold text-indigo-600">
                                        {progreso}% alcanzado
                                    </p>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
                                    <div>
                                        <p className="text-2xl font-bold text-neutral-800">
                                            {campana.donaciones.length}
                                        </p>
                                        <p className="text-sm text-neutral-600">Donadores</p>
                                    </div>
                                    {campana.estado === 'activa' && (
                                        <div>
                                            <p className="text-2xl font-bold text-neutral-800">
                                                {diasRestantes}
                                            </p>
                                            <p className="text-sm text-neutral-600">Días restantes</p>
                                        </div>
                                    )}
                                </div>

                                {/* Botón de donación */}
                                {campana.estado === 'activa' && (
                                    <button
                                        onClick={() => setModalDonacion(true)}
                                        className="btn-main w-full text-lg py-4"
                                    >
                                        💙 Donar Ahora
                                    </button>
                                )}

                                {campana.estado === 'completada' && (
                                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                                        <p className="text-blue-700 font-semibold">
                                            ✓ Campaña completada
                                        </p>
                                        <p className="text-sm text-blue-600 mt-1">
                                            ¡Gracias a todos los donadores!
                                        </p>
                                    </div>
                                )}

                                {campana.estado === 'proxima' && (
                                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                                        <p className="text-purple-700 font-semibold">
                                            ⏰ Próximamente
                                        </p>
                                        <p className="text-sm text-purple-600 mt-1">
                                            Inicia el {new Date(campana.fechaInicio).toLocaleDateString('es-MX')}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Opciones de donación rápida */}
                            {campana.estado === 'activa' && campana.opcionesDonacion.length > 0 && (
                                <div className="card-base p-6">
                                    <h3 className="font-bold text-neutral-800 mb-4">
                                        Donaciones Sugeridas
                                    </h3>
                                    <div className="space-y-3">
                                        {campana.opcionesDonacion.map((opcion, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    setCantidadSeleccionada(opcion.cantidad);
                                                    setModalDonacion(true);
                                                }}
                                                className="w-full p-4 bg-neutral-50 hover:bg-primary-50 border-2 border-neutral-200 hover:border-primary-300 rounded-xl transition-all text-left group"
                                            >
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="font-semibold text-neutral-800 group-hover:text-primary-600">
                                                            {formatearMoneda(opcion.cantidad, campana.moneda)}
                                                        </p>
                                                        <p className="text-sm text-neutral-600">
                                                            {opcion.descripcion}
                                                        </p>
                                                    </div>
                                                    <span className="text-2xl">{opcion.emoji}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Compartir */}
                            <div className="card-base p-6">
                                <h3 className="font-bold text-neutral-800 mb-4">
                                    Comparte esta campaña
                                </h3>
                                <div className="flex gap-3">
                                    <button className="flex-1 p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
                                        Facebook
                                    </button>
                                    <button className="flex-1 p-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors">
                                        Twitter
                                    </button>
                                    <button className="flex-1 p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                                        WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Modal de Donación */}
            {modalDonacion && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-3xl max-w-md w-full p-8 max-h-[90vh] overflow-y-auto">
                        {!mostrarConfirmacion ? (
                            <>
                                <h2 className="text-3xl font-bold text-neutral-800 mb-6">
                                    Realizar Donación 💙
                                </h2>

                                {/* Selección de cantidad */}
                                <div className="space-y-4 mb-6">
                                    <label className="block text-sm font-semibold text-neutral-700">
                                        Cantidad a donar
                                    </label>
                                    
                                    {/* Opciones predefinidas */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {campana.opcionesDonacion.slice(0, 4).map((opcion, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    setCantidadSeleccionada(opcion.cantidad);
                                                    setCantidadPersonalizada('');
                                                }}
                                                className={`p-4 rounded-xl border-2 transition-all ${
                                                    cantidadSeleccionada === opcion.cantidad
                                                        ? 'border-indigo-500 bg-indigo-50'
                                                        : 'border-neutral-200 hover:border-indigo-300'
                                                }`}
                                            >
                                                <p className="font-bold text-neutral-800">
                                                    {formatearMoneda(opcion.cantidad, campana.moneda)}
                                                </p>
                                                <p className="text-xs text-neutral-600 mt-1">
                                                    {opcion.descripcion}
                                                </p>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Cantidad personalizada */}
                                    <div>
                                        <label className="block text-sm text-neutral-600 mb-2">
                                            O ingresa otra cantidad
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Cantidad en MXN"
                                            value={cantidadPersonalizada}
                                            onChange={(e) => {
                                                setCantidadPersonalizada(e.target.value);
                                                setCantidadSeleccionada(null);
                                            }}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-indigo-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Información del donador */}
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                            Tu nombre (opcional)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Anónimo"
                                            value={nombreDonador}
                                            onChange={(e) => setNombreDonador(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-indigo-400 focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                            Mensaje de apoyo (opcional)
                                        </label>
                                        <textarea
                                            placeholder="Deja un mensaje..."
                                            value={mensaje}
                                            onChange={(e) => setMensaje(e.target.value)}
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-indigo-400 focus:outline-none resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Nota sobre PayPal */}
                                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-6">
                                    <p className="text-sm text-yellow-800">
                                        <strong>Nota:</strong> Este es un demo. En producción, aquí se integraría PayPal o Stripe para procesar pagos reales de forma segura.
                                    </p>
                                </div>

                                {/* Botones */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setModalDonacion(false)}
                                        className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        onClick={procesarDonacion}
                                        className="flex-1 btn-main"
                                    >
                                        Donar (Demo)
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <div className="text-6xl mb-4 animate-bounce">✓</div>
                                <h3 className="text-2xl font-bold text-emerald-600 mb-2">
                                    ¡Gracias por tu donación!
                                </h3>
                                <p className="text-neutral-600">
                                    Tu apoyo hace la diferencia
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default CampanaDetalle;
