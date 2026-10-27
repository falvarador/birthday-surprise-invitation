# Design

## Context

En `src/components/Header.astro`, el elemento `<header>` se muestra actualmente en todas las resoluciones (`flex items-center justify-between`), restando altura disponible en pantallas móviles (`100dvh`) al pastel SVG y a la tarjeta de historia. Ver `proposal.md` para la motivación completa.

## Goals / Non-Goals

**Goals:**
- Ocultar el `<header>` completo en dispositivos móviles (`< 768px`) usando `hidden md:flex`.
- Exponer en dispositivos móviles (`md:hidden`) un botón flotante circular compacto (`fixed top-3 right-3 z-50 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm`) para alternar el audio sin ocupar espacio en el flujo vertical.
- Redistribuir el espacio vertical en móvil ajustando `<main>` (`py-3 px-4`), añadiendo `mt-2 md:mt-0` en la tarjeta de historia y ampliando la altura máxima del pastel SVG en móvil (`max-h-[54dvh] sm:max-h-[56dvh] lg:max-h-[78dvh]`).
- Preservar intactos la vista de escritorio (`md:` y superiores) y todos los `id` y `eventListener` existentes con verificaciones `if (element)`.

**Non-Goals:**
- No alterar el diseño ni la disposición en pantallas `md:` o superiores.
- No modificar la lógica musical de `audioManager.ts` ni el flujo de los 3 actos.

## Decisions

1. **Ocultación Responsiva del `<header>` y Botón Flotante de Audio en `src/components/Header.astro`**:
   - *Decisión*:
     - Aplicar `hidden md:flex` al elemento `<header>` dentro de `<birthday-header>` para que desaparezca por completo por debajo de `768px` y se mantenga idéntico en `md:` y superiores.
     - Añadir dentro de `<birthday-header>` (fuera de `<header>`) un botón circular independiente para móviles:
       `class="md:hidden fixed top-3 right-3 z-50 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-palette-pink/40 text-palette-brown border border-palette-pink shadow-sm transition-all flex items-center justify-center active:scale-95 cursor-pointer"` con `data-action="sound"` y un `<span data-sound-icon aria-hidden="true">🎵</span>`.
     - En `BirthdayHeaderElement` (`<script>`), enlazar el evento `click` a todos los botones `this.querySelectorAll('[data-action="sound"]')` y actualizar de forma segura con condicionales `if (el)` tanto `#sound-icon` y `#sound-label` como todos los `[data-sound-icon]`.
   - *Racional*: Garantiza que en móvil el `<header>` tenga `display: none`, que el usuario conserve el control de música en la esquina superior derecha sin ocupar alto de pantalla, y que ningún `id` (`#nav-age-display`, `#nav-name-display`, `#btn-sound`, `#sound-icon`, `#sound-label`) se rompa ni genere errores en consola.

2. **Redistribución del Espacio Vertical en Móvil (`src/pages/index.astro`, `src/components/StoryGuide.astro`, `src/components/BirthdayCake.astro`)**:
   - *Decisión*:
     - En `src/pages/index.astro`: actualizar `<main>` para usar `py-3 px-4 md:py-2` (`relative z-10 flex-1 min-h-0 h-[100dvh] md:h-auto w-full max-w-6xl mx-auto px-4 py-3 md:py-2 flex flex-col lg:flex-row items-center justify-between lg:justify-center gap-1.5 sm:gap-3 lg:gap-10 overflow-hidden`).
     - En `src/components/StoryGuide.astro`: añadir `mt-2 md:mt-0` al contenedor superior (`order-1`) de la tarjeta de la historia.
     - En `src/components/BirthdayCake.astro`: aumentar el límite de altura del contenedor del SVG en móvil de `max-h-[48dvh] sm:max-h-[52dvh] lg:max-h-[78dvh]` a `max-h-[54dvh] sm:max-h-[56dvh] lg:max-h-[78dvh]`.
   - *Racional*: El espacio liberado por el `<header>` permite separar cómodamente la tarjeta superior (`mt-2`) y otorgar mayor tamaño y presencia visual al pastel SVG en el centro sin generar scroll vertical.

## Risks / Trade-offs

- **[Risk]** El botón flotante (`fixed top-3 right-3 z-50`) podría superponerse ligeramente con la esquina de la tarjeta de historia en pantallas muy estrechas. → **Mitigation**: El margen `mt-2` en la tarjeta de historia y el hecho de que la píldora de progreso superior está centrada (`items-center`) dejan libre la esquina superior derecha donde se ubica el botón circular `w-10 h-10`.
