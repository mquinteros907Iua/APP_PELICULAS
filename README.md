# App de Películas — React + Vite

¡Bienvenido! Esta es una aplicación de búsqueda de películas interactiva y responsiva creada con React y Vite.

**Hecho por Marcos** — una pequeña app para buscar y explorar información sobre películas usando la API de TMDB.

## Características principales

- 🔍 Búsqueda de películas por nombre
- 🎬 Información detallada: título, año, calificación y sinopsis
- 🖼️ Pósters de alta calidad de cada película
- 📱 Diseño completamente responsive y adaptable
- ⚡ Interfaz rápida y moderna con animaciones suaves
- 🌙 Soporte para modo claro y oscuro

## Tecnologías

- **React** (con Vite)
- **HTML, CSS**
- **API de TMDB** (The Movie Database)
- **JavaScript ES6+**

## Cómo ejecutar

### Instala dependencias
```bash
npm install
```

### Ejecuta en modo desarrollo (Vite)
```bash
npm run dev
```

### Para producción
```bash
npm run build
npm run preview
```

## Configuración de la API

Esta aplicación utiliza la API de **The Movie Database (TMDB)** para obtener información de películas.

La API key ya está integrada en el código. Si deseas usar tu propia clave:

1. Regístrate en [TMDB](https://www.themoviedb.org/)
2. Obtén tu API key
3. Reemplázala en `src/MovieApp.jsx`:
```javascript
const API_KEY = 'tu_api_key_aqui'
```

## Estructura del proyecto

```
APP_DE_PELICULAS/
├── src/
│   ├── MovieApp.jsx      # Componente principal
│   ├── MovieApp.css      # Estilos de la aplicación
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── index.html            # HTML base
├── package.json
└── vite.config.js
```

## Notas

- **Diseño responsive**: La aplicación se adapta perfectamente a móviles, tablets y escritorio
- **Grid dinámico**: Las tarjetas de películas se organizan automáticamente según el tamaño de pantalla
- **Estilos personalizados** en `src/MovieApp.css`
- **Búsquedas en español**: La API está configurada para devolver resultados en español (es-ES)

---

**Desarrollado por Marcos** | Proyecto educativo - Digital House
