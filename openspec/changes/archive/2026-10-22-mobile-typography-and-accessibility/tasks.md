# Tasks

## 1. Tipografía Móvil en Encabezado y Guía de Historia (`100dvh` Balanceado)

- [x] 1.1 Actualizar `src/components/Header.astro` para elevar el título del evento y el botón de música (`#btn-sound`) de `text-xs sm:text-sm` a `text-sm` con espaciado compacto, verificando que no existan micro-textos en la barra superior.
- [x] 1.2 Actualizar `src/components/StoryGuide.astro` para aplicar `text-sm sm:text-xs` en `#step-indicator-text`, `text-4xl sm:text-5xl lg:text-6xl` en `#main-heading`, `text-base sm:text-lg leading-snug p-3.5 sm:p-4` en `#main-instruction` y `text-base sm:text-lg font-bold py-2.5 sm:py-3.5` en `#primary-action-btn` (y `text-sm` en `#replay-magic-btn`), reduciendo márgenes exteriores en móvil (`mb-1 sm:mb-2`) para preservar el layout de pantalla única sin scroll.

## 2. Legibilidad en Pantalla de Bienvenida y Tarjeta de Invitación

- [x] 2.1 Actualizar `src/components/WelcomeOverlay.astro` para subir el subtítulo superior ("Anuncio real") de `text-xs` a `text-sm` y el párrafo narrativo de `text-sm sm:text-base` a `text-base sm:text-lg` con margen inferior equilibrado (`mb-4 sm:mb-6`), verificando que las clases base móviles coincidan con la especificación.
- [x] 2.2 Actualizar `src/components/InvitationModal.astro` para aplicar `text-xl sm:text-2xl` en `#card-surprise-message`, `text-2xl sm:text-3xl` en los números del contador (`#cd-days`, `#cd-hours`, `#cd-mins`, `#cd-secs`) con etiquetas en `text-xs`, y subir las etiquetas de detalles del evento a `text-xs` y los valores principales (`#card-date-display`, `#card-time-display`, `#card-venue-display`, `#card-dress-display`) a `text-base`, verificando que no queden clases `text-[10px]` ni `text-[11px]`.

## 3. Nitidez de Textos en Pastel SVG y Verificación Final

- [x] 3.1 Actualizar los elementos `<text>` dentro de `#birthday-cake-svg` en `src/components/BirthdayCake.astro` (`#birthday-plaque` y `#door-secret-interior`) aumentando ligeramente su `font-size` y `font-weight` para que luzcan nítidos y legibles al escalarse en pantallas móviles sin desbordarse de sus marcos SVG.
- [x] 3.2 Ejecutar `npm run build` para verificar que el proyecto Astro compila sin errores.
