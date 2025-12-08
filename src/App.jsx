import { HashRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import ListaExperimentos from './pages/Experimentos'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experimentos" element={<ListaExperimentos />} />
      </Routes>
    </HashRouter>
  )
}

export default App