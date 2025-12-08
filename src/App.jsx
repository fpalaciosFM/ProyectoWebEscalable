import { HashRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ListaExperimentos from './pages/Experimentos'
import Contribuir from './pages/Contribuir'
import Nosotros from './pages/Nosotros'
import Galeria from './pages/Galeria'
import EventosNoticias from './pages/EventosNoticias'

/**
 * App
 * Punto de entrada de enrutamiento de la SPA. 
 * Usamos `HashRouter` para mantener compatibilidad con GitHub Pages y rutas estáticas.
 * 
 * Rutas:
 * - "/" → Home (landing page)
 * - "/experimentos" → ListaExperimentos
 * - "/contribuir" → Contribuir (donar, voluntario, proponer)
 * - "/nosotros" → Nosotros (historia, equipo, impacto)
 * - "/galeria" → Galeria (galería de fotos)
 * - "/eventos-noticias" → EventosNoticias (eventos, noticias, calendario)
 * 
 * Arquitectura:
 * - Componentes reutilizables: NavBar (en todas las páginas), Footer, Hero, Cards temáticas
 * - Datos centralizados: src/data/*.js para fácil mantenimiento y futura integración con APIs
 * - Hooks personalizados: useScrollTop para scroll automático al navegar
 * - Sistema de diseño: variables CSS semánticas + clases reutilizables (.btn-main, .card-*, etc)
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