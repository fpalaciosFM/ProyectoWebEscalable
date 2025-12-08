import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ListaExperimentos from './pages/Experimentos'
import Contribuir from './pages/Contribuir'
import Nosotros from './pages/Nosotros'
import Galeria from './pages/Galeria'
import EventosNoticias from './pages/EventosNoticias'

/**
 * App
 * Punto de entrada de enrutamiento de la SPA. Usamos `HashRouter` para
 * mantener compatibilidad con GitHub Pages y rutas estáticas.
 */
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experimentos" element={<ListaExperimentos />} />
        <Route path="/contribuir" element={<Contribuir />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/eventos-noticias" element={<EventosNoticias />} />
      </Routes>
    </HashRouter>
  )
}

export default App