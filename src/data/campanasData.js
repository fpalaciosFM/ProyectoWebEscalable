/**
 * Datos mock para sistema de campañas de recaudación de fondos
 * 
 * Estructura LISTA PARA BD con todos los campos necesarios para integración con APIs de pago
 * (PayPal, Stripe, etc) y almacenamiento persistente
 * 
 * Total de campañas: 17
 * - 1 Activa: "Reconstrucción del Muro de Ciencia"
 * - 4 Próximas: Kits de Ciencia, Laboratorio Digital, Mentorías, Biblioteca, Festival
 * - 7 Completadas: Feria 2024, Equipamiento, Robótica, Becas, Museo Móvil, Agricultura, Olimpiada
 * - 5+ Históricas/Demo: para referencia
 * 
 * Estructura de campaña:
 * {
 *   id, slug, titulo, descripcion, descripcionCompleta,
 *   tipo, estado, metaTotal, recaudado, moneda,
 *   fechaInicio, fechaFin, imagen, categoria,
 *   visualizacion: { tipo, totalLadrillos, costoLadrillo },
 *   beneficios: [],
 *   opcionesDonacion: [],
 *   donaciones: [{ id, nombre, cantidad, fecha, mensaje }],
 *   actualizaciones: [{ fecha, titulo, descripcion }]
 * }
 * 
 * Estructura de donación individual (para futuro guardado en BD):
 * {
 *   id, campaña_id, cantidad, nombre, mensaje, fecha, estado
 * }
 */

export const campanas = [
    {
        id: 'donacion-general-permanente',
        slug: 'donacion-general',
        titulo: 'Fondo General de Ciencia',
        descripcion: 'Apoya nuestro trabajo en educación científica sin comprometerte a una campaña específica.',
        descripcionCompleta: 'El Fondo General nos permite mantener nuestras operaciones, desarrollar nuevos materiales educativos, capacitar voluntarios y llegar a más comunidades. Tu donación va directamente a donde más se necesita en cada momento. Recibirás reportes trimestrales sobre cómo se usa tu aporte.',
        tipo: 'general',
        estado: 'activa',
        metaTotal: 999999, // Meta muy alta, permanentemente activa
        recaudado: 45000,
        moneda: 'MXN',
        fechaInicio: '2024-01-01',
        fechaFin: '2099-12-31', // Permanente
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23f0f9ff" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%236366f1" text-anchor="middle" dominant-baseline="middle"%3E🔬%3C/text%3E%3C/svg%3E',
        categoria: 'General',
        
        // Visualización especial para donación general
        visualizacion: {
            tipo: 'barra-simple',
            mostrarMetaFija: false // No mostrar meta como objetivo fijo
        },
        
        tipoRecaudacion: 'continua', // Propiedad para identificar recaudación continua
        
        beneficios: [
            'Financiar talleres mensuales en comunidades',
            'Desarrollo de materiales educativos innovadores',
            'Capacitación continua de voluntarios',
            'Mantenimiento de infraestructura y equipos',
            'Programas de inclusión para niños en situación vulnerable',
            'Investigación en metodologías de enseñanza de ciencias'
        ],
        
        opcionesDonacion: [
            { cantidad: 250, descripcion: 'Materiales para 1 taller', emoji: '📚' },
            { cantidad: 500, descripcion: 'Transporte para 2 comunidades', emoji: '🚌' },
            { cantidad: 1000, descripcion: 'Equipos para 1 mes', emoji: '⚗️' },
            { cantidad: 2500, descripcion: 'Capacitación de 5 voluntarios', emoji: '👥' },
            { cantidad: 5000, descripcion: 'Proyecto especial a tu elección', emoji: '✨' }
        ],
        
        donaciones: [
            { id: 1, nombre: 'Fundación ABC', cantidad: 5000, fecha: '2024-12-05', mensaje: 'Continuamos apoyando la educación' },
            { id: 2, nombre: 'Juan Rodríguez', cantidad: 500, fecha: '2024-12-03', mensaje: '' },
            { id: 3, nombre: 'Empresa Tech SA', cantidad: 10000, fecha: '2024-11-28', mensaje: 'RSE anual' },
            { id: 4, nombre: 'María López', cantidad: 250, fecha: '2024-11-25', mensaje: 'Cada poco ayuda' },
            { id: 5, nombre: 'Anónimo', cantidad: 2500, fecha: '2024-11-20', mensaje: 'Excelente trabajo' }
        ],
        
        actualizaciones: [
            {
                fecha: '2024-12-01',
                titulo: 'Reporte de Q4 2024',
                descripcion: 'Con tus donaciones realizamos 12 talleres en 8 comunidades diferentes, alcanzando a 200+ niños.'
            },
            {
                fecha: '2024-09-15',
                titulo: 'Certificado fiscal disponible',
                descripcion: 'Todos los donadores del trimestre pueden descargar su certificado fiscal aquí.'
            }
        ]
    },
    {
        id: 'muro-ciencia-2024',
        slug: 'muro-ciencia-2024',
        titulo: 'Reconstrucción del Muro de Ciencia',
        descripcion: 'Ayúdanos a reconstruir el muro del foro donde realizamos talleres de ciencia para más de 200 niños mensualmente.',
        descripcionCompleta: 'El muro del foro comunitario donde realizamos nuestros talleres de ciencia presenta daños estructurales que requieren reparación urgente. Este espacio ha sido el hogar de más de 250 talleres y ha impactado a más de 1,200 niños. Tu donación nos ayudará a reconstruir este muro y continuar ofreciendo un espacio seguro para el aprendizamiento.',
        tipo: 'infraestructura',
        estado: 'activa', // 'activa', 'completada', 'proxima'
        metaTotal: 50000, // MXN
        recaudado: 23450,
        moneda: 'MXN',
        fechaInicio: '2024-11-15',
        fechaFin: '2025-01-31',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23f0f4ff" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%236366f1" text-anchor="middle" dominant-baseline="middle"%3E🧱%3C/text%3E%3C/svg%3E',
        categoria: 'Infraestructura',
        
        // Configuración específica para tipo de visualización
        visualizacion: {
            tipo: 'muro-ladrillos',
            totalLadrillos: 100,
            costoLadrillo: 500 // MXN por ladrillo
        },
        
        // Beneficios del proyecto
        beneficios: [
            'Espacio seguro para 200+ niños mensuales',
            'Continuidad de talleres de ciencia',
            'Mejora de infraestructura comunitaria',
            'Espacio para 12+ talleres por mes'
        ],
        
        // Opciones de donación predefinidas
        opcionesDonacion: [
            { cantidad: 250, descripcion: 'Medio ladrillo', emoji: '🧱' },
            { cantidad: 500, descripcion: '1 ladrillo completo', emoji: '🧱🧱' },
            { cantidad: 1000, descripcion: '2 ladrillos', emoji: '🏗️' },
            { cantidad: 2500, descripcion: '5 ladrillos', emoji: '🏛️' },
            { cantidad: 5000, descripcion: '10 ladrillos', emoji: '🏰' }
        ],
        
        // Donaciones recibidas (mock - en producción vendría de API)
        donaciones: [
            { id: 1, nombre: 'María González', cantidad: 500, fecha: '2024-11-20', mensaje: '¡Por la educación!' },
            { id: 2, nombre: 'Anónimo', cantidad: 1000, fecha: '2024-11-22', mensaje: '' },
            { id: 3, nombre: 'Carlos Pérez', cantidad: 2500, fecha: '2024-11-25', mensaje: 'Excelente causa' },
            { id: 4, nombre: 'Ana Martínez', cantidad: 500, fecha: '2024-11-28', mensaje: 'Mis hijos aman sus talleres' },
            { id: 5, nombre: 'Luis Torres', cantidad: 5000, fecha: '2024-12-01', mensaje: 'Apoyo total' },
            { id: 6, nombre: 'Empresa XYZ', cantidad: 10000, fecha: '2024-12-05', mensaje: 'Responsabilidad social' }
        ],
        
        // Actualizaciones del proyecto
        actualizaciones: [
            {
                fecha: '2024-12-01',
                titulo: '¡Llegamos al 40% de la meta!',
                descripcion: 'Gracias a 15 donadores hemos recaudado $23,450. Continuamos adelante.'
            },
            {
                fecha: '2024-11-20',
                titulo: 'Inicio de la campaña',
                descripcion: 'Damos inicio oficial a la campaña de reconstrucción del muro.'
            }
        ]
    },
    {
        id: 'kits-ciencia-2025',
        slug: 'kits-ciencia-2025',
        titulo: 'Kits de Ciencia para Escuelas Rurales',
        descripcion: 'Lleva experimentos científicos a 10 escuelas rurales con kits educativos completos.',
        descripcionCompleta: 'Muchas escuelas en zonas rurales no tienen acceso a materiales para realizar experimentos científicos. Esta campaña busca crear 50 kits completos con materiales seguros y económicos para que maestros puedan realizar experimentos en el aula.',
        tipo: 'educacion',
        estado: 'proxima',
        metaTotal: 35000,
        recaudado: 0,
        moneda: 'MXN',
        fechaInicio: '2025-02-01',
        fechaFin: '2025-04-30',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23f0fdf4" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%2310b981" text-anchor="middle" dominant-baseline="middle"%3E🧪%3C/text%3E%3C/svg%3E',
        categoria: 'Educación',
        visualizacion: {
            tipo: 'barra-progreso',
            meta: 35000
        },
        beneficios: [
            '50 kits completos de ciencia',
            '10 escuelas rurales beneficiadas',
            '500+ niños impactados',
            'Capacitación a 30 maestros'
        ],
        opcionesDonacion: [
            { cantidad: 350, descripcion: 'Materiales para 1 kit', emoji: '📦' },
            { cantidad: 700, descripcion: '2 kits completos', emoji: '📦📦' },
            { cantidad: 1750, descripcion: '5 kits completos', emoji: '🎁' },
            { cantidad: 3500, descripcion: '10 kits completos', emoji: '🏆' }
        ],
        donaciones: [],
        actualizaciones: []
    },
    {
        id: 'feria-ciencia-2024',
        slug: 'feria-ciencia-2024',
        titulo: 'Feria de Ciencia Comunitaria 2024',
        descripcion: 'Organizar la feria de ciencia más grande del año con talleres gratuitos para toda la familia.',
        descripcionCompleta: 'La Feria de Ciencia Comunitaria es nuestro evento anual más esperado. Durante dos días ofrecemos más de 30 talleres gratuitos, demostraciones en vivo y actividades interactivas para niños de todas las edades.',
        tipo: 'evento',
        estado: 'completada',
        metaTotal: 25000,
        recaudado: 28500,
        moneda: 'MXN',
        fechaInicio: '2024-08-01',
        fechaFin: '2024-10-15',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23fef3c7" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%23d97706" text-anchor="middle" dominant-baseline="middle"%3E🎪%3C/text%3E%3C/svg%3E',
        categoria: 'Eventos',
        visualizacion: {
            tipo: 'barra-progreso',
            meta: 25000
        },
        beneficios: [
            'Evento gratuito para 500+ familias',
            '30+ talleres interactivos',
            '2 días completos de actividades',
            'Fortalecimiento comunitario'
        ],
        opcionesDonacion: [],
        donaciones: [
            { id: 1, nombre: 'Fundación ABC', cantidad: 10000, fecha: '2024-09-10', mensaje: 'Apoyo institucional' },
            { id: 2, nombre: 'Comercio Local', cantidad: 5000, fecha: '2024-09-15', mensaje: '' },
            { id: 3, nombre: 'Varios donadores', cantidad: 13500, fecha: '2024-10-01', mensaje: 'Comunidad unida' }
        ],
        actualizaciones: [
            {
                fecha: '2024-10-20',
                titulo: '¡Feria exitosa! Superamos la meta',
                descripcion: 'Con más de 600 asistentes y 114% de la meta alcanzada, la feria fue un éxito total.'
            }
        ]
    },
    // Campañas Próximas (4 adicionales)
    {
        id: 'laboratorio-digital-2025',
        slug: 'laboratorio-digital-2025',
        titulo: 'Laboratorio Digital para Escuelas',
        descripcion: 'Equipar 15 escuelas con computadoras y software educativo para enseñanza STEM.',
        descripcionCompleta: 'Una iniciativa para llevar educación digital de calidad a comunidades rurales. Cada escuela recibirá 10 computadoras, instalación de software educativo libre y capacitación para docentes.',
        tipo: 'educacion',
        estado: 'proxima',
        metaTotal: 120000,
        recaudado: 0,
        moneda: 'MXN',
        fechaInicio: '2025-03-01',
        fechaFin: '2025-06-30',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23dbeafe" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%230284c7" text-anchor="middle" dominant-baseline="middle"%3E💻%3C/text%3E%3C/svg%3E',
        categoria: 'Educación',
        visualizacion: { tipo: 'barra-progreso', meta: 120000 },
        beneficios: ['15 escuelas equipadas', '150 computadoras', '450+ estudiantes beneficiados', 'Acceso a STEM digital'],
        opcionesDonacion: [
            { cantidad: 2000, descripcion: '1 computadora', emoji: '💻' },
            { cantidad: 5000, descripcion: 'Software para 1 escuela', emoji: '📚' },
            { cantidad: 20000, descripcion: 'Equipamiento completo', emoji: '🖥️' }
        ],
        donaciones: [],
        actualizaciones: []
    },
    {
        id: 'programa-mentorias-2025',
        slug: 'programa-mentorias-2025',
        titulo: 'Programa de Mentorías Científicas',
        descripcion: 'Conectar estudiantes de pregrado con investigadores para mentoría y proyectos reales.',
        descripcionCompleta: 'Programa anual de mentorías donde 100 estudiantes de secundaria serán emparejados con investigadores activos para participar en proyectos científicos reales durante 6 meses.',
        tipo: 'educacion',
        estado: 'proxima',
        metaTotal: 45000,
        recaudado: 0,
        moneda: 'MXN',
        fechaInicio: '2025-02-15',
        fechaFin: '2025-05-31',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23e0e7ff" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%234f46e5" text-anchor="middle" dominant-baseline="middle"%3E👨‍🔬%3C/text%3E%3C/svg%3E',
        categoria: 'Educación',
        visualizacion: { tipo: 'barra-progreso', meta: 45000 },
        beneficios: ['100 estudiantes mentorados', '50 investigadores participantes', 'Proyectos científicos reales', 'Experiencia laboral'],
        opcionesDonacion: [
            { cantidad: 1500, descripcion: 'Mentoría para 1 estudiante', emoji: '👥' },
            { cantidad: 5000, descripcion: 'Recursos para 5 estudiantes', emoji: '📖' }
        ],
        donaciones: [],
        actualizaciones: []
    },
    {
        id: 'biblioteca-ciencia-2025',
        slug: 'biblioteca-ciencia-2025',
        titulo: 'Biblioteca de Ciencia Abierta',
        descripcion: 'Crear una biblioteca física y digital con 5000+ libros y recursos científicos gratuitos.',
        descripcionCompleta: 'Una biblioteca comunitaria especializada en ciencia que será accesible para estudiantes, investigadores y público general. Incluirá libros, revistas científicas digitales y laboratorios virtuales.',
        tipo: 'infraestructura',
        estado: 'proxima',
        metaTotal: 80000,
        recaudado: 0,
        moneda: 'MXN',
        fechaInicio: '2025-04-01',
        fechaFin: '2025-07-31',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23f0fdf4" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%2316a34a" text-anchor="middle" dominant-baseline="middle"%3E📚%3C/text%3E%3C/svg%3E',
        categoria: 'Infraestructura',
        visualizacion: { tipo: 'barra-progreso', meta: 80000 },
        beneficios: ['5000+ libros disponibles', 'Acceso digital 24/7', 'Laboratorios virtuales', 'Espacio comunitario libre'],
        opcionesDonacion: [
            { cantidad: 500, descripcion: '1 libro científico', emoji: '📖' },
            { cantidad: 2500, descripcion: '10 libros', emoji: '📚' }
        ],
        donaciones: [],
        actualizaciones: []
    },
    {
        id: 'festival-innovacion-2025',
        slug: 'festival-innovacion-2025',
        titulo: 'Festival de Innovación Científica',
        descripcion: 'Evento anual con concursos de innovación, demostraciones científicas y networking.',
        descripcionCompleta: 'Festival que reúne a innovadores, científicos y emprendedores para mostrar sus proyectos. Incluye competencias de innovación, workshops y oportunidades de financiamiento para startups científicas.',
        tipo: 'evento',
        estado: 'proxima',
        metaTotal: 60000,
        recaudado: 0,
        moneda: 'MXN',
        fechaInicio: '2025-05-01',
        fechaFin: '2025-08-31',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23fae8ff" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%23c2185b" text-anchor="middle" dominant-baseline="middle"%3E🎯%3C/text%3E%3C/svg%3E',
        categoria: 'Eventos',
        visualizacion: { tipo: 'barra-progreso', meta: 60000 },
        beneficios: ['Concursos de innovación', '1000+ asistentes', 'Premios y financiamiento', 'Networking profesional'],
        opcionesDonacion: [
            { cantidad: 5000, descripcion: 'Sponsor de booth', emoji: '🎪' },
            { cantidad: 10000, descripcion: 'Sponsor de premio', emoji: '🏆' }
        ],
        donaciones: [],
        actualizaciones: []
    },
    // Campañas Completadas (7 adicionales)
    {
        id: 'equipos-laboratorio-2023',
        slug: 'equipos-laboratorio-2023',
        titulo: 'Equipamiento de Laboratorio',
        descripcion: 'Dotación de microscopios, reactivos y equipos para laboratorio de biología.',
        descripcionCompleta: 'Campaña exitosa que equipó completamente el laboratorio de biología de la escuela con equipos profesionales de calidad.',
        tipo: 'infraestructura',
        estado: 'completada',
        metaTotal: 35000,
        recaudado: 38500,
        moneda: 'MXN',
        fechaInicio: '2023-06-01',
        fechaFin: '2023-09-30',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23fce7f3" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%23be185d" text-anchor="middle" dominant-baseline="middle"%3E🔬%3C/text%3E%3C/svg%3E',
        categoria: 'Infraestructura',
        visualizacion: { tipo: 'barra-progreso', meta: 35000 },
        beneficios: ['Laboratorio completamente equipado', '50+ microscopios', 'Reactivos para 2 años', 'Banco de datos digital'],
        opcionesDonacion: [],
        donaciones: [
            { id: 1, nombre: 'Universidad Nacional', cantidad: 15000, fecha: '2023-07-10', mensaje: 'Apoyo académico' },
            { id: 2, nombre: 'Empresa Tech', cantidad: 10000, fecha: '2023-08-01', mensaje: 'Responsabilidad social' },
            { id: 3, nombre: 'Donadores individuales', cantidad: 13500, fecha: '2023-09-15', mensaje: '' }
        ],
        actualizaciones: [
            { fecha: '2023-10-01', titulo: 'Laboratorio inaugurado', descripcion: 'Con gran éxito se inauguró el laboratorio con presencia de 300 personas.' }
        ]
    },
    {
        id: 'taller-robotica-2023',
        slug: 'taller-robotica-2023',
        titulo: 'Talleres de Robótica Comunitaria',
        descripcion: 'Programa de 50 talleres de robótica para 500 niños de comunidades vulnerables.',
        descripcionCompleta: 'Campaña que permitió llevar educación en robótica a 500 niños, con kits de construcción y mentores certificados.',
        tipo: 'educacion',
        estado: 'completada',
        metaTotal: 55000,
        recaudado: 62300,
        moneda: 'MXN',
        fechaInicio: '2023-04-01',
        fechaFin: '2023-08-31',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23e0f2fe" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%230369a1" text-anchor="middle" dominant-baseline="middle"%3E🤖%3C/text%3E%3C/svg%3E',
        categoria: 'Educación',
        visualizacion: { tipo: 'barra-progreso', meta: 55000 },
        beneficios: ['500 niños capacitados', '50 talleres realizados', '20 mentores contratados', 'Certificados de participación'],
        opcionesDonacion: [],
        donaciones: [
            { id: 1, nombre: 'ONG Educa', cantidad: 20000, fecha: '2023-05-01', mensaje: 'Educación es derecho' },
            { id: 2, nombre: 'Comunidad local', cantidad: 25000, fecha: '2023-06-15', mensaje: '' },
            { id: 3, nombre: 'Empresa de Tecnología', cantidad: 17300, fecha: '2023-07-20', mensaje: 'Futuro STEM' }
        ],
        actualizaciones: [
            { fecha: '2023-09-01', titulo: 'Expo de proyectos finales', descripcion: '500 niños exhibieron sus proyectos de robótica ante 2000 visitantes.' }
        ]
    },
    {
        id: 'beca-investigadores-2023',
        slug: 'beca-investigadores-2023',
        titulo: 'Becas para Investigadores Jóvenes',
        descripcion: 'Programa de 10 becas anuales para jóvenes investigadores con proyectos innovadores.',
        descripcionCompleta: 'Apoyo económico para 10 investigadores menores de 30 años con proyectos científicos prometedores en áreas de tecnología y sostenibilidad.',
        tipo: 'educacion',
        estado: 'completada',
        metaTotal: 100000,
        recaudado: 105000,
        moneda: 'MXN',
        fechaInicio: '2023-03-01',
        fechaFin: '2023-07-31',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23fef3c7" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%23f59e0b" text-anchor="middle" dominant-baseline="middle"%3E🎓%3C/text%3E%3C/svg%3E',
        categoria: 'Educación',
        visualizacion: { tipo: 'barra-progreso', meta: 100000 },
        beneficios: ['10 becas otorgadas', '10 investigadores apoyados', 'Proyectos en 3 áreas científicas', 'Mentoring de expertos'],
        opcionesDonacion: [],
        donaciones: [
            { id: 1, nombre: 'Fundación Científica', cantidad: 50000, fecha: '2023-04-01', mensaje: 'Talento joven' },
            { id: 2, nombre: 'Gobierno Local', cantidad: 40000, fecha: '2023-05-10', mensaje: '' },
            { id: 3, nombre: 'Donadores privados', cantidad: 15000, fecha: '2023-06-30', mensaje: 'Futuro de la ciencia' }
        ],
        actualizaciones: [
            { fecha: '2023-08-15', titulo: 'Becarios presentan avances', descripcion: '10 becarios presentaron sus avances de investigación en seminario abierto.' }
        ]
    },
    {
        id: 'museos-movil-2024',
        slug: 'museos-movil-2024',
        titulo: 'Museo Móvil de Ciencias',
        descripcion: 'Llevar experiencias científicas interactivas a 30 comunidades rurales mediante unidad móvil.',
        descripcionCompleta: 'Bus equipado con exhibiciones interactivas que visitó 30 localidades rurales, alcanzando a 15000 visitantes de todas las edades.',
        tipo: 'evento',
        estado: 'completada',
        metaTotal: 150000,
        recaudado: 165000,
        moneda: 'MXN',
        fechaInicio: '2024-02-01',
        fechaFin: '2024-07-31',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23dcfce7" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%23059669" text-anchor="middle" dominant-baseline="middle"%3E🚐%3C/text%3E%3C/svg%3E',
        categoria: 'Eventos',
        visualizacion: { tipo: 'barra-progreso', meta: 150000 },
        beneficios: ['30 comunidades visitadas', '15000+ visitantes', '100+ exhibiciones interactivas', 'Comunidades rurales alcanzadas'],
        opcionesDonacion: [],
        donaciones: [
            { id: 1, nombre: 'Fundación Amigos', cantidad: 75000, fecha: '2024-03-01', mensaje: 'Acceso a ciencia' },
            { id: 2, nombre: 'Empresa de Logística', cantidad: 50000, fecha: '2024-04-15', mensaje: '' },
            { id: 3, nombre: 'Varios donadores', cantidad: 40000, fecha: '2024-06-01', mensaje: 'Educación para todos' }
        ],
        actualizaciones: [
            { fecha: '2024-08-01', titulo: 'Tour completado exitosamente', descripcion: 'Museo móvil completó su gira por 30 comunidades con gran acogida.' }
        ]
    },
    {
        id: 'bioproyecto-sostenible-2024',
        slug: 'bioproyecto-sostenible-2024',
        titulo: 'Proyecto de Agricultura Sostenible',
        descripcion: 'Implementación de sistemas de agricultura sostenible en 20 comunidades campesinas.',
        descripcionCompleta: 'Programa de capacitación y asistencia técnica para implementar prácticas agrícolas sostenibles que aumenten producción y protejan el medio ambiente.',
        tipo: 'infraestructura',
        estado: 'completada',
        metaTotal: 95000,
        recaudado: 102000,
        moneda: 'MXN',
        fechaInicio: '2024-01-15',
        fechaFin: '2024-06-30',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23ecfdf5" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%23047857" text-anchor="middle" dominant-baseline="middle"%3E🌱%3C/text%3E%3C/svg%3E',
        categoria: 'Infraestructura',
        visualizacion: { tipo: 'barra-progreso', meta: 95000 },
        beneficios: ['20 comunidades beneficiadas', '500+ familias capacitadas', 'Aumento de producción 40%', 'Impacto ambiental positivo'],
        opcionesDonacion: [],
        donaciones: [
            { id: 1, nombre: 'ONG Ambiental', cantidad: 40000, fecha: '2024-02-10', mensaje: 'Sostenibilidad' },
            { id: 2, nombre: 'Gobierno Federal', cantidad: 50000, fecha: '2024-03-20', mensaje: '' },
            { id: 3, nombre: 'Empresa Agrícola', cantidad: 12000, fecha: '2024-05-01', mensaje: 'Agricultura verde' }
        ],
        actualizaciones: [
            { fecha: '2024-07-15', titulo: 'Primera cosecha sostenible', descripcion: 'Primeras cosechas bajo nuevo modelo muestran aumento del 40% en producción.' }
        ]
    },
    {
        id: 'olimpiada-ciencia-2024',
        slug: 'olimpiada-ciencia-2024',
        titulo: 'Olimpiada Nacional de Ciencias',
        descripcion: 'Organización de olimpiada anual con participación de 1000+ estudiantes.',
        descripcionCompleta: 'Competencia anual de ciencias que reúne a los mejores estudiantes del país en categorías de Física, Química, Biología y Matemáticas.',
        tipo: 'evento',
        estado: 'completada',
        metaTotal: 75000,
        recaudado: 82500,
        moneda: 'MXN',
        fechaInicio: '2024-03-01',
        fechaFin: '2024-09-30',
        imagen: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400"%3E%3Crect fill="%23f3e8ff" width="800" height="400"/%3E%3Ctext x="400" y="200" font-size="80" fill="%237c3aed" text-anchor="middle" dominant-baseline="middle"%3E🏅%3C/text%3E%3C/svg%3E',
        categoria: 'Eventos',
        visualizacion: { tipo: 'barra-progreso', meta: 75000 },
        beneficios: ['1000+ participantes', 'Premios por $50,000', '4 categorías científicas', 'Cobertura nacional'],
        opcionesDonacion: [],
        donaciones: [
            { id: 1, nombre: 'Ministerio de Educación', cantidad: 35000, fecha: '2024-04-01', mensaje: 'Excelencia académica' },
            { id: 2, nombre: 'Empresa de Telecomunicaciones', cantidad: 30000, fecha: '2024-05-15', mensaje: '' },
            { id: 3, nombre: 'Universidades', cantidad: 17500, fecha: '2024-07-10', mensaje: 'Futuro científico' }
        ],
        actualizaciones: [
            { fecha: '2024-10-05', titulo: 'Olimpiada 2024 concluida', descripcion: 'Con record de 1200 participantes, olimpiada fue el mayor evento científico del año.' }
        ]
    }
];

export const categoriasCampanas = [
    'Todas',
    'Infraestructura',
    'Educación',
    'Eventos',
    'Equipamiento'
];

export const estadosCampanas = [
    { id: 'todas', label: 'Todas', color: 'gray' },
    { id: 'activa', label: 'Activas', color: 'green' },
    { id: 'completada', label: 'Completadas', color: 'blue' },
    { id: 'proxima', label: 'Próximas', color: 'purple' }
];

/**
 * FUNCIONES HELPER
 * 
 * Estas funciones utilitarias se usan en componentes para calcular
 * y formatear datos de campaña de forma consistente
 */

/**
 * Calcula el porcentaje de progreso de una campaña
 * @param {number} recaudado - Cantidad recaudada
 * @param {number} metaTotal - Meta de recaudación
 * @returns {number} Porcentaje de 0 a 100
 */
export const calcularProgreso = (recaudado, meta) => {
    return Math.min(Math.round((recaudado / meta) * 100), 100);
};

/**
 * Función helper para calcular días restantes
 */
export const calcularDiasRestantes = (fechaFin) => {
    const hoy = new Date();
    const fin = new Date(fechaFin);
    const diffTime = fin - hoy;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
};

/**
 * Función helper para formatear moneda
 */
export const formatearMoneda = (cantidad, moneda = 'MXN') => {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: moneda
    }).format(cantidad);
};
