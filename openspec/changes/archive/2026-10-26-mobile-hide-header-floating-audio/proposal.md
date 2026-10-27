# Proposal

## Why

En pantallas móviles, el encabezado superior (`<header>`) ocupa espacio vertical valioso dentro del contenedor de pantalla única (`100dvh`), restando protagonismo al pastel interactivo SVG y comprimiendo el flujo de la historia. Ocultar el `<header>` en dispositivos móviles (`hidden md:flex`), reubicar el control de audio como un botón circular flotante discreto (`fixed top-3 right-3 z-50 w-10 h-10`) y redistribuir el espacio vertical de `<main>` permite aprovechar el 100% del alto de la pantalla en teléfonos sin alterar el diseño en escritorio (`md:` y superiores).

## What Changes

- **Ocultar el `<header>` en dispositivos móviles (`src/components/Header.astro`)**:
  - Aplicar `hidden md:flex` al elemento `<header>` principal para que desaparezca por completo en teléfonos móviles (`< 768px`) y solo se muestre en pantallas `md:` o superiores.
- **Botón de audio flotante e independiente en móvil (`src/components/Header.astro`)**:
  - Agregar dentro de `<birthday-header>` un botón flotante circular compacto para móviles (`md:hidden fixed top-3 right-3 z-50 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-sm`) vinculado a la misma lógica de alternancia de sonido (`data-action="sound"`), conservando intactos todos los `id` (`#nav-age-display`, `#nav-name-display`, `#btn-sound`, `#sound-icon`, `#sound-label`) y verificando con condicionales `if (element)` en el script.
- **Redistribución del espacio vertical en móvil (`src/pages/index.astro`, `src/components/StoryGuide.astro`, `src/components/BirthdayCake.astro`)**:
  - Ajustar `<main>` en `src/pages/index.astro` con `py-3 px-4` en móvil (`flex flex-col justify-between h-[100dvh] md:h-auto flex-1 min-h-0`) sin márgenes ni rellenos residuales del header.
  - Añadir un margen superior cómodo (`mt-2 md:mt-0`) a la tarjeta de la historia en `src/components/StoryGuide.astro`.
  - Ampliar la altura máxima disponible del pastel SVG en móvil (`max-h-[54dvh] sm:max-h-[56dvh] lg:max-h-[78dvh]`) en `src/components/BirthdayCake.astro` para darle mayor protagonismo en el centro de la pantalla manteniendo el botón de acción principal fijo en la parte inferior sin scroll.

## Capabilities

### New Capabilities

### Modified Capabilities
- `mobile-first-single-screen-layout`: Actualiza el requisito de jerarquía vertical en móvil para ocultar el `<header>` en pantallas `< 768px` (`hidden md:flex`), reubicar el botón de sonido como control circular flotante (`fixed top-3 right-3 z-50 w-10 h-10 bg-white/80 backdrop-blur-sm`) y redistribuir el espacio vertical de `<main>` (`py-3 px-4`), la tarjeta de historia (`mt-2`) y el pastel SVG central.
- `mobile-typography-accessibility`: Ajusta el requisito del encabezado e indicador de progreso para reflejar que `<header>` permanece oculto en móvil (`hidden md:flex`) y visible desde `md:` con `text-sm`, mientras `#step-indicator-text` conserva `text-sm sm:text-xs`.

## Impact

- `src/components/Header.astro`: Ocultación responsiva del `<header>` en móvil (`hidden md:flex`), creación del botón de audio flotante circular (`md:hidden fixed top-3 right-3 z-50 w-10 h-10`) y sincronización segura de íconos/etiquetas mediante condicionales `if (element)`.
- `src/pages/index.astro`: Ajuste de clases de `<main>` en móvil (`py-3 px-4`).
- `src/components/StoryGuide.astro`: Margen superior `mt-2 md:mt-0` en el contenedor de la tarjeta de historia.
- `src/components/BirthdayCake.astro`: Mayor protagonismo vertical del pastel SVG en móvil (`max-h-[54dvh] sm:max-h-[56dvh] lg:max-h-[78dvh]`).
