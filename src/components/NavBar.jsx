import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * NavBar
 * Barra de navegación reutilizable para la aplicación.
 * - Muestra logo y enlaces principales
 * - Controla el estado activo según la ruta usando `useLocation`
 * - Incluye un botón "Contribuir" con dropdown para acciones rápidas
 *
 * Comportamiento mobile/accessible relevante:
 * - `isMobileOpen` (state): controla el panel del menú móvil (hamburger). Al abrirlo, el dropdown de escritorio se cierra.
 * - `activeTab`: extraído de `location.search` (`?tab=`) y usado para resaltar los sub-enlaces dentro de la sección "Contribuir" en el menú móvil.
 * - Los enlaces en el menú móvil cierran el panel al navegar para evitar superposición visual.
 *
 * Uso:
 * - En pantallas pequeñas el menú muestra un botón hamburguesa; dentro hay enlaces principales y la sección "Contribuir" con sub-enlaces:
 *   - `#/contribuir?tab=donar` → Donar Fondos (resaltado cuando `tab=donar`)
 *   - `#/contribuir?tab=voluntario` → Ser Voluntario (resaltado cuando `tab=voluntario`)
 *   - `#/contribuir?tab=proponer` → Proponer Experimentos (resaltado cuando `tab=proponer`)
 *
 * Diseño pensado para ser usado en todas las páginas principales (Home, Experimentos, Contribuir).
 */

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    // read query param 'tab' to highlight mobile Contribuir sublinks
    const searchParams = new URLSearchParams(location.search);
    const activeTab = searchParams.get('tab');

    const isActive = (path) => {
        // If checking the root path, require exact match so '/' isn't active for all routes
        if (path === '/') return location.pathname === '/';
        // For other paths, match exact or any nested route under that path
        return location.pathname === path || location.pathname.startsWith(path + '/') || location.pathname.startsWith(path);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobile = () => {
        setIsMobileOpen(!isMobileOpen);
        // close desktop dropdown when opening mobile menu
        if (!isMobileOpen) setIsDropdownOpen(false);
    };

    return (
        <nav className="relative bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className={`text-2xl font-bold flex items-center gap-2 transition ${isActive('/') ? 'text-indigo-700' : 'text-indigo-600 hover:text-indigo-700'}`}>
                        ⚛️ Puentes de 100cia
                    </Link>

                    {/* Desktop links: hidden on small screens */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className={`relative font-medium transition px-1 ${isActive('/') ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600'}`}>
                            Inicio
                            {isActive('/') && (
                                <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-indigo-600 rounded" />
                            )}
                        </Link>
                        <Link to="/experimentos" className={`relative font-medium transition px-1 ${isActive('/experimentos') ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600'}`}>
                            Experimentos
                            {isActive('/experimentos') && (
                                <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-indigo-600 rounded" />
                            )}
                        </Link>
                        <a href="#nosotros" className="relative text-gray-600 hover:text-indigo-600 font-medium transition px-1">
                            Nosotros
                            <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-transparent rounded transform" />
                        </a>

                        {/* Desktop Contribuir button + dropdown */}
                        <div className="relative">
                            <div className="relative inline-block">
                                <button
                                    onClick={toggleDropdown}
                                    className={`font-bold py-2 px-6 rounded-full transition flex items-center gap-2 ${isActive('/contribuir') ? 'bg-indigo-700 text-white ring-2 ring-indigo-200' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                                >
                                    Contribuir
                                    <span className={`text-sm transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                {isActive('/contribuir') && (
                                    <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-indigo-600 rounded" />
                                )}
                            </div>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <Link
                                        to="/contribuir?tab=donar"
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="block px-6 py-3 text-gray-800 hover:bg-indigo-50 font-medium border-b hover:text-indigo-600 transition"
                                    >
                                        💰 Donar Fondos
                                    </Link>
                                    <Link
                                        to="/contribuir?tab=voluntario"
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="block px-6 py-3 text-gray-800 hover:bg-indigo-50 font-medium border-b hover:text-indigo-600 transition"
                                    >
                                        🤝 Ser Voluntario
                                    </Link>
                                    <Link
                                        to="/contribuir?tab=proponer"
                                        onClick={() => setIsDropdownOpen(false)}
                                        className="block px-6 py-3 text-gray-800 hover:bg-indigo-50 font-medium hover:text-indigo-600 transition"
                                    >
                                        💡 Proponer Experimentos
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile: hamburger button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobile}
                            aria-label="Abrir menú"
                            aria-expanded={isMobileOpen}
                            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            {/* Icon: simple hamburger */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            {isMobileOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                        <Link to="/" onClick={() => setIsMobileOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
                            Inicio
                        </Link>
                        <Link to="/experimentos" onClick={() => setIsMobileOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/experimentos') ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
                            Experimentos
                        </Link>
                        <a href="#nosotros" onClick={() => setIsMobileOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                            Nosotros
                        </a>

                        {/* Mobile Contribuir expanded section */}
                        <div className="mt-2 border-t border-gray-100 pt-2 px-3">
                            <Link to="/contribuir?tab=donar" onClick={() => setIsMobileOpen(false)} className="block text-sm font-semibold text-gray-700 mb-2 hover:underline">
                                Contribuir
                            </Link>
                            <Link to="/contribuir?tab=donar" onClick={() => setIsMobileOpen(false)} className={`block px-3 py-2 rounded-md text-base ${activeTab === 'donar' ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
                                💰 Donar Fondos
                            </Link>
                            <Link to="/contribuir?tab=voluntario" onClick={() => setIsMobileOpen(false)} className={`block px-3 py-2 rounded-md text-base ${activeTab === 'voluntario' ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
                                🤝 Ser Voluntario
                            </Link>
                            <Link to="/contribuir?tab=proponer" onClick={() => setIsMobileOpen(false)} className={`block px-3 py-2 rounded-md text-base ${activeTab === 'proponer' ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
                                💡 Proponer Experimentos
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
