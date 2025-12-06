# 🔭 Portal de ciencia - Proyecto de Divulgación

Este proyecto es una aplicación web SPA (Single Page Application) diseñada para la divulgación científica. Actualmente funciona como un prototipo estático de alto rendimiento, pero cuenta con una arquitectura escalable preparada para migrar a un backend en tiempo real (Firebase/Supabase) sin necesidad de reescribir el frontend.

## 🚀 Stack Tecnológico

* **Core:** React + Vite
* **Lenguaje:** JavaScript (ES6+)
* **Enrutamiento:** React Router DOM (HashRouter)
* **Despliegue:** GitHub Pages (automatizado con `gh-pages`)
* **Estilos:** CSS estándar (listo para migrar a Tailwind CSS)

## 🛠️ Requisitos Previos

Para ejecutar este proyecto localmente necesitas tener instalado:

* **Node.js** (Versión LTS recomendada): [Descargar aquí](https://nodejs.org/)
* **Git**: [Descargar aquí](https://git-scm.com/)

## 📥 Instalación y Configuración

Sigue estos pasos para clonar el repositorio y levantar el entorno de desarrollo:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/fpalaciosFM/ProyectoWebEscalable.git
    ```

2.  **Entrar a la carpeta del proyecto:**
    ```bash
    cd ProyectoWebEscalable
    ```

3.  **Instalar dependencias:**
    Este paso es crucial para descargar las librerías necesarias (React, Vite, etc.).
    ```bash
    npm install
    ```

## 💻 Ejecución Local (Modo Desarrollo)

Para iniciar el servidor local con recarga en caliente (HMR):

```bash
npm run dev
```

Una vez ejecutado, la aplicación estará disponible generalmente en: `http://localhost:5173/`

## 📂 Arquitectura Escalable

El proyecto sigue una arquitectura de **"Service Layer"** para facilitar la futura integración de Backend:

* `src/services/`: **Capa de Abstracción.** Aquí reside la lógica de conexión a datos.
    * *Estado actual:* Lee de un archivo JSON local (`mockUsers.json`) simulando latencia de red.
    * *Futuro:* Se reemplazará por llamadas a API.
* `src/pages/`: Vistas principales de la aplicación.
* `src/components/`: Piezas reutilizables de la interfaz.
* `src/data/`: Datos simulados (Mock Data) para desarrollo offline.

## 🌍 Despliegue (Deploy)

El proyecto está configurado para desplegarse automáticamente en **GitHub Pages**.

1.  Asegúrate de que tus cambios están guardados en la rama `main`.
2.  Ejecuta el script de despliegue en tu terminal:
    ```bash
    npm run deploy
    ```
3.  Este comando compilará el proyecto en la carpeta `dist` y lo subirá a la rama `gh-pages`.

> **⚠️ Nota sobre Permisos:** Si el despliegue falla en GitHub Actions, ve a *Settings > Code and automation > Actions > General* en tu repositorio, y en "Workflow permissions" selecciona **"Read and write permissions"**.

## 🤝 Roadmap del Proyecto

* [x] Estructura base SPA (Vite + React)
* [x] Navegación (React Router)
* [ ] Integración de Tailwind CSS
* [ ] Backend en tiempo real (Firebase)
* [ ] Pasarela de pago

---
Para la divulgación de la ciencia.