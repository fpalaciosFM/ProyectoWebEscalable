import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => {
        // If checking the root path, require exact match so '/' isn't active for all routes
        if (path === '/') return location.pathname === '/';
        // For other paths, match exact or any nested route under that path
        return location.pathname === path || location.pathname.startsWith(path + '/') || location.pathname.startsWith(path);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
            {/* Logo */}
            <Link to="/" className={`text-2xl font-bold flex items-center gap-2 transition ${isActive('/') ? 'text-indigo-700' : 'text-indigo-600 hover:text-indigo-700'}`}>
                ⚛️ Puentes de 100cia
            </Link>

            {/* Links de navegación */}
            <div className="flex items-center space-x-6">
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

                {/* Botón Contribuir con Dropdown */}
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

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10 animate-in fade-in slide-in-from-top-2">
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
        </nav>
    );
};

export default NavBar;
