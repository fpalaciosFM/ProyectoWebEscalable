# 🔭 Puentes de 100cia — Portal de divulgación científica

Proyecto web para apoyar talleres de divulgación científica dirigidos a niños. La web muestra actividades, materiales de apoyo, y facilita la transparencia del programa — incluida una sección para que personas contribuyan como donantes, voluntarios o proponiendo experimentos.

## 🧩 Estado actual y novedades

- Sitio base construido con React + Vite.
- Páginas principales: `Home`, `Experimentos` y `Contribuir` (esta última añade tabs para **Donar**, **Ser Voluntario** y **Proponer Experimentos**).
- Se añadió un componente reutilizable `NavBar` con control de ruta activa y dropdown para `Contribuir`.

Cambios recientes (commit): `16cee47` — `feat(ui): añadir NavBar reutilizable y página Contribuir`.

## 🚀 Stack Tecnológico

- React 19
- Vite
- React Router DOM (HashRouter)
- Tailwind CSS
- ESLint
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

- `src/components/` — componentes reutilizables (p. ej. `NavBar.jsx`)
- `src/pages/` — vistas (Home, Experimentos, Contribuir)
- `src/services/` — abstracción de acceso a datos (actualmente usa JSON mocks)
- `src/data/` — datos de ejemplo / mocks

## 🧭 Sobre la página `Contribuir`

La página `/contribuir` ofrece tres vías para apoyar el proyecto:

- **Donar Fondos:** opciones predefinidas (ej. $10, $50, $200) y explicación de destino de fondos.
- **Ser Voluntario:** roles disponibles (facilitador, asistente digital, creador de contenido, coordinador de alianzas) y formulario de interés.
- **Proponer Experimentos:** permite enviar propuestas con criterios de aceptación (seguridad, accesibilidad, relevancia para 5–12 años).

Actualmente los formularios y botones son estáticos (mock). La arquitectura está preparada para conectar con pasarelas de pago y APIs en el futuro.

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
