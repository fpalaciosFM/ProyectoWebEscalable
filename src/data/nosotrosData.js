/**
 * Datos mock para página Nosotros
 * Incluye: equipo, carrusel de imágenes, estadísticas de impacto, testimonios, cronograma
 * 
 * Estructura de testimonies:
 * - text: texto del testimonio (sin comillas, se agregan en JSX)
 * - author: nombre y rol del autor
 * - location: ubicación del autor
 */

export const teamMembers = [
    { name: 'Angelina Vázquez', role: 'Fundadora / Educadora', bio: '15 años en educación informal y diseño de talleres.' },
    { name: 'Carlos Pérez', role: 'Coordinador de Proyectos', bio: 'Gestión y logística para actividades comunitarias.' },
    { name: 'Ana Gómez', role: 'Comunicación y Alianzas', bio: 'Relación con escuelas y organizaciones locales.' },
    { name: 'Fernando Palacios', role: 'Voluntario y Tech', bio: 'Divulgación de ciencia y programador de plataforma web' },
];

export const carouselImages = [
    {
        src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23f0f4ff" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%236366f1" text-anchor="middle" dominant-baseline="middle"%3E🧪%3C/text%3E%3C/svg%3E',
        titulo: 'Talleres Prácticos de Ciencia',
        descripcion: 'Niños descubriendo los secretos de la química y física a través de experimentos interactivos.'
    },
    {
        src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23f0fdf4" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%2310b981" text-anchor="middle" dominant-baseline="middle"%3E🎪%3C/text%3E%3C/svg%3E',
        titulo: 'Eventos Comunitarios',
        descripcion: 'Feria de ciencia que reúne a cientos de familias interesadas en aprender juntos.'
    },
    {
        src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23fef3c7" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%23d97706" text-anchor="middle" dominant-baseline="middle"%3E👨%E2%80%8D🏫%3C/text%3E%3C/svg%3E',
        titulo: 'Formación de Docentes',
        descripcion: 'Capacitación continua para maestros en metodología STEAM y educación inclusiva.'
    },
    {
        src: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23fce7f3" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle"%3E🤝%3C/text%3E%3C/svg%3E',
        titulo: 'Voluntarios en Acción',
        descripcion: 'Nuestro equipo de voluntarios preparando materiales y apoyando las actividades.'
    }
];

export const impactStats = [
    { value: '+1,200', label: 'Niños impactados' },
    { value: '+250', label: 'Talleres realizados' },
    { value: '+30', label: 'Escuelas aliadas' },
    { value: '+3,500', label: 'Materiales distribuidos' },
    { value: '+120', label: 'Voluntarios activos' },
    { value: '+5', label: 'Ciudades atendidas' },
];

export const testimonies = [
    {
        text: 'Mi hija volvió a casa emocionada, construyó un volcán y quiso aprender más. Ahora hace pequeñas investigaciones con sus amigos.',
        author: 'María, madre',
        location: 'Ciudad de México'
    },
    {
        text: 'Como docente, las guías nos permitieron replicar experimentos con pocos recursos y gran impacto en la comprensión de conceptos.',
        author: 'José, profesor',
        location: 'Veracruz'
    },
    {
        text: 'El voluntariado en Puentes de 100cia me enseñó que la ciencia es para todos. Ahora inspiro a mis estudiantes cada día.',
        author: 'Andrea, voluntaria',
        location: 'Guadalajara'
    }
];

export const timeline = [
    { year: '2019', title: 'Fundación', description: 'Angelina y un grupo de amigos deciden crear Puentes de 100cia con talleres en barrios de la Ciudad de México.' },
    { year: '2020', title: 'Pandemia & Adaptación', description: 'Se pivota a talleres virtuales y se crean guías descargables para que familias experimenten en casa.' },
    { year: '2021', title: 'Expansión Regional', description: 'Se abre el programa en Guadalajara, Veracruz y Puebla. Red de voluntarios crece a 50+ personas.' },
    { year: '2022', title: 'Reconocimiento', description: 'Se recibe premio estatal de educación innovadora. Primeros aliados institucionales se suman.' },
    { year: '2023', title: 'Plataforma Digital', description: 'Se lanza la plataforma web con catálogo de experimentos y sistema de reserva para talleres.' },
    { year: '2024', title: 'Hito: 1000 niños', description: 'Se alcanza la cifra de 1,000 niños impactados directamente. Se formaliza como asociación civil.' },
    { year: '2025', title: 'Presente', description: 'Continuamos expandiendo con nueva tecnología y nuevas ciudades. ¡Únete!' },
];
