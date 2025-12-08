import React from 'react';

/**
 * Hero Component - Reutilizable
 * Sección hero con fondo degradado y contenido flexible
 * 
 * @param {string} gradientClass - Clase de gradiente (ej: 'bg-hero-nosotros')
 * @param {string} title - Título principal
 * @param {string} subtitle - Subtítulo/descripción
 * @param {ReactNode} [children] - Contenido adicional (botones, etc)
 * 
 * @example
 * <Hero 
 *   gradientClass="bg-hero-contribuir"
 *   title="¡Sé Parte del Cambio!"
 *   subtitle="Hay muchas formas de contribuir..."
 * />
 */
const Hero = ({ gradientClass, title, subtitle, children, padding = 'py-20' }) => {
    return (
        <header className={`${gradientClass} text-white ${padding} px-6 text-center`}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl opacity-90 mb-6">
                        {subtitle}
                    </p>
                )}
                {children}
            </div>
        </header>
    );
};

export default Hero;
