import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook personalizado: useScrollTop
 * Automáticamente hace scroll al tope de la página cuando cambia la ruta.
 * 
 * @example
 * const MyPage = () => {
 *   useScrollTop();
 *   return <div>Contenido...</div>;
 * };
 * 
 * @description
 * Este hook escucha cambios en la ubicación (ruta) usando `useLocation` de React Router
 * y ejecuta `window.scrollTo` con comportamiento smooth. Esto mejora la UX al navegar
 * entre páginas, asegurando que el contenido comience siempre visible en la viewport.
 */
export const useScrollTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);
};
