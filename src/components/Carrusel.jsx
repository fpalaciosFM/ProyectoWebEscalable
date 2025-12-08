import React, { useState, useEffect } from 'react';

/**
 * Carrusel
 * Componente reutilizable de carrusel animado e interactivo con transiciones suaves.
 * Muestra imágenes en secuencia con controles manuales (botones anterior/siguiente),
 * indicadores de puntos clickeables, y auto-avance configurable con pausa.
 * 
 * @param {Array<Object>} images - Array de objetos con estructura:
 *   - {string} src - URL o data URI de la imagen
 *   - {string} titulo - Título de la imagen
 *   - {string} descripcion - Descripción breve de la imagen
 * @param {number} [autoplayDelay=5000] - Delay en ms para auto-avance (0 = desactivado)
 * 
 * @example
 * const imagenes = [
 *   { src: 'imagen1.jpg', titulo: 'Título 1', descripcion: 'Descripción 1' },
 *   { src: 'imagen2.jpg', titulo: 'Título 2', descripcion: 'Descripción 2' }
 * ];
 * <Carrusel images={imagenes} autoplayDelay={4000} />
 * 
 * @returns {JSX.Element|null} Carrusel renderizado o null si no hay imágenes
 */
const Carrusel = ({ images, autoplayDelay = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Auto-avance del carrusel
    useEffect(() => {
        if (!isAutoplay || images.length === 0) return;

        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % images.length);
                setIsTransitioning(false);
            }, 300);
        }, autoplayDelay);

        return () => clearInterval(interval);
    }, [isAutoplay, images.length, autoplayDelay]);

    const goToSlide = (index) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsTransitioning(false);
        }, 300);
        setIsAutoplay(false);
    };

    const nextSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setIsTransitioning(false);
        }, 300);
        setIsAutoplay(false);
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
            setIsTransitioning(false);
        }, 300);
        setIsAutoplay(false);
    };

    if (images.length === 0) return null;

    const currentImage = images[currentIndex];

    return (
        <div className="relative w-full bg-slate-900 rounded-lg overflow-hidden shadow-lg">
            {/* Imagen Principal con Animación */}
            <div className="relative h-96 md:h-96 overflow-hidden">
                <img
                    src={currentImage.src}
                    alt={currentImage.titulo}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                        isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                    }`}
                />
                
                {/* Overlay con Texto Animado */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 transition-all duration-500 ${
                    isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 transition-all duration-500">
                        {currentImage.titulo}
                    </h3>
                    <p className="text-white opacity-90 text-sm md:text-base transition-all duration-500">
                        {currentImage.descripcion}
                    </p>
                </div>
            </div>

            {/* Botones Anteriores/Siguiente */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black px-4 py-2 rounded-full transition z-10"
                aria-label="Imagen anterior"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black px-4 py-2 rounded-full transition z-10"
                aria-label="Siguiente imagen"
            >
                ❯
            </button>

            {/* Indicadores de Puntos */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 h-3 rounded-full ${
                            index === currentIndex
                                ? 'bg-white w-8'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75 w-3'
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>

            {/* Contador de Imágenes */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm font-semibold z-10 transition-opacity duration-300">
                {currentIndex + 1} / {images.length}
            </div>

            {/* Botón Autoplay Toggle */}
            <button
                onClick={() => setIsAutoplay(!isAutoplay)}
                className="absolute top-4 left-4 bg-black bg-opacity-60 hover:bg-opacity-80 text-white px-3 py-1 rounded-full text-xs font-semibold transition z-10"
                title={isAutoplay ? 'Pausar' : 'Reproducir'}
            >
                {isAutoplay ? '⏸ Pausar' : '▶ Reproducir'}
            </button>
        </div>
    );
};

export default Carrusel;
