# 🔭 Puentes de 100cia — Portal de divulgación científica

Proyecto web para apoyar talleres de divulgación científica dirigidos a niños. La web muestra actividades, materiales de apoyo, y facilita la transparencia del programa — incluida una sección para que personas contribuyan como donantes, voluntarios o proponiendo experimentos.

## 🧩 Estado actual y novedades

- Sitio base construido con React + Vite.
- Páginas principales: `Home`, `Experimentos`, `Contribuir` y `Nosotros`.
  - **Contribuir:** tabs para Donar, Ser Voluntario y Proponer Experimentos.
  - **Nosotros:** misión, visión, qué hacemos, impacto/números clave, equipo, aliados, testimonios, cronograma y contacto.
- Componentes reutilizables: `NavBar` (responsive con hamburger), `TeamCard`, `StatsCounter`, `SocialIcon`.
- Integración de `react-icons` para iconos de redes sociales optimizados y centrados.

## 🚀 Stack Tecnológico

- React 19
- Vite
- React Router DOM (HashRouter)
- Tailwind CSS v4
- ESLint
- react-icons (iconos optimizados para redes sociales)
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

- `src/components/` — componentes reutilizables (`NavBar.jsx`, `TeamCard.jsx`, `StatsCounter.jsx`, `SocialIcon.jsx`)
- `src/pages/` — vistas (Home, Experimentos, Contribuir, Nosotros)
- `src/services/` — abstracción de acceso a datos (actualmente usa JSON mocks)
- `src/data/` — datos de ejemplo / mocks

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
- **Equipo:** tarjetas con avatares SVG, nombre, rol y bio.
- **Aliados:** categorías (escuelas, centros culturales, ONG) con cards descriptivas.
- **Testimonios:** citas de beneficiarios (padres, docentes, voluntarios).
- **Cronograma:** línea de tiempo con hitos desde 2019 hasta próximos pasos.
- **Contacto:** email, teléfono, ubicación, formulario de contacto y botones de redes sociales.

Actualmente los formularios y botones son estáticos (mock). La arquitectura está preparada para conectar con pasarelas de pago y APIs en el futuro.

## 📱 NavBar responsive (móvil)

- En pantallas pequeñas el `NavBar` muestra un botón hamburguesa que abre un panel con los enlaces principales.
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
