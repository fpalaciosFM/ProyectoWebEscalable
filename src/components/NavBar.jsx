import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * NavBar
 * Barra de navegación reutilizable para la aplicación con arquitectura responsive y dropdowns.
 * - Muestra logo y enlaces principales
 * - Controla el estado activo según la ruta usando `useLocation`
 * - Incluye dropdown "Explorar" que agrupa Experimentos, Galería y Eventos
 * - Incluye botón "Contribuir" con dropdown para acciones rápidas (Donar, Voluntario, Proponer)
 *
 * Estados controlados:
 * - `isMobileOpen`: controla el panel del menú móvil (hamburger). Al abrirlo, ambos dropdowns se cierran.
 * - `isDropdownOpen`: controla la visibilidad del dropdown "Contribuir" (desktop y móvil)
 * - `isExplorarDropdownOpen`: controla la visibilidad del dropdown "Explorar" (desktop y móvil)
 * - `activeTab`: extraído de `location.search` (`?tab=`) para resaltar sub-enlaces dentro de "Contribuir"
 *
 * Estructura de navegación:
 * Desktop:
 *   - Inicio | Explorar (dropdown: Experimentos, Galería, Eventos) | Nosotros | Contribuir (dropdown)
 * Mobile:
 *   - Hamburger → Inicio, Explorar (expandible), Nosotros, Contribuir (expandido con sub-enlaces)
 *
 * Comportamiento de dropdowns:
 * - Explorar: agrupa Experimentos (#/experimentos), Galería (#/galeria), Eventos (#/eventos-noticias)
 * - Contribuir: ofrece Donar Fondos (#/contribuir?tab=donar), Ser Voluntario (#/contribuir?tab=voluntario), Proponer (#/contribuir?tab=proponer)
 * - El resaltado activo aplica a la ruta principal y todos sus sub-enlaces
 * - En móvil, cerrar un sub-enlace cierra automáticamente tanto el dropdown como el menú
 *
 * Diseño pensado para ser usado en todas las páginas principales de la aplicación.
 */

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isExplorarDropdownOpen, setIsExplorarDropdownOpen] = useState(false);
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
        setIsExplorarDropdownOpen(false);
    };

    const toggleExplorarDropdown = () => {
        setIsExplorarDropdownOpen(!isExplorarDropdownOpen);
        setIsDropdownOpen(false);
    };

    const toggleMobile = () => {
        setIsMobileOpen(!isMobileOpen);
        // close desktop dropdowns when opening mobile menu
        if (!isMobileOpen) {
            setIsDropdownOpen(false);
            setIsExplorarDropdownOpen(false);
        }
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

                        <Link to="/nosotros" className={`relative font-medium transition px-1 ${isActive('/nosotros') ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600'}`}>
                            Nosotros
                            {isActive('/nosotros') && (
                                <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-indigo-600 rounded" />
                            )}
                        </Link>

                        {/* Desktop Explorar dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleExplorarDropdown}
                                className={`relative font-medium transition px-1 flex items-center gap-1 ${
                                    isActive('/experimentos') || isActive('/galeria') || isActive('/eventos-noticias')
                                        ? 'text-indigo-600 font-semibold'
                                        : 'text-gray-600 hover:text-indigo-600'
                                }`}
                            >
                                Explorar
                                <span className={`text-sm transition-transform ${isExplorarDropdownOpen ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                                {(isActive('/experimentos') || isActive('/galeria') || isActive('/eventos-noticias')) && (
                                    <span className="absolute left-0 right-0 -bottom-2 h-0.5 bg-indigo-600 rounded" />
                                )}
                            </button>

                            {isExplorarDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <Link
                                        to="/experimentos"
                                        onClick={() => setIsExplorarDropdownOpen(false)}
                                        className="block px-6 py-3 text-gray-800 hover:bg-indigo-50 font-medium border-b hover:text-indigo-600 transition"
                                    >
                                        🧪 Experimentos
                                    </Link>
                                    <Link
                                        to="/galeria"
                                        onClick={() => setIsExplorarDropdownOpen(false)}
                                        className="block px-6 py-3 text-gray-800 hover:bg-indigo-50 font-medium border-b hover:text-indigo-600 transition"
                                    >
                                        📸 Galería
                                    </Link>
                                    <Link
                                        to="/eventos-noticias"
                                        onClick={() => setIsExplorarDropdownOpen(false)}
                                        className="block px-6 py-3 text-gray-800 hover:bg-indigo-50 font-medium hover:text-indigo-600 transition"
                                    >
                                        📅 Eventos y Noticias
                                    </Link>
                                </div>
                            )}
                        </div>

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

                        <Link to="/nosotros" onClick={() => setIsMobileOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/nosotros') ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}>
                            Nosotros
                        </Link>

                        {/* Mobile: Explorar section */}
                        <div>
                            <button
                                onClick={toggleExplorarDropdown}
                                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between ${
                                    isActive('/experimentos') || isActive('/galeria') || isActive('/eventos-noticias')
                                        ? 'text-indigo-600 font-semibold bg-indigo-50'
                                        : 'text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                Explorar
                                <span className={`text-sm transition-transform ${isExplorarDropdownOpen ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </button>
                            {isExplorarDropdownOpen && (
                                <div className="pl-4 space-y-2 bg-gray-50 rounded-md mt-1">
                                    <Link
                                        to="/experimentos"
                                        onClick={() => {
                                            setIsExplorarDropdownOpen(false);
                                            setIsMobileOpen(false);
                                        }}
                                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                                            isActive('/experimentos')
                                                ? 'text-indigo-600 font-semibold'
                                                : 'text-gray-700 hover:text-indigo-600'
                                        }`}
                                    >
                                        🧪 Experimentos
                                    </Link>
                                    <Link
                                        to="/galeria"
                                        onClick={() => {
                                            setIsExplorarDropdownOpen(false);
                                            setIsMobileOpen(false);
                                        }}
                                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                                            isActive('/galeria')
                                                ? 'text-indigo-600 font-semibold'
                                                : 'text-gray-700 hover:text-indigo-600'
                                        }`}
                                    >
                                        📸 Galería
                                    </Link>
                                    <Link
                                        to="/eventos-noticias"
                                        onClick={() => {
                                            setIsExplorarDropdownOpen(false);
                                            setIsMobileOpen(false);
                                        }}
                                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                                            isActive('/eventos-noticias')
                                                ? 'text-indigo-600 font-semibold'
                                                : 'text-gray-700 hover:text-indigo-600'
                                        }`}
                                    >
                                        📅 Eventos y Noticias
                                    </Link>
                                </div>
                            )}
                        </div>

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
