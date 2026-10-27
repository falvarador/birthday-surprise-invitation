# Tasks

## 1. Ocultar Header en Móvil y Botón Flotante de Audio

- [x] 1.1 Actualizar `src/components/Header.astro` aplicando `hidden md:flex` al elemento `<header>` principal para ocultarlo en teléfonos móviles (`< 768px`) y mantenerlo intacto en pantallas `md:` y superiores.
- [x] 1.2 Agregar en `src/components/Header.astro` el botón flotante circular independiente para móviles (`md:hidden fixed top-3 right-3 z-50 w-10 h-10 bg-white/80 backdrop-blur-sm shadow-sm`) con `data-action="sound"` y actualizar el script de `BirthdayHeaderElement` para enlazar todos los botones `[data-action="sound"]` y sincronizar los íconos/etiquetas con condicionales `if (element)` sin romper ningún `id`.

## 2. Redistribución del Espacio Vertical en Móvil y Verificación Final

- [x] 2.1 Ajustar el contenedor `<main>` en `src/pages/index.astro` con `py-3 px-4 md:py-2`, añadir `mt-2 md:mt-0` al bloque superior de la historia en `src/components/StoryGuide.astro` y ampliar la altura máxima del pastel SVG en móvil (`max-h-[54dvh] sm:max-h-[56dvh] lg:max-h-[78dvh]`) en `src/components/BirthdayCake.astro` para aprovechar el 100% de `100dvh` sin scroll.
- [x] 2.2 Ejecutar `npm run build` para verificar que el proyecto Astro compila sin errores.
