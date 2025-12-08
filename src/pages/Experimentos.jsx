// src/pages/Experimentos.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getExperimentos } from '../services/experimento'
import NavBar from '../components/NavBar'

/**
 * ListaExperimentos
 * Página que consulta (mock) la lista de experimentos y los renderiza en un grid.
 * - Usa `getExperimentos` del servicio para simular una petición asíncrona
 * - Muestra un estado de carga mientras llegan los datos
 */
const ListaExperimentos = () => {
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    // Ejecutar la petición simulada al montar el componente
    useEffect(() => {
        getExperimentos().then((resultado) => {
            setDatos(resultado);
            setCargando(false);
        });
    }, []);

    // Estado de carga sencillo
    if (cargando) return <div className="text-center p-10 text-xl">Cargando ciencia... ⏳</div>;

    return (
        <div className="min-h-screen bg-slate-50">
            {/* NavBar reutilizable */}
            <NavBar />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Experimentos</h2>

                    {/* Grid de tarjetas con experimentos */}
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {datos.map((item) => (
                            <div key={item.id} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                <h3 className="text-xl font-bold text-indigo-700 mb-2">{item.titulo}</h3>
                                <p className="text-gray-600 mb-4">{item.descripcion}</p>
                                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                    {item.categoria}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListaExperimentos;