/**
 * Datos mock para página Experimentos
 * Incluye: experimentos con información detallada, categorías, dificultades
 */

export const experimentos = [
    {
        id: 1,
        titulo: 'El Volcán de Bicarbonato',
        descripcion: '¡Crea una erupción segura usando ingredientes de tu cocina! Aprende sobre reacciones químicas de forma divertida.',
        categoria: 'Química',
        dificultad: 'Fácil',
        tiempo: '15 min',
        edadRecomendada: '5-8 años',
        materiales: ['Bicarbonato de sodio', 'Vinagre', 'Colorante alimentario', 'Botella de plástico', 'Bandeja'],
        pasos: [
            'Coloca la botella en el centro de la bandeja',
            'Agrega 2 cucharadas de bicarbonato en la botella',
            'Añade unas gotas de colorante',
            'Vierte el vinagre y observa la reacción'
        ],
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f4ff" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="80" fill="%236366f1" text-anchor="middle" dominant-baseline="middle"%3E🌋%3C/text%3E%3C/svg%3E'
    },
    {
        id: 2,
        titulo: '¿Por qué flotan los barcos?',
        descripcion: 'Entiende el principio de Arquímedes construyendo barcos con papel aluminio.',
        categoria: 'Física',
        dificultad: 'Fácil',
        tiempo: '20 min',
        edadRecomendada: '6-10 años',
        materiales: ['Papel aluminio', 'Recipiente con agua', 'Monedas o canicas', 'Tijeras'],
        pasos: [
            'Corta cuadrados de papel aluminio de 15x15 cm',
            'Forma un barco doblando los bordes hacia arriba',
            'Coloca el barco en el agua',
            'Agrega monedas de una en una hasta que se hunda'
        ],
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdf4" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="80" fill="%2310b981" text-anchor="middle" dominant-baseline="middle"%3E⛵%3C/text%3E%3C/svg%3E'
    },
    {
        id: 3,
        titulo: 'Circuito Eléctrico Simple',
        descripcion: 'Construye tu primer circuito y enciende un LED. Introducción a la electrónica básica.',
        categoria: 'Física',
        dificultad: 'Intermedio',
        tiempo: '30 min',
        edadRecomendada: '8-12 años',
        materiales: ['Pila de 9V', 'LED', 'Resistencia de 330Ω', 'Cables', 'Cinta aislante'],
        pasos: [
            'Conecta el polo positivo de la pila al ánodo del LED (pata larga)',
            'Conecta una resistencia al cátodo del LED (pata corta)',
            'Conecta el otro extremo de la resistencia al polo negativo',
            'Observa cómo se enciende el LED'
        ],
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="80" fill="%23d97706" text-anchor="middle" dominant-baseline="middle"%3E💡%3C/text%3E%3C/svg%3E'
    },
    {
        id: 4,
        titulo: 'El Arcoíris en un Vaso',
        descripcion: 'Crea capas de colores usando densidad de líquidos. Experimento visual impresionante.',
        categoria: 'Química',
        dificultad: 'Intermedio',
        tiempo: '25 min',
        edadRecomendada: '7-11 años',
        materiales: ['Agua', 'Azúcar', 'Colorantes', 'Vaso transparente', 'Cucharas'],
        pasos: [
            'Prepara 5 vasos con agua, cada uno con diferente cantidad de azúcar',
            'Añade un color diferente a cada vaso',
            'Vierte cuidadosamente cada líquido en el vaso principal',
            'Observa cómo se forman las capas de colores'
        ],
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fce7f3" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="80" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle"%3E🌈%3C/text%3E%3C/svg%3E'
    },
    {
        id: 5,
        titulo: 'Microscopio Casero',
        descripcion: 'Construye tu propio microscopio usando materiales reciclados y observa el mundo microscópico.',
        categoria: 'Biología',
        dificultad: 'Avanzado',
        tiempo: '45 min',
        edadRecomendada: '10-14 años',
        materiales: ['Puntero láser', 'Botella de plástico', 'Lente de lupa', 'Pegamento', 'Tijeras', 'Smartphone'],
        pasos: [
            'Corta la parte superior de la botella',
            'Fija la lente de lupa en el extremo',
            'Crea un soporte para el smartphone',
            'Coloca muestras de agua, hojas o insectos y observa'
        ],
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f4ff" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="80" fill="%236366f1" text-anchor="middle" dominant-baseline="middle"%3E🔬%3C/text%3E%3C/svg%3E'
    },
    {
        id: 6,
        titulo: 'Jardín de Cristales',
        descripcion: 'Cultiva cristales de sal y azúcar. Aprende sobre cristalización y estructuras moleculares.',
        categoria: 'Química',
        dificultad: 'Intermedio',
        tiempo: '3-5 días',
        edadRecomendada: '8-12 años',
        materiales: ['Sal o azúcar', 'Agua caliente', 'Hilo', 'Lápiz', 'Vaso', 'Colorante (opcional)'],
        pasos: [
            'Hierve agua y disuelve la máxima cantidad de sal/azúcar',
            'Vierte en el vaso y añade colorante',
            'Ata un hilo al lápiz y sumérgelo en la solución',
            'Espera varios días y observa el crecimiento de cristales'
        ],
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdf4" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="80" fill="%2310b981" text-anchor="middle" dominant-baseline="middle"%3E💎%3C/text%3E%3C/svg%3E'
    },
    {
        id: 7,
        titulo: 'Cohete de Vinagre',
        descripcion: 'Construye un cohete propulsado por reacción química. Aprende sobre presión y propulsión.',
        categoria: 'Física',
        dificultad: 'Avanzado',
        tiempo: '40 min',
        edadRecomendada: '10-14 años',
        materiales: ['Botella de plástico', 'Vinagre', 'Bicarbonato', 'Corcho', 'Cartón', 'Cinta adhesiva'],
        pasos: [
            'Construye aletas de cartón y pégalas a la botella',
            'Llena 1/4 de la botella con vinagre',
            'Envuelve bicarbonato en papel y colócalo en el corcho',
            'Inserta rápidamente el corcho, voltea la botella y retrocede'
        ],
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fef3c7" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="80" fill="%23d97706" text-anchor="middle" dominant-baseline="middle"%3E🚀%3C/text%3E%3C/svg%3E'
    },
    {
        id: 8,
        titulo: 'Reloj de Sol',
        descripcion: 'Construye un reloj solar y aprende sobre astronomía, la rotación terrestre y cómo medir el tiempo.',
        categoria: 'Astronomía',
        dificultad: 'Fácil',
        tiempo: '30 min',
        edadRecomendada: '7-11 años',
        materiales: ['Cartón', 'Palo o lápiz', 'Brújula', 'Regla', 'Marcador'],
        pasos: [
            'Dibuja un círculo grande en el cartón',
            'Marca las 12 horas como en un reloj',
            'Clava el palo en el centro verticalmente',
            'Orienta el reloj con la brújula y observa la sombra'
        ],
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23fce7f3" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="80" fill="%23ec4899" text-anchor="middle" dominant-baseline="middle"%3E☀️%3C/text%3E%3C/svg%3E'
    },
    {
        id: 9,
        titulo: 'Extracción de ADN de Frutas',
        descripcion: 'Extrae ADN real de fresas o plátanos. Experimenta con biología molecular básica.',
        categoria: 'Biología',
        dificultad: 'Intermedio',
        tiempo: '35 min',
        edadRecomendada: '10-14 años',
        materiales: ['Fresas o plátano', 'Detergente líquido', 'Sal', 'Agua', 'Alcohol frío', 'Filtro de café', 'Vasos'],
        pasos: [
            'Machaca la fruta en una bolsa con agua y sal',
            'Agrega detergente y mezcla suavemente',
            'Filtra el líquido con el filtro de café',
            'Vierte alcohol frío lentamente y observa el ADN flotando'
        ],
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0f4ff" width="400" height="300"/%3E%3Ctext x="200" y="150" font-size="80" fill="%236366f1" text-anchor="middle" dominant-baseline="middle"%3E🧬%3C/text%3E%3C/svg%3E'
    }
];

export const categorias = ['Todas', 'Química', 'Física', 'Biología', 'Astronomía'];

export const dificultades = ['Todas', 'Fácil', 'Intermedio', 'Avanzado'];

export const edades = ['Todas', '5-8 años', '6-10 años', '7-11 años', '8-12 años', '10-14 años'];
