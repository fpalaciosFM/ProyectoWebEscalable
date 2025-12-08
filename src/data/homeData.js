/**
 * Datos para la página Home
 * Incluye información sobre las tres áreas principales de exploración
 * y datos de impacto
 */

export const exploracionCards = [
    {
        id: 'experimentos',
        titulo: 'Experimentos',
        emoji: '🔬',
        descripcion: 'Guías paso a paso para hacer ciencia segura y divertida con materiales caseros. Aprende el "por qué" de las cosas.',
        href: '/experimentos',
        borderColor: 'var(--color-primary)'
    },
    {
        id: 'galeria',
        titulo: 'Galería de Momentos',
        emoji: '📸',
        descripcion: 'Revive nuestros mejores momentos en talleres, eventos y actividades comunitarias. Inspiración visual de ciencia en acción.',
        href: '/galeria',
        borderColor: 'var(--color-secondary)'
    },
    {
        id: 'eventos',
        titulo: 'Eventos y Noticias',
        emoji: '📅',
        descripcion: 'Descubre próximos eventos, talleres y las últimas noticias de nuestro proyecto. Mantente actualizado con nosotros.',
        href: '/eventos-noticias',
        borderColor: 'var(--color-success)'
    }
];

export const contribucionCards = [
    {
        id: 'donar',
        titulo: 'Donar Fondos',
        emoji: '💰',
        descripcion: 'Tu aporte nos ayuda a mantener nuestros programas, comprar materiales y llegar a más personas.',
        href: '/contribuir?tab=donar',
        cardClass: 'card-success'
    },
    {
        id: 'voluntario',
        titulo: 'Ser Voluntario',
        emoji: '🤝',
        descripcion: 'Únete a nuestro equipo de voluntarios y ayuda a facilitar experimentos, talleres y eventos.',
        href: '/contribuir?tab=voluntario',
        cardClass: 'card-primary'
    },
    {
        id: 'proponer',
        titulo: 'Proponer Experimentos',
        emoji: '💡',
        descripcion: '¿Tienes una idea genial? Propón un experimento nuevo para nuestra plataforma.',
        href: '/contribuir?tab=proponer',
        cardClass: 'card-accent'
    }
];

export const impactStats = [
    {
        numero: '1500+',
        label: 'Estudiantes Impactados',
        color: 'text-primary'
    },
    {
        numero: '200+',
        label: 'Experimentos Realizados',
        color: 'text-secondary'
    },
    {
        numero: '50+',
        label: 'Eventos Comunitarios',
        color: 'text-accent'
    },
    {
        numero: '12+',
        label: 'Años de Trayectoria',
        color: 'text-success'
    }
];
