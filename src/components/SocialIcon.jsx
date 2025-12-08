import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

/**
 * SocialIcon
 * Componente reutilizable para botones de redes sociales.
 * Usa react-icons (Font Awesome) para renderizar iconos optimizados y centrados.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {('facebook'|'instagram'|'tiktok'|'linkedin'|'whatsapp')} props.type - Tipo de red social
 * @param {string} [props.href='#'] - URL del enlace (default: '#')
 * 
 * @example
 * <SocialIcon type="facebook" href="https://facebook.com/puentes100cia" />
 * <SocialIcon type="whatsapp" href="https://wa.me/525551234567" />
 * 
 * @returns {JSX.Element|null} Enlace circular con icono de red social, o null si el tipo no existe
 */
const SocialIcon = ({ type, href = '#' }) => {
    const socialConfig = {
        facebook: {
            icon: FaFacebookF,
            color: 'bg-blue-600 hover:bg-blue-700',
            label: 'Facebook'
        },
        instagram: {
            icon: FaInstagram,
            color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-90',
            label: 'Instagram'
        },
        tiktok: {
            icon: FaTiktok,
            color: 'bg-black hover:bg-gray-800',
            label: 'TikTok'
        },
        linkedin: {
            icon: FaLinkedinIn,
            color: 'bg-blue-700 hover:bg-blue-800',
            label: 'LinkedIn'
        },
        whatsapp: {
            icon: FaWhatsapp,
            color: 'bg-green-500 hover:bg-green-600',
            label: 'WhatsApp'
        }
    };

    const config = socialConfig[type];
    if (!config) return null;

    const Icon = config.icon;

    return (
        <a 
            href={href} 
            className={`w-10 h-10 ${config.color} text-white rounded-full flex items-center justify-center transition-all`}
            title={config.label}
            aria-label={config.label}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon size={20} />
        </a>
    );
};

export default SocialIcon;
