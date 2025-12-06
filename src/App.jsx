import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { getContenido } from './services/user'
import './App.css' // Mantenemos los estilos base por ahora

// 1. Componente para la página de Inicio
const Home = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>🔭 Muro de la Ciencia</h1>
    <p>Bienvenido al futuro sitio de divulgación científica.</p>
    <div style={{ marginTop: '20px' }}>
      <Link to="/experimentos" style={{ padding: '10px 20px', backgroundColor: '#646cff', color: 'white', borderRadius: '5px', textDecoration: 'none' }}>
        Ver Experimentos y Muro
      </Link>
    </div>
  </div>
);

// 2. Componente para la lista de contenidos
const ListaContenidos = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Pedimos los datos al servicio al cargar la página
    getContenido().then((resultado) => {
      setDatos(resultado);
      setCargando(false);
    });
  }, []);

  if (cargando) return <h2>Cargando conocimientos... ⏳</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/">⬅ Volver al inicio</Link>
      <h2>Experimentos y Ladrillos</h2>

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {datos.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', background: '#242424' }}>
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
            <small style={{ color: '#888' }}>Etiqueta: {item.categoria}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

// 3. Configuración de Rutas
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experimentos" element={<ListaContenidos />} />
      </Routes>
    </HashRouter>
  )
}

export default App
