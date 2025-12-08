/**
 * Datos mock para página Contribuir, Voluntariado y Proponer Experimento
 * Incluye: opciones de donación, roles de voluntarios, tipos de propuestas, FAQs
 * 
 * Estructura de volunteerRoles:
 * - id: identificador único
 * - titulo: nombre del rol
 * - emoji: icono representativo
 * - descripcion: descripción del rol
 * - tiempo: tiempo requerido
 * - lugar: modalidad (Remoto/Presencial/Flexible)
 * - color: color para identificación visual
 * 
 * Estructura de proposalTypes:
 * - id: identificador único
 * - titulo: tipo de propuesta
 * - emoji: icono representativo
 * - descripcion: descripción del tipo
 */

export const donationOptions = [
    {
        id: 'pequeno',
        monto: '$200 MXN',
        titulo: 'Pequeño Aporte',
        emoji: '🌱',
        descripcion: 'Materiales para 5 niños',
        color: 'green'
    },
    {
        id: 'standard',
        monto: '$500 MXN',
        titulo: 'Aporte Estándar',
        emoji: '🔬',
        descripcion: 'Taller completo para un grupo',
        color: 'blue',
        destacado: true
    },
    {
        id: 'grande',
        monto: '$1,000 MXN',
        titulo: 'Gran Aporte',
        emoji: '🚀',
        descripcion: 'Equipo completo de laboratorio',
        color: 'purple'
    }
];

export const volunteerRoles = [
    {
        id: 'facilitador',
        titulo: 'Facilitador de Talleres',
        emoji: '📚',
        descripcion: 'Ayuda a dirigir talleres presenciales en comunidades. No necesitas ser experto en ciencia; te proporcionamos capacitación.',
        tiempo: '4 horas/mes',
        lugar: 'Flexible',
        color: 'indigo'
    },
    {
        id: 'digital',
        titulo: 'Asistente Digital',
        emoji: '💻',
        descripcion: 'Ayuda a desarrollar contenido, mejorar la plataforma, crear videos o editar materiales.',
        tiempo: 'Flexible',
        lugar: 'Remoto',
        color: 'green'
    },
    {
        id: 'contenido',
        titulo: 'Creador de Contenido',
        emoji: '🎨',
        descripcion: 'Diseña guías, crea ilustraciones, o produce videos educativos sobre experimentos.',
        tiempo: 'Flexible',
        lugar: 'Remoto',
        color: 'purple'
    },
    {
        id: 'alianzas',
        titulo: 'Coordinador de Alianzas',
        emoji: '🤝',
        descripcion: 'Conecta con escuelas, centros culturales y organizaciones locales para expandir nuestro alcance.',
        tiempo: '3-5 horas/mes',
        lugar: 'Flexible',
        color: 'red'
    }
];

export const proposalTypes = [
    {
        id: 'experimento',
        titulo: 'Experimento Simple',
        emoji: '🧪',
        descripcion: 'Guía paso a paso de un experimento con materiales caseros'
    },
    {
        id: 'experto',
        titulo: 'Colaborador Experto',
        emoji: '👨‍🔬',
        descripcion: 'Un científico local dispuesto a colaborar o dar conferencias'
    },
    {
        id: 'recurso',
        titulo: 'Recurso Educativo',
        emoji: '📚',
        descripcion: 'Videos, guías descargables, libros digitales, podcasts'
    },
    {
        id: 'alianza',
        titulo: 'Alianza o Espacio',
        emoji: '🏫',
        descripcion: 'Acceso a laboratorios, museos, parques o espacios comunitarios'
    }
];

export const faqItems = [
    {
        id: 1,
        question: '¿Cuál es la mejor forma de contribuir?',
        answer: 'La mejor forma es la que mejor se ajusta a ti. Todos los aportes son valiosos: dinero, tiempo, ideas y conexiones. Elige lo que te sientas cómodo dando.'
    },
    {
        id: 2,
        question: '¿Recibiré recibos de mis donaciones?',
        answer: 'Sí. Cada donación genera un recibo automático. Además, recibirás acceso a reportes trimestrales que muestran cómo se usaron tus aportes.'
    },
    {
        id: 3,
        question: '¿Necesito experiencia para ser voluntario?',
        answer: 'No. Aunque la experiencia es valiosa, lo más importante es tu disposición a aprender y tu compromiso con la educación. Proporcionamos capacitación en todos los roles.'
    },
    {
        id: 4,
        question: '¿Cuánto tiempo debo dedicar?',
        answer: 'Depende del rol. Algunos requieren 2-4 horas/mes, otros son completamente flexibles (remoto). Tú decides cuánto tiempo dedicar.'
    }
];
