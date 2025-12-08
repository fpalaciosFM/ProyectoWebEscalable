import React, { useState } from 'react';

/**
 * Calendario
 * Componente de calendario interactivo que muestra eventos por mes.
 * Permite navegación entre meses y resalta días que tienen eventos asociados.
 * 
 * @param {Array<Object>} [eventos=[]] - Array de eventos con estructura:
 *   - {string} fecha - Día del mes en formato "DD" (p. ej: "15")
 *   - {string} titulo - Título del evento
 * @param {Function} [onDateClick] - Callback ejecutado al hacer clic en un día
 *   Parámetro: (dia: number) => void
 * 
 * @example
 * const eventos = [
 *   { fecha: '15', titulo: 'Taller de Química' },
 *   { fecha: '22', titulo: 'Feria de Ciencia' }
 * ];
 * const handleDateClick = (dia) => console.log(`Seleccionado día: ${dia}`);
 * <Calendario eventos={eventos} onDateClick={handleDateClick} />
 * 
 * @returns {JSX.Element} Calendario renderizado
 */
const Calendario = ({ eventos = [], onDateClick }) => {
    const [mesActual, setMesActual] = useState(new Date());

    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const dias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    // Obtener primer día del mes y cantidad de días
    const primerDia = new Date(mesActual.getFullYear(), mesActual.getMonth(), 1).getDay();
    const diasEnMes = new Date(mesActual.getFullYear(), mesActual.getMonth() + 1, 0).getDate();

    // Crear array de días para renderizar
    const diasArray = [];
    for (let i = 0; i < primerDia; i++) {
        diasArray.push(null);
    }
    for (let i = 1; i <= diasEnMes; i++) {
        diasArray.push(i);
    }

    // Verificar si un día tiene eventos
    const tienEvento = (dia) => {
        if (!dia) return false;
        const diaStr = String(dia).padStart(2, '0');
        return eventos.some(e => e.fecha.includes(diaStr));
    };

    const irAlMesAnterior = () => {
        setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth() - 1));
    };

    const irAlProximoMes = () => {
        setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth() + 1));
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <button
                    onClick={irAlMesAnterior}
                    className="text-indigo-600 hover:bg-indigo-50 p-2 rounded-lg transition"
                    aria-label="Mes anterior"
                >
                    ❮
                </button>
                <h3 className="text-xl font-bold text-gray-800">
                    {meses[mesActual.getMonth()]} {mesActual.getFullYear()}
                </h3>
                <button
                    onClick={irAlProximoMes}
                    className="text-indigo-600 hover:bg-indigo-50 p-2 rounded-lg transition"
                    aria-label="Siguiente mes"
                >
                    ❯
                </button>
            </div>

            {/* Días de la semana */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {dias.map(dia => (
                    <div key={dia} className="text-center font-semibold text-sm text-gray-700 py-2">
                        {dia}
                    </div>
                ))}
            </div>

            {/* Días del mes */}
            <div className="grid grid-cols-7 gap-1">
                {diasArray.map((dia, index) => (
                    <div
                        key={index}
                        onClick={() => dia && onDateClick && onDateClick(dia)}
                        className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium cursor-pointer transition ${
                            dia === null
                                ? 'bg-gray-50'
                                : tienEvento(dia)
                                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                                : 'bg-gray-100 text-gray-800 hover:bg-indigo-50'
                        }`}
                    >
                        {dia}
                    </div>
                ))}
            </div>

            {/* Leyenda */}
            <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2">Leyenda:</p>
                <div className="flex items-center gap-3 text-xs">
                    <div className="w-4 h-4 bg-indigo-600 rounded"></div>
                    <span className="text-gray-600">Tiene eventos</span>
                </div>
            </div>
        </div>
    );
};

export default Calendario;
