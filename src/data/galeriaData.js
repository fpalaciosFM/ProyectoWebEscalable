/**
 * Datos mock para página Galería
 * Incluye: fotos, categorías de galería
 */

export const fotos = [
    {
        id: 1,
        titulo: 'Taller de Química',
        categoria: 'talleres',
        descripcion: 'Niños experimentando con reacciones químicas seguras',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23f0f4ff" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%236366f1" text-anchor="middle" dominant-baseline="middle"%3E🧪%3C/text%3E%3C/svg%3E'
    },
    {
        id: 2,
        titulo: 'Evento Comunitario',
        categoria: 'eventos',
        descripcion: 'Feria de ciencia en la plaza central',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23f0fdf4" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%2310b981" text-anchor="middle" dominant-baseline="middle"%3E🎪%3C/text%3E%3C/svg%3E'
    },
    {
        id: 3,
        titulo: 'Clase Práctica de Biología',
        categoria: 'talleres',
        descripcion: 'Observación de microorganismos con microscopios',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23fef3c7" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%23d97706" text-anchor="middle" dominant-baseline="middle"%3E🔬%3C/text%3E%3C/svg%3E'
    },
    {
        id: 4,
        titulo: 'Voluntarios en Acción',
        categoria: 'voluntarios',
        descripcion: 'Equipo de voluntarios preparando materiales',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23fce7f3" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle"%3E🤝%3C/text%3E%3C/svg%3E'
    },
    {
        id: 5,
        titulo: 'Taller de Física',
        categoria: 'talleres',
        descripcion: 'Experimentos de mecánica con materiales reciclados',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23f0f4ff" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%236366f1" text-anchor="middle" dominant-baseline="middle"%3E⚙️%3C/text%3E%3C/svg%3E'
    },
    {
        id: 6,
        titulo: 'Encuentro con Docentes',
        categoria: 'eventos',
        descripcion: 'Capacitación para maestros en metodología STEAM',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23fef3c7" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%23d97706" text-anchor="middle" dominant-baseline="middle"%3E👨%E2%80%8D🏫%3C/text%3E%3C/svg%3E'
    },
    {
        id: 7,
        titulo: 'Taller Infantil de Electrónica',
        categoria: 'talleres',
        descripcion: 'Niños construyendo circuitos simples',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23fce7f3" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle"%3E⚡%3C/text%3E%3C/svg%3E'
    },
    {
        id: 8,
        titulo: 'Jornada de Voluntariado',
        categoria: 'voluntarios',
        descripcion: 'Voluntarios trabajando en comunidad',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"%3E%3Crect fill="%23f0fdf4" width="500" height="400"/%3E%3Ctext x="250" y="200" font-size="60" fill="%2310b981" text-anchor="middle" dominant-baseline="middle"%3E💪%3C/text%3E%3C/svg%3E'
    }
];

export const galeryCategories = [
    { id: 'todos', label: 'Todos' },
    { id: 'talleres', label: 'Talleres' },
    { id: 'eventos', label: 'Eventos' },
    { id: 'voluntarios', label: 'Voluntarios' }
];
