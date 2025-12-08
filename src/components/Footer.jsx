import React from 'react';
import { Link } from 'react-router-dom';
import SocialIcon from './SocialIcon';

/**
 * Footer Component - Reutilizable
 * Pie de página consistente usado en todas las páginas principales.
 * Incluye navegación, redes sociales y información de copyright.
 * 
 * @example
 * <Footer />
 */
const Footer = () => {
    return (
        <footer className="text-white py-12 px-6" style={{ backgroundColor: '#1f2937' }}>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-primary">Puentes de 100cia</h3>
                        <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
                            Inspirando la próxima generación de científicos a través de la educación interactiva y la experimentación.
                        </p>
                    </div>

                    {/* Navegación */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-primary">Navegación</h3>
                        <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                            <li><Link to="/" className="link-primary">Inicio</Link></li>
                            <li><Link to="/nosotros" className="link-primary">Nosotros</Link></li>
                            <li><Link to="/experimentos" className="link-primary">Experimentos</Link></li>
                            <li><Link to="/galeria" className="link-primary">Galería</Link></li>
                        </ul>
                    </div>

                    {/* Explorar */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-primary">Explorar</h3>
                        <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                            <li><Link to="/eventos-noticias" className="link-primary">Eventos y Noticias</Link></li>
                            <li><Link to="/contribuir" className="link-primary">Contribuir</Link></li>
                            <li><a href="#contacto" className="link-primary">Contacto</a></li>
                            <li><a href="#privacidad" className="link-primary">Privacidad</a></li>
                        </ul>
                    </div>

                    {/* Redes Sociales */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-primary">Síguenos</h3>
                        <div className="flex gap-4">
                            <SocialIcon type="facebook" />
                            <SocialIcon type="instagram" />
                            <SocialIcon type="tiktok" />
                            <SocialIcon type="linkedin" />
                            <SocialIcon type="whatsapp" />
                        </div>
                    </div>
                </div>

                <div className="border-t pt-8 text-center text-sm" style={{ borderColor: 'var(--color-border)', color: 'var(--color-text-secondary)' }}>
                    <p>© 2025 Puentes de 100cia. Hecho con ❤️ y curiosidad científica.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
