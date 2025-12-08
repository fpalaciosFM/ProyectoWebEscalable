import { HashRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import ListaExperimentos from './pages/Experimentos'
import Contribuir from './pages/Contribuir'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experimentos" element={<ListaExperimentos />} />
        <Route path="/contribuir" element={<Contribuir />} />
      </Routes>
    </HashRouter>
  )
}

export default App