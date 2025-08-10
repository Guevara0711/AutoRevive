# AutoRevive

> Proyecto base React + Tailwind CSS, preparado para desarrollo local solo con Docker y despliegue en Netlify (npm). No necesitas instalar nada en tu PC salvo Docker.

---

## 🚀 Desarrollo local (solo Docker)

1. Instala [Docker Desktop](https://www.docker.com/products/docker-desktop/) si no lo tienes.
2. Abre una terminal en la raíz del proyecto y ejecuta:
   ```sh
   docker-compose up --build
   ```
3. Accede a [http://localhost:3000](http://localhost:3000) para ver la web en desarrollo.
4. Los cambios en el código fuente se reflejan automáticamente (hot reload).
5. Para detener el entorno, presiona `Ctrl+C` en la terminal y luego:
   ```sh
   docker-compose down
   ```

> **No uses `npm install` ni ningún comando npm fuera de Docker. Todo corre dentro del contenedor.**

---

## 🌐 Despliegue en Netlify

1. Sube el código a tu repositorio (GitHub, GitLab, etc).
2. Conecta el repo a Netlify.
3. Netlify detectará automáticamente:
   - **Comando de build:** `npm run build`
   - **Directorio de publicación:** `dist`
4. Netlify instalará dependencias y construirá la web usando npm (no Docker).

---

## 📁 Estructura del proyecto

- `/src` — Código fuente React
- `/public` — Archivos estáticos
- `Dockerfile` y `docker-compose.yml` — Configuración para desarrollo local
- `netlify.toml` — Configuración para Netlify

---

## 🛠️ Notas técnicas

- Tailwind CSS está preconfigurado.
- El entorno de desarrollo (Docker) y producción (Netlify/npm) están completamente separados.
- Puedes agregar más dependencias editando `package.json` y reiniciando Docker.

---

Reemplaza este README cuando tu proyecto esté listo.
