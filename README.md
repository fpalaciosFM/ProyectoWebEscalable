# 🔭 Puentes de 100cia — Portal de divulgación científica

Proyecto web para apoyar talleres de divulgación científica dirigidos a niños. La web muestra actividades, materiales de apoyo, y facilita la transparencia del programa — incluida una sección para que personas contribuyan como donantes, voluntarios o proponiendo experimentos.

## 🧩 Estado actual y novedades

- Sitio base construido con React + Vite.
- Páginas principales: `Home`, `Experimentos`, `Actividades` (Galería, Eventos-Noticias), `Apóyanos` (Campañas, Donativos, Voluntariado, Propuestas) y `Nosotros`.
  - **Apóyanos:** reorganizado con cuatro opciones: Campañas Activas, Donación General, Voluntariado, Proponer Ideas.
  - **Campañas:** sistema completo de recaudación de fondos con muro interactivo de ladrillos, donaciones simuladas y rastreo de contribuciones.
  - **Nosotros:** misión, visión, qué hacemos, impacto/números clave, equipo, aliados, testimonios, cronograma y contacto con carrusel de momentos.
  - **Galería:** galería de fotos filtrable por categoría con visor modal.
  - **Eventos-Noticias:** calendario interactivo, próximos eventos, últimas noticias, newsletter.
- **Componentes reutilizables (21 totales):**
  - Estructura: `NavBar` (responsive), `Footer`, `Hero`, `ExplorationCard`, `FAQCard`
  - Tarjetas: `TeamCard`, `StatsCounter`, `EventCard`, `NoticiaCard`, `CampanaCard`
  - Media: `Carrusel`, `SocialIcon`, `Calendario`
  - Antiguos: `Experimentos` (página)
- **Hooks personalizados:** `useScrollTop` para scroll automático al navegar.
- **Datos separados (7 archivos):** `homeData.js`, `contribuirData.js`, `nosotrosData.js`, `eventosNoticiasData.js`, `galeriaData.js`, `campanasData.js`, `mockExperimentos.json`
  - Arquitectura preparada para conectar a APIs sin refactorizar componentes
  - Sistema de campañas con 17 campañas de demostración (1 activa, 4 próximas, 7 completadas, 5+ históricas)
  - Fácil mantenimiento y escalabilidad
- **UX mejorada:** scroll automático al tope al navegar entre páginas, barra de progreso dinámica.
- **Sistema de diseño semántico:**
  - Paleta de colores Tailwind estándar (indigo, purple, emerald, gray, etc.)
  - Clases reutilizables: `.btn-main`, `.card-base`, `.badge-base`, `.badge-info`, `.badge-neutral`
  - Degradados personalizados por página (hero sections con identidad visual única)
  - Barra de progreso con colores dinámicos según avance (cyan → blue → indigo → emerald)

## 🚀 Stack Tecnológico

- React 19
- Vite
- React Router DOM (HashRouter)
- Tailwind CSS v4
- ESLint
- react-icons
- GitHub Pages (gh-pages)

## 🛠️ Requisitos Previos

- Node.js (LTS recomendado)
- Git

## 📥 Instalación Rápida

```powershell
git clone https://github.com/fpalaciosFM/ProyectoWebEscalable.git
cd ProyectoWebEscalable
npm install
```

## 💻 Comandos útiles

- `npm run dev` — servidor de desarrollo (HMR)
- `npm run build` — construir para producción
- `npm run preview` — previsualizar build local
- `npm run lint` — ejecutar ESLint
- `npm run deploy` — compilar y desplegar a GitHub Pages

## 📁 Estructura principal

- `src/components/` — componentes reutilizables (18 totales):
  - **Layout:** `NavBar.jsx` (navegación responsiva), `Footer.jsx` (pie reutilizable), `Hero.jsx` (sección hero flexible)
  - **Cards:** `TeamCard.jsx`, `StatsCounter.jsx`, `EventCard.jsx`, `NoticiaCard.jsx`, `FAQCard.jsx` (accordion), `ExplorationCard.jsx` (exploración)
  - **Media:** `Carrusel.jsx` (carrusel animado), `SocialIcon.jsx` (botón red social), `Calendario.jsx` (calendario interactivo)
- `src/pages/` — vistas principales (8 páginas):
  - `Home.jsx` - landing page rediseñada
  - `Nosotros.jsx` - página sobre nosotros
  - `Contribuir.jsx` - formas de colaborar
  - `EventosNoticias.jsx` - eventos y noticias
  - `Galeria.jsx` - galería de fotos
  - `Experimentos.jsx` - lista de experimentos
  - `Campanas.jsx` - listado de campañas con filtros y búsqueda
  - `CampanaDetalle.jsx` - detalle de campaña con muro de ladrillos y donaciones
- `src/data/` — datos mock centralizados (7 archivos):
  - `homeData.js` - exploración, contribución, impacto
  - `contribuirData.js` - opciones donación, roles, tipos propuesta, FAQ
  - `nosotrosData.js` - equipo, carrusel, impacto, testimonios, timeline
  - `eventosNoticiasData.js` - eventos, noticias, categorías
  - `galeriaData.js` - fotos, categorías
  - `campanasData.js` - 17 campañas con estructura lista para BD
- `src/hooks/` — hooks personalizados:
  - `useScrollTop.js` - scroll automático al navegar
- `src/services/` — abstracción de acceso a datos (preparado para APIs)
- `src/index.css` — sistema de diseño centralizado

## 🧭 Páginas principales

### Contribuir (`/contribuir`)
Ofrece tres vías para apoyar el proyecto:
- **Donar Fondos:** opciones predefinidas y desglose de destino de fondos.
- **Ser Voluntario:** roles disponibles y formulario de interés.
- **Proponer Experimentos:** envío de propuestas con criterios de aceptación.

### Nosotros (`/nosotros`)
Página informativa con diseño ilustrado que incluye:
- **Misión y Visión:** propósito del proyecto y metas a 5 años.
- **Qué hacemos:** talleres, recursos abiertos, formación docente, eventos, kits.
- **Impacto / Números clave:** métricas visuales (niños impactados, talleres, escuelas, voluntarios).
- **Carrusel de momentos:** galería animada de fotos con auto-avance y controles interactivos.
- **Equipo:** tarjetas con avatares SVG, nombre, rol y bio.
- **Aliados:** categorías (escuelas, centros culturales, ONG) con cards descriptivas.
- **Testimonios:** citas de beneficiarios (padres, docentes, voluntarios).
- **Cronograma:** línea de tiempo con hitos desde 2019 hasta próximos pasos.
- **Contacto:** email, teléfono, ubicación, formulario y redes sociales.

### Campañas (`/campanas` y `/campanas/:slug`)

**Sistema completo de recaudación de fondos con dos páginas:**

#### Listado de Campañas (`/campanas`)
- **Búsqueda:** campo de búsqueda en tiempo real por nombre o descripción.
- **Filtros:** por estado (todas/activas/completadas/próximas) y categoría (Infraestructura, Educación, Eventos, Equipamiento).
- **Sección de impacto:** 3 métricas visuales (campañas totales, activas, recaudado total).
- **Grillas por estado:** cada estado agrupado en su propia sección.
- **Tarjetas de campaña (`CampanaCard`):** muestra progreso visual con barra dinámica, meta, recaudado, badges de estado/categoría.
- **17 campañas de demostración:** 1 activa, 4 próximas, 7 completadas, 5+ históricas/demo.

#### Detalle de Campaña (`/campanas/:slug`)
- **Hero personalizado:** con gradiente, breadcrumb y badges de estado/categoría.
- **Muro de Ladrillos (interactivo):** visualización especial para campañas de infraestructura.
  - Grid 10x10 de ladrillos (100 total).
  - Ladrillos colocados en naranja/gradiente, pendientes en gris.
  - **Tooltips al pasar cursor:** muestra nombre y mensaje del donador.
  - Actualización en tiempo real al simular donaciones.
- **Contenido principal (columna izquierda):**
  - Historia y descripción completa de la campaña.
  - Beneficios con checkmarks en grid.
  - Donaciones recientes (últimas 5).
  - Actualizaciones (timeline) con fechas formateadas.
- **Panel de donación (columna derecha, sticky):**
  - Cantidad recaudada / meta con número grande.
  - Barra de progreso dinámica (colores según avance: cyan → blue → indigo → emerald).
  - Estadísticas: # donadores, días restantes.
  - Botón "Donar Ahora" que abre modal.
  - Opciones de donación sugeridas (dinámicas según campaña).
  - Botones para compartir en redes (Facebook, Twitter, WhatsApp).
- **Modal de Donación:**
  - Selección de cantidad (presets o personalizado).
  - Campos opcionales: nombre donador, mensaje de apoyo.
  - Nota explicativa sobre integración futura con PayPal/Stripe.
  - Confirmación visual de éxito con animación.
- **Sistema de datos listo para BD:**
  - Donaciones almacenadas con estructura: `id`, `campaña_id`, `cantidad`, `nombre`, `mensaje`, `fecha`, `estado`
  - IDs únicos con timestamp para trazabilidad.
  - Fácil integración con APIs de pago cuando se requiera.

### Galería (`/galeria`)
Galería de fotos con:
- Filtros por categoría (Talleres, Eventos, Voluntarios).
- Grid responsive de imágenes.
- Visor modal para ver fotos ampliadas.
- Información detallada de cada foto.

### Eventos y Noticias (`/eventos-noticias`)
Centraliza información de actividades y novedades:
- **Próximos eventos:** con fecha, hora, ubicación y opción de registro.
- **Últimas noticias:** artículos sobre logros, novedades y recursos.
- **Calendario interactivo:** navegación por meses, resalta días con eventos.
- **Newsletter:** widget para suscripción.
- Filtros por categoría para ambas secciones.

Actualmente los formularios y botones son estáticos (mock). La arquitectura está preparada para conectar con pasarelas de pago y APIs en el futuro.

**Refactorización reciente (Sesión actual):**
- ✅ Creación de 5 archivos de datos centralizados
- ✅ Creación de 4 componentes nuevos reutilizables (Footer, Hero, ExplorationCard, FAQCard)
- ✅ Hook `useScrollTop` reutilizable en todas las páginas
- ✅ Integración de datos en todas las páginas (Home, Nosotros, Contribuir, EventosNoticias, Galeria)
- ✅ Eliminación de 500+ líneas de código duplicado
- ✅ Patrón consistente: componentes → datos centralizados → fácil de mantener y escalar

## 🎨 Sistema de Diseño (Design System)

### Paleta de Colores Semántica
Definida en `src/index.css` con variables CSS para asegurar consistencia:

- **Colores Base (Ciencia):** 6 colores inspirados en disciplinas científicas:
  - Rosa, Morado, Azul, Verde, Amarillo, Naranja

- **Colores Semánticos:** mapeados a funciones UX:
  - `--color-primary` (Azul): navegación, enlaces activos, información primaria
  - `--color-success` (Verde): acciones positivas, donaciones, éxito
  - `--color-accent` (Rosa): CTAs secundarias, destacados
  - `--color-warning` (Naranja): alertas, atención requerida
  - `--color-secondary` (Morado): información secundaria, eventos

- **Variantes:** cada color incluye tonos oscuros (`-dark`) y claros (`-light`) para mejor legibilidad.

### Clases CSS Reutilizables
Sistema de clases predefinidas en `src/index.css`:
- **Botones:** `.btn-main`, `.btn-primary`, `.btn-success`, `.btn-accent`, `.btn-warning`
- **Tarjetas:** `.card-primary`, `.card-success`, `.card-accent`, `.card-warning`
- **Badges:** `.badge-primary`, `.badge-success`, `.badge-accent`, `.badge-warning`, `.badge-secondary`
- **Enlaces:** `.link-primary`, `.link-accent`
- **Textos:** `.text-primary`, `.text-success`, `.text-accent`, `.text-warning`, `.text-secondary`, `.text-muted`
- **Degradados de Hero:** `.bg-hero-rainbow`, `.bg-hero-nosotros`, `.bg-hero-contribuir`, `.bg-hero-eventos`, `.bg-hero-galeria`

### Convención de Colores
Todos los botones principales y CTAs usan la clase `.btn-main` para asegurar:
- Consistencia visual en toda la aplicación
- Facilidad de mantenimiento y cambios futuros
- Experiencia de usuario coherente

## 📱 NavBar responsive (móvil)

- En pantallas pequeñas el `NavBar` muestra un botón hamburguesa que abre un panel con los enlaces principales.
- Incluye dropdown "Explorar" que agrupa: Experimentos, Galería, Eventos y Noticias.
- La sección **Contribuir** incluye sub-enlaces que utilizan el query param `tab` para identificar la subsección activa. Ejemplos:
	- `#/contribuir?tab=donar` — Donar Fondos (resaltado cuando `tab=donar`)
	- `#/contribuir?tab=voluntario` — Ser Voluntario (resaltado cuando `tab=voluntario`)
	- `#/contribuir?tab=proponer` — Proponer Experimentos (resaltado cuando `tab=proponer`)

- QA rápida: abrir DevTools en modo móvil → abrir menú hamburguesa → comprobar que al pulsar el sub-enlace correspondiente se navega a la sección y el panel se cierra automáticamente.


## ✅ Transparencia y confianza

Se añadieron elementos para generar confianza en donantes: sección de desglose de gastos en la página `Contribuir`, FAQ y llamadas a la transparencia. Se recomienda agregar reportes descargables (PDF) y un panel de auditoría cuando se integren donaciones reales.

## 🤝 Cómo contribuir al código

- Crea una rama a partir de `main` para cambios significativos: `git checkout -b feat/nombre-de-la-feature`
- Haz commits claros y atómicos. Usa mensajes semánticos: `feat`, `fix`, `chore`, `docs`.
- Abre un Pull Request describiendo el cambio y su propósito.

## 📦 Despliegue

Usamos `gh-pages` para desplegar el `dist` en GitHub Pages. El `base` en `vite.config.js` ya está configurado para `/ProyectoWebEscalable/`.

Para desplegar:
```powershell
npm run build
npm run deploy
```
