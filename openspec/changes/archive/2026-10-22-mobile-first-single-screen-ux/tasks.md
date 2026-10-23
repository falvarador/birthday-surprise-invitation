# Tasks

## 1. Layout de Pantalla Única Sin Scroll (`100dvh`) y Jerarquía Vertical Móvil

- [x] 1.1 Actualizar `src/layouts/Layout.astro`, `src/pages/index.astro` y `src/components/Footer.astro` para aplicar `h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between` en el contenedor principal y `flex-1 min-h-0` en `<main>`, asegurando que toda la experiencia quepa en el alto visible sin scroll.
- [x] 1.2 Compactar `src/components/Header.astro` para mostrar una barra superior mínima con el título corto a la izquierda y únicamente el botón de música (`#btn-sound`) a la derecha, verificando que no ocupe espacio vertical innecesario en móvil.
- [x] 1.3 Reestructurar `src/components/StoryGuide.astro` usando `contents lg:flex` para separar el bloque de la tarjeta de historia/pista activa (`order-1`, justo encima del pastel) del bloque del botón de acción principal (`#primary-action-btn` y `#replay-magic-btn` en `order-3`, fijos en la parte inferior de la pantalla al alcance del pulgar), verificando el orden vertical en móvil.

## 2. Pastel SVG Flexible, Hitboxes Táctiles Ampliados y Destello en el Objetivo Activo

- [x] 2.1 Actualizar el contenedor en `src/components/BirthdayCake.astro` con `order-2 flex-1 min-h-0 flex items-center justify-center` y escalado automático del SVG (`max-h-[48dvh] sm:max-h-[52dvh] lg:max-h-[78dvh]`), y eliminar por completo el globo flotante redundante `#cake-speech-bubble` (`#bubble-text`) y sus referencias en el script.
- [x] 2.2 Agregar áreas de toque invisibles (`fill="transparent"`) ampliadas en `src/components/BirthdayCake.astro` alrededor de las 3 velas/banderitas del castillo (`[data-candle]`), de la princesa hada con su varita (`#fairy-princess-doll`) y de la puerta (`#cake-door-panel`), y sincronizar el evento de toque en las velas durante el Acto 2 para que ejecute `blowAllCandles()` y avance la historia exactamente igual que el botón inferior.
- [x] 2.3 Agregar la animación de resplandor guía `.cake-target-glow` en `src/styles/global.css` y el método `updateActiveTargetHighlight()` en `src/components/BirthdayCake.astro` para iluminar únicamente el objetivo activo del pastel según el paso actual (varita/hada en Acto 1, velas en Acto 2, puerta en Acto 3).

## 3. Modal de Invitación Adaptado a Móvil y Verificación Final

- [x] 3.1 Optimizar `src/components/InvitationModal.astro` aplicando `max-h-[90dvh] overflow-y-auto` y espaciados/tipografías compactas (`p-4 sm:p-6`) en el contenedor interno de la tarjeta para garantizar desplazamiento suave y acceso permanente a los botones finales en teléfonos pequeños.
- [x] 3.2 Ejecutar `npm run build` para verificar que el proyecto Astro compila sin errores de TypeScript, plantillas ni estilos.
