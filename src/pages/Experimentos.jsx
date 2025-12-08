// src/pages/Experimentos.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getExperimentos } from '../services/experimento'

const ListaExperimentos = () => {
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        getExperimentos().then((resultado) => {
            setDatos(resultado);
            setCargando(false);
        });
    }, []);

    if (cargando) return <div className="text-center p-10 text-xl">Cargando ciencia... ⏳</div>;

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="text-indigo-600 hover:underline mb-4 inline-block font-bold">⬅ Volver al inicio</Link>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Experimentos y Ladrillos</h2>

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
    );
};

export default ListaExperimentos;