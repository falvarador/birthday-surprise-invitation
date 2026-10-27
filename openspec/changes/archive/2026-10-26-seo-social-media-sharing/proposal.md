# Proposal

## Why

Al compartir el enlace de la invitación del cumpleaños #4 de Sofía por WhatsApp, Facebook, Instagram, iMessage, Telegram o Twitter/X, el documento HTML carece de metadatos descriptivos (`description`, `theme-color`), favicon en línea con emoji y etiquetas Open Graph / Twitter Cards, por lo que las plataformas de mensajería no muestran una tarjeta de previsualización mágica ni atractiva. Agregar la configuración completa de SEO técnico y Social Media Sharing en el `<head>` garantiza una presentación impecable al compartir el enlace y asegura que toda referencia a la edad muestre el número **4**.

## What Changes

- **Metadatos estándar y apariencia móvil en `<head>` (`src/layouts/Layout.astro` y `src/pages/index.astro`)**:
  - Actualizar `<title>` a `✨ ¡Tienes una Invitación Real! | Cumpleaños #4 de Sofía 🎂👑`.
  - Agregar `<meta name="description" content="Un reino encantado de dulces y magia te espera. Toca para descubrir la sorpresa y acompañar a la Princesa Sofía en su fiesta de cumpleaños número 4." />`.
  - Agregar `<meta name="theme-color" content="#E6C0CF" />` para personalizar la barra de navegación móvil en Chrome (Android) y Safari (iOS).
  - Incluir un favicon en línea usando un emoji en formato SVG (`🎂`) mediante `data:image/svg+xml` sin depender de archivos externos.
- **Etiquetas Open Graph para WhatsApp, Facebook, iMessage y Telegram (`src/layouts/Layout.astro`)**:
  - Agregar `og:type` (`website`), `og:locale` (`es_LA`), `og:site_name` (`El Reino Mágico de Sofía`), `og:title` (`✨ ¡Estás invitado al Cumpleaños #4 de Sofía! 🎂👑`) y `og:description` (`Abre la puerta mágica del castillo y descubre los detalles de esta celebración tan especial por los 4 añitos de Sofía. ¡Te esperamos!`).
  - Configurar `og:url` (`https://tu-dominio.com/`), `og:image` (`https://tu-dominio.com/og-preview.jpg`), `og:image:secure_url` (`https://tu-dominio.com/og-preview.jpg`), `og:image:type` (`image/jpeg`), `og:image:width` (`1200`), `og:image:height` (`630`) y `og:image:alt` (`Pastel de castillo encantado para el cuarto cumpleaños de la Princesa Sofía`), acompañados de comentarios HTML explicativos sobre dónde reemplazar el dominio de producción y los requisitos de `og-preview.jpg` (URL absoluta `https://...`, **1200x630 px**, `< 300 KB`).
- **Etiquetas Twitter / X Card (`src/layouts/Layout.astro`)**:
  - Agregar `twitter:card` (`summary_large_image`), `twitter:title` (`✨ ¡Invitación Real! Cumpleaños #4 de Sofía 🎂👑`), `twitter:description` (`Toca el pastel encantado y descubre la sorpresa que tenemos preparada para celebrar los 4 años de Sofía.`), `twitter:image` (`https://tu-dominio.com/og-preview.jpg`) y `twitter:image:alt` (`Invitación al cumpleaños número 4 de Sofía`).
- **Consistencia de la edad #4 en toda la página**:
  - Verificar y asegurar que todas las referencias a la edad (incluyendo el número en la puerta del pastel SVG `#svg-door-age`, comentarios internos y textos de la historia/invitación) muestren el número **4** y conserven intactos los estilos CSS, Google Fonts y el script de Tone.js en el `<head>`.

## Capabilities

### New Capabilities
- `seo-social-media-sharing`: Configuración completa en `<head>` de metadatos SEO (`title`, `description`, `theme-color`, favicon SVG en línea), etiquetas Open Graph (`og:*`) y Twitter/X Cards (`twitter:*`) con guía en comentarios HTML para la previsualización en redes sociales del cumpleaños #4 de Sofía.

### Modified Capabilities

## Impact

- `src/layouts/Layout.astro`: Actualización de `<head>` con `<title>`, `meta description`, `meta theme-color`, favicon `data:image/svg+xml`, etiquetas Open Graph, etiquetas Twitter Card y comentarios HTML de guía para producción, manteniendo intactos los estilos, Google Fonts y Tone.js.
- `src/pages/index.astro`: Actualización del prop `title` pasado a `<Layout />` con el nuevo título oficial.
- `src/components/BirthdayCake.astro`: Limpieza de comentarios residuales para reflejar consistentemente el número 4 en la puerta del pastel SVG.
