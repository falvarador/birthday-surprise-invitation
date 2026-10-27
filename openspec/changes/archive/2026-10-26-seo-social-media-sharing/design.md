# Design

## Context

En este proyecto Astro, la estructura del documento HTML y su sección `<head>` se centralizan en `src/layouts/Layout.astro` (invocado desde `src/pages/index.astro`), que compila directamente en el `dist/index.html` final. Actualmente `src/layouts/Layout.astro` solo define `<meta charset="UTF-8" />`, `<meta name="viewport" />`, íconos estáticos y `<title>{title}</title>`, sin etiquetas SEO descriptivas ni metadatos Open Graph / Twitter Cards. Ver `proposal.md` para la motivación completa.

## Goals / Non-Goals

**Goals:**
- Incorporar en `src/layouts/Layout.astro` y `src/pages/index.astro` todas las etiquetas Meta estándar, `theme-color` (`#E6C0CF`), favicon SVG en línea (`data:image/svg+xml`), propiedades Open Graph (`og:*`) y etiquetas Twitter/X Card (`twitter:*`) para el cumpleaños #4 de Sofía.
- Incluir en el HTML generado comentarios claros en el `<head>` indicando dónde reemplazar `https://tu-dominio.com/` y recordando las especificaciones de `og-preview.jpg` (URL absoluta `https://...`, **1200x630 px**, `< 300 KB`).
- Garantizar que toda referencia a la edad en la página y en el SVG del pastel muestre **4** y preservar intactos los estilos CSS, las fuentes de Google Fonts y el script de Tone.js.

**Non-Goals:**
- No alterar el diseño visual, las animaciones, la paleta de colores ni el flujo interactivo de la aplicación.
- No agregar dependencias externas para la gestión de SEO.

## Decisions

1. **Centralización de Metadatos en `src/layouts/Layout.astro` y `src/pages/index.astro`**:
   - *Decisión*: Actualizar el valor por defecto de `title` en `src/layouts/Layout.astro` y el prop `title` en `src/pages/index.astro` a `"✨ ¡Tienes una Invitación Real! | Cumpleaños #4 de Sofía 🎂👑"`, y añadir en el `<head>` de `src/layouts/Layout.astro` todas las etiquetas `meta` (description, theme-color, Open Graph y Twitter Cards) y el favicon en línea `<link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎂</text></svg>" />`.
   - *Racional*: En Astro, `src/layouts/Layout.astro` es la fuente única de verdad para el `<head>` del `index.html` resultante, manteniendo el código modular y limpio sin tocar los scripts de Tone.js ni los enlaces de Google Fonts.

2. **Comentarios HTML de Guía para Producción en el `<head>`**:
   - *Decisión*: Incluir comentarios HTML explícitos en `src/layouts/Layout.astro` junto a `og:url` y `og:image` explicando que en producción (GitHub Pages, Vercel, Netlify, etc.) debe reemplazarse `https://tu-dominio.com/` por el dominio real y que `og-preview.jpg` requiere ruta absoluta (`https://...`), dimensiones de **1200x630 px** y un peso menor a **300 KB** para compatibilidad con WhatsApp y Facebook.
   - *Racional*: Facilita el despliegue final del sitio estático sin necesidad de buscar en documentación externa los requisitos de caché y tamaño de WhatsApp.

3. **Revisión de Consistencia del Número 4 en `src/components/BirthdayCake.astro`**:
   - *Decisión*: Actualizar los dos comentarios internos en `src/components/BirthdayCake.astro` que aún mencionan `NUMBER "3"` / `Number 3` para que coincidan con el valor `4` ya presente en `#svg-door-age`, `partyState.age` y el resto de componentes.
   - *Racional*: Asegura que ni el DOM ni el código fuente tengan referencias residuales a la edad anterior.

## Risks / Trade-offs

- **[Risk]** Los rastreadores de WhatsApp/Facebook ignoran rutas relativas en `og:image`. → **Mitigation**: Se utiliza la URL absoluta `https://tu-dominio.com/og-preview.jpg` tanto en `og:image` como en `og:image:secure_url` y `twitter:image`, acompañada del comentario instructivo en el `<head>`.
