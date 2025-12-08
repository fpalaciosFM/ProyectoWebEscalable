/**
 * Datos mock para página EventosNoticias
 * Incluye: eventos próximos, noticias, categorías
 */

export const eventos = [
    {
        id: 1,
        fecha: '15 de Diciembre',
        hora: '10:00 AM',
        titulo: 'Taller de Química: Reacciones Fascinantes',
        ubicacion: 'Escuela Primaria "Semillitas"',
        descripcion: 'Experimentaremos con reacciones químicas seguras y divertidas.',
        categoria: 'taller',
        capacidad: '25 niños'
    },
    {
        id: 2,
        fecha: '18 de Diciembre',
        hora: '3:00 PM',
        titulo: 'Conferencia: Mujeres en STEM',
        ubicacion: 'Centro Cultural Barrial',
        descripcion: 'Panel de mujeres científicas compartiendo sus experiencias.',
        categoria: 'conferencia',
        capacidad: 'Público abierto'
    },
    {
        id: 3,
        fecha: '22 de Diciembre',
        hora: '9:00 AM',
        titulo: 'Taller de Electrónica: Construye tu LED',
        ubicacion: 'Colegio Técnico "Innovación"',
        descripcion: 'Los niños construirán circuitos simples y encenderán LEDs.',
        categoria: 'taller',
        capacidad: '30 niños'
    },
    {
        id: 4,
        fecha: '28 de Diciembre',
        hora: '11:00 AM',
        titulo: 'Feria Comunitaria de Ciencia',
        ubicacion: 'Parque Central',
        descripcion: 'Gran evento con múltiples talleres, demostraciones y actividades interactivas.',
        categoria: 'evento',
        capacidad: 'Público abierto'
    },
    {
        id: 5,
        fecha: '5 de Enero',
        hora: '2:00 PM',
        titulo: 'Reunión de Voluntarios',
        ubicacion: 'Sede de Puentes de 100cia',
        descripcion: 'Planificación de actividades para el próximo semestre.',
        categoria: 'reunion',
        capacidad: '40 voluntarios'
    },
    {
        id: 6,
        fecha: '12 de Enero',
        hora: '10:30 AM',
        titulo: 'Taller de Biología: Microscopía',
        ubicacion: 'Instituto Estatal de Educación',
        descripcion: 'Observaremos células y microorganismos con microscopios reales.',
        categoria: 'taller',
        capacidad: '20 niños'
    }
];

export const noticias = [
    {
        id: 1,
        titulo: '¡Alcanzamos los 1,200 niños impactados!',
        fecha: '5 de Diciembre, 2024',
        resumen: 'Con el último taller realizado en Guadalajara, hemos alcanzado la cifra histórica de 1,200 niños impactados con nuestras actividades de divulgación científica.',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300"%3E%3Crect fill="%23f0f4ff" width="500" height="300"/%3E%3Ctext x="250" y="150" font-size="80" fill="%236366f1" text-anchor="middle" dominant-baseline="middle"%3E🎉%3C/text%3E%3C/svg%3E',
        autor: 'Angelina Vázquez',
        categoria: 'logros'
    },
    {
        id: 2,
        titulo: 'Nueva alianza con Museo de Ciencias "Explora"',
        fecha: '1 de Diciembre, 2024',
        resumen: 'Nos complace anunciar una nueva colaboración estratégica para expandir nuestros programas de educación científica en la región.',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300"%3E%3Crect fill="%23fef3c7" width="500" height="300"/%3E%3Ctext x="250" y="150" font-size="80" fill="%23d97706" text-anchor="middle" dominant-baseline="middle"%3E🤝%3C/text%3E%3C/svg%3E',
        autor: 'Ana Gómez',
        categoria: 'novedades'
    },
    {
        id: 3,
        titulo: 'Programa de Voluntariado 2025 abierto',
        fecha: '28 de Noviembre, 2024',
        resumen: 'Si te apasiona la educación y la ciencia, ¡únete a nuestro equipo de voluntarios! Contamos con roles para facilitadores, diseñadores de contenido y coordinadores.',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300"%3E%3Crect fill="%23fce7f3" width="500" height="300"/%3E%3Ctext x="250" y="150" font-size="80" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle"%3E🙋%3C/text%3E%3C/svg%3E',
        autor: 'Carlos Pérez',
        categoria: 'novedades'
    },
    {
        id: 4,
        titulo: 'Publicado nuevo kit educativo: "Química en Casa"',
        fecha: '20 de Noviembre, 2024',
        resumen: 'Acabamos de lanzar nuestro nuevo kit de bajo costo para que familias puedan realizar experimentos químicos seguros en el hogar.',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300"%3E%3Crect fill="%23f0fdf4" width="500" height="300"/%3E%3Ctext x="250" y="150" font-size="80" fill="%2310b981" text-anchor="middle" dominant-baseline="middle"%3E🧪%3C/text%3E%3C/svg%3E',
        autor: 'Fernando Palacios',
        categoria: 'recursos'
    }
];

export const categoriesEventos = ['todos', 'taller', 'conferencia', 'evento', 'reunion'];

export const categoriesNoticias = ['todos', 'logros', 'novedades', 'recursos'];
