# Tasks

## 1. Metadatos SEO, Open Graph y Twitter Cards en `<head>`

- [x] 1.1 Actualizar `src/layouts/Layout.astro` y `src/pages/index.astro` con el nuevo `<title>` (`✨ ¡Tienes una Invitación Real! | Cumpleaños #4 de Sofía 🎂👑`), `meta description`, `meta theme-color` (`#E6C0CF`) y favicon SVG en línea (`data:image/svg+xml` con emoji `🎂`), verificando que Google Fonts, estilos CSS y el script de Tone.js permanezcan intactos.
- [x] 1.2 Agregar en `src/layouts/Layout.astro` todas las propiedades Open Graph (`og:type`, `og:locale`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`, `og:image:secure_url`, `og:image:type`, `og:image:width`, `og:image:height`, `og:image:alt`) y las etiquetas Twitter/X Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:image:alt`) junto con los comentarios HTML explicativos sobre la URL de producción (`https://tu-dominio.com/`) y los requisitos de `og-preview.jpg` (`1200x630 px`, `< 300 KB`).

## 2. Consistencia de la Edad #4 y Verificación Final

- [x] 2.1 Revisar y actualizar cualquier referencia o comentario residual en `src/components/BirthdayCake.astro` para que la puerta del pastel SVG y toda la página reflejen de forma 100% consistente el número **4**.
- [x] 2.2 Ejecutar `npm run build` y verificar que `dist/index.html` se genera sin errores con todas las etiquetas `<meta>`, `<title>`, favicon en línea y comentarios de guía en el `<head>`.
