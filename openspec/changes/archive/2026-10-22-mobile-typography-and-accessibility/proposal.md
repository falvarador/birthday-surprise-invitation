# Proposal

## Why

En pantallas táctiles pequeñas (`< 640px`), los micro-textos (`text-[10px]`, `text-[11px]` y `text-xs`) y los tamaños base reducidos en las instrucciones de la historia, el encabezado, la pantalla de bienvenida, el modal de invitación y los textos internos del pastel SVG dificultan la lectura rápida y restan impacto visual. Es necesario elevar la escala tipográfica móvil y eliminar los micro-textos para garantizar accesibilidad y lectura cómoda desde el primer vistazo, compensando los márgenes y rellenos para mantener intacto el diseño de pantalla única (`100dvh`) sin scroll vertical ni alterar el diseño en escritorio (`sm:`, `md:`, `lg:`).

## What Changes

- **Eliminación de micro-textos en móvil (`< 640px`)**:
  - Elevar el indicador de paso (`#step-indicator-text` en `StoryGuide.astro`) a `text-sm sm:text-xs` con buen contraste.
  - Elevar el título corto del evento y el botón de música (`#btn-sound`) en `Header.astro` de `text-xs sm:text-sm` a `text-sm` con espaciado compacto.
  - *(Nota: `#cake-speech-bubble` fue eliminado previamente en el diseño de pantalla única para evitar duplicar la pista sobre el pastel; la mejora de legibilidad de la pista se concentra directamente en `#main-instruction` ubicado encima del pastel).*
- **Jerarquía y lectura cómoda de la historia principal (`StoryGuide.astro`)**:
  - Aumentar el título principal (`#main-heading`) a `text-4xl sm:text-5xl lg:text-6xl` con márgenes verticales reducidos (`mb-1 sm:mb-2`).
  - Subir el tamaño del texto narrativo (`#main-instruction`) a `text-base sm:text-lg` con interlineado `leading-snug` y relleno compacto (`p-3.5 sm:p-4`).
  - Asegurar que el botón de acción principal (`#primary-action-btn`) utilice `text-base sm:text-lg font-bold` con relleno vertical equilibrado (`py-2.5 sm:py-3.5`).
- **Legibilidad en el Modal de Bienvenida (`WelcomeOverlay.astro`) y Tarjeta de Invitación (`InvitationModal.astro`)**:
  - En `#welcome-overlay`: subir el subtítulo superior ("Anuncio real") de `text-xs` a `text-sm` y el párrafo narrativo de `text-sm sm:text-base` a `text-base sm:text-lg`.
  - En `#invitation-modal`:
    - Elevar el mensaje sorpresa (`#card-surprise-message`) a `text-xl sm:text-2xl` y su etiqueta superior a `text-xs`.
    - Aumentar los números del contador regresivo (`#cd-days`, `#cd-hours`, `#cd-mins`, `#cd-secs`) a `text-2xl sm:text-3xl` y sus etiquetas ("Días", "Horas", "Mins", "Segs") de `text-[10px]` a `text-xs`.
    - Elevar las etiquetas de detalles del evento ("Fecha", "Hora", "Lugar") a `text-xs` y los valores principales (`#card-date-display`, `#card-time-display`, `#card-venue-display`) y el código de vestimenta (`#card-dress-display` y su contenedor) a `text-base` (16px).
- **Textos más nítidos dentro del Pastel SVG (`BirthdayCake.astro`)**:
  - Incrementar ligeramente el `font-size` y `font-weight` de los elementos `<text>` en `#birthday-plaque` ("Feliz", "Cumpleaños", "Sofía") y en `#door-secret-interior` ("¡Estás Invitado!", "VER CARTA ✨") para que conserven nitidez al escalarse el SVG en teléfonos.
- **Equilibrio con el Layout Sin Scroll (`100dvh`)**:
  - Compensar el aumento tipográfico en móvil ajustando márgenes (`mb-1`, `mb-1.5`, `mb-2`) y rellenos (`py-2.5`, `p-3.5`) para preservar la experiencia de pantalla única sin desbordamientos verticales.

## Capabilities

### New Capabilities
- `mobile-typography-accessibility`: Escala tipográfica responsiva y accesible en dispositivos móviles (`< 640px`), eliminación de micro-textos en encabezados, narrativa, bienvenida, tarjeta de invitación y textos SVG del pastel, manteniendo el equilibrio del layout `100dvh`.

### Modified Capabilities
- `mobile-first-single-screen-layout`: Actualiza los requisitos de la tarjeta de historia, encabezado y modal de invitación para incorporar la nueva escala tipográfica móvil libre de micro-textos dentro del contenedor de pantalla única (`100dvh`).

## Impact

- `src/components/Header.astro`: Escala de fuente `text-sm` en el título del encabezado y botón `#btn-sound`.
- `src/components/StoryGuide.astro`: Escala tipográfica y espaciados en `#step-indicator-text`, `#main-heading`, `#main-instruction` y `#primary-action-btn`.
- `src/components/WelcomeOverlay.astro`: Tamaños de texto en el subtítulo y párrafo de bienvenida (`#welcome-overlay`).
- `src/components/InvitationModal.astro`: Tamaños de texto y espaciado en `#card-surprise-message`, contador regresivo (`#cd-days`, `#cd-hours`, `#cd-mins`, `#cd-secs`), detalles del evento (`#card-date-display`, `#card-time-display`, `#card-venue-display`, `#card-dress-display`) y etiquetas.
- `src/components/BirthdayCake.astro`: Ajustes de `font-size` y `font-weight` en los nodos `<text>` de `#birthday-plaque` y `#door-secret-interior`.
