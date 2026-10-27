# seo-social-media-sharing Specification

## Purpose

Proporciona en la sección `<head>` del documento HTML la configuración completa de metadatos estándar de SEO, color de tema móvil, favicon SVG en línea, etiquetas Open Graph (WhatsApp, Facebook, iMessage, Telegram) y Twitter/X Cards para el cumpleaños #4 de Sofía, junto con comentarios guía para la URL e imagen de previsualización en producción.

## Requirements

### Requirement: Metadatos estándar de SEO, color de barra móvil y favicon en línea
El sistema SHALL incluir en el `<head>` del documento HTML el título `<title>✨ ¡Tienes una Invitación Real! | Cumpleaños #4 de Sofía 🎂👑</title>`, la etiqueta `<meta name="description" content="Un reino encantado de dulces y magia te espera. Toca para descubrir la sorpresa y acompañar a la Princesa Sofía en su fiesta de cumpleaños número 4." />`, la etiqueta `<meta name="theme-color" content="#E6C0CF" />` y un favicon en línea en formato `data:image/svg+xml` con emoji (`🎂` o `👑`), manteniendo intactos los estilos CSS, las fuentes de Google Fonts y el script de Tone.js.

#### Scenario: Inspección de metadatos estándar y apariencia móvil en el head
- **WHEN** un navegador móvil o motor de búsqueda carga la página principal
- **THEN** el `<head>` contiene `<title>✨ ¡Tienes una Invitación Real! | Cumpleaños #4 de Sofía 🎂👑</title>`, la meta descripción del cumpleaños número 4 de la Princesa Sofía, `theme-color` con valor `#E6C0CF`, un `<link rel="icon">` con `data:image/svg+xml` y conserva las hojas de estilo de Google Fonts y el script de Tone.js

### Requirement: Etiquetas Open Graph completas para compartir en WhatsApp, Facebook, iMessage y Telegram
El sistema SHALL definir en el `<head>` las etiquetas `<meta property="og:..." />` con los valores exactos: `og:type` (`website`), `og:locale` (`es_LA`), `og:site_name` (`El Reino Mágico de Sofía`), `og:title` (`✨ ¡Estás invitado al Cumpleaños #4 de Sofía! 🎂👑`), `og:description` (`Abre la puerta mágica del castillo y descubre los detalles de esta celebración tan especial por los 4 añitos de Sofía. ¡Te esperamos!`), `og:url` (`https://tu-dominio.com/`), `og:image` (`https://tu-dominio.com/og-preview.jpg`), `og:image:secure_url` (`https://tu-dominio.com/og-preview.jpg`), `og:image:type` (`image/jpeg`), `og:image:width` (`1200`), `og:image:height` (`630`) y `og:image:alt` (`Pastel de castillo encantado para el cuarto cumpleaños de la Princesa Sofía`), acompañadas de comentarios HTML que expliquen dónde sustituir el dominio de producción y los requisitos de `og-preview.jpg` (ruta absoluta `https://...`, **1200x630 px** y peso menor a **300 KB**).

#### Scenario: Extracción de tarjeta Open Graph al compartir el enlace
- **WHEN** un rastreador de WhatsApp, Facebook, iMessage o Telegram analiza el `<head>` del documento
- **THEN** encuentra todas las propiedades `og:type`, `og:locale`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`, `og:image:secure_url`, `og:image:type`, `og:image:width`, `og:image:height` y `og:image:alt` configuradas para el cumpleaños #4 de Sofía junto con los comentarios HTML de guía para producción

### Requirement: Etiquetas Twitter / X Card de imagen grande
El sistema SHALL incluir en el `<head>` las etiquetas para Twitter/X Card con los valores: `twitter:card` (`summary_large_image`), `twitter:title` (`✨ ¡Invitación Real! Cumpleaños #4 de Sofía 🎂👑`), `twitter:description` (`Toca el pastel encantado y descubre la sorpresa que tenemos preparada para celebrar los 4 años de Sofía.`), `twitter:image` (`https://tu-dominio.com/og-preview.jpg`) y `twitter:image:alt` (`Invitación al cumpleaños número 4 de Sofía`).

#### Scenario: Previsualización de tarjeta grande en Twitter / X
- **WHEN** se comparte el enlace en Twitter / X o plataformas compatibles con Twitter Cards
- **THEN** el `<head>` expone `twitter:card` como `summary_large_image` junto con `twitter:title`, `twitter:description`, `twitter:image` y `twitter:image:alt` alusivos a los 4 años de Sofía

### Requirement: Consistencia total de la edad #4 en toda la página
El sistema SHALL mostrar el número **4** en todas las referencias a la edad de Sofía dentro de la página, incluyendo los metadatos del `<head>`, el número en la puerta del pastel SVG (`#svg-door-age`), la pantalla de bienvenida, el encabezado, la narrativa de la historia y la tarjeta de invitación.

#### Scenario: Verificación de referencias a la edad #4 en el documento y pastel SVG
- **WHEN** se inspecciona el documento renderizado y el pastel SVG
- **THEN** tanto los metadatos del `<head>` como `#svg-door-age` y todos los textos visibles de la historia e invitación muestran el número `4` sin ninguna referencia residual al número `3`
