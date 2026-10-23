# Design

## Context

El proyecto Astro cuenta actualmente con una arquitectura Mobile-First de pantalla única (`100dvh`) dividida en componentes (`Header.astro`, `StoryGuide.astro`, `BirthdayCake.astro`, `WelcomeOverlay.astro` e `InvitationModal.astro`). Sin embargo, varios elementos utilizan micro-textos en móvil (`text-[10px]`, `text-[11px]`, `text-xs`) o tamaños base pequeños (`text-sm`) que restan legibilidad en pantallas `< 640px`. Ver `proposal.md` para la motivación completa.

## Goals / Non-Goals

**Goals:**
- Eliminar todos los micro-textos (`10px`, `11px`, `12px`) en los textos de interfaz móvil (`< 640px`) y elevar la escala tipográfica según las directrices de UX/UI.
- Mantener intactos los tamaños y el diseño en pantallas de escritorio (`sm:`, `md:`, `lg:`).
- Compensar el incremento de tamaño de fuente en móvil reduciendo márgenes exteriores (`mb-1`, `mb-1.5`, `mb-2`) y rellenos verticales (`py-2.5`, `p-3.5`) para que el layout `100dvh` siga funcionando sin scroll vertical.
- Mejorar la nitidez de los textos SVG dentro de `#birthday-cake-svg` (`#birthday-plaque` y `#door-secret-interior`).

**Non-Goals:**
- No reintroducir el globo flotante `#cake-speech-bubble` que fue eliminado en el cambio `mobile-first-single-screen-ux` para evitar duplicidad de texto y ganar espacio vertical para el pastel.
- No modificar la paleta de colores, animaciones ni la lógica de los 3 actos del cuento interactivo.

## Decisions

1. **Escala Tipográfica en Encabezado y Guía de Historia (`Header.astro` y `StoryGuide.astro`)**:
   - *Decisión*:
     - En `Header.astro`: cambiar el título del evento y el botón `#btn-sound` de `text-xs sm:text-sm` a `text-sm` con `py-1 sm:py-1.5` para mantener una altura de barra mínima.
     - En `StoryGuide.astro`:
       - `#step-indicator-text`: cambiar de `text-[11px] sm:text-xs` a `text-sm sm:text-xs`.
       - `#main-heading`: cambiar de `text-2xl sm:text-4xl lg:text-5xl` a `text-4xl sm:text-5xl lg:text-6xl` con margen inferior compacto `mb-1 sm:mb-2`.
       - `#main-instruction`: cambiar de `text-xs sm:text-sm lg:text-base` a `text-base sm:text-lg`, interlineado `leading-snug` y relleno `p-3.5 sm:p-4`.
       - `#primary-action-btn`: cambiar de `text-sm sm:text-base` a `text-base sm:text-lg font-bold` con relleno vertical `py-2.5 sm:py-3.5`.
   - *Racional*: Cumple exactamente con los tamaños solicitados en móvil y escritorio mientras controla la altura total del bloque superior e inferior mediante `mb-1`, `p-3.5` y `py-2.5` para no comprimir el pastel SVG central en `100dvh`.

2. **Escala Tipográfica en Modal de Bienvenida y Tarjeta de Invitación (`WelcomeOverlay.astro` e `InvitationModal.astro`)**:
   - *Decisión*:
     - En `WelcomeOverlay.astro`: subir el subtítulo superior ("Anuncio real") de `text-xs` a `text-sm`, y el párrafo narrativo de `text-sm sm:text-base` a `text-base sm:text-lg` con `mb-4 sm:mb-6`.
     - En `InvitationModal.astro`:
       - Insignia superior y etiqueta del mensaje sorpresa: `text-xs`.
       - `#card-surprise-message`: subir de `text-base sm:text-xl` a `text-xl sm:text-2xl`.
       - Contador regresivo: subir `#cd-days`, `#cd-hours`, `#cd-mins`, `#cd-secs` de `text-lg sm:text-2xl` a `text-2xl sm:text-3xl`, y sus etiquetas ("Días", "Horas", "Mins", "Segs") de `text-[10px]` a `text-xs`.
       - Detalles del evento ("Fecha", "Hora", "Lugar"): subir las etiquetas superiores de `text-[10px] sm:text-[11px]` a `text-xs` y los valores (`#card-date-display`, `#card-time-display`, `#card-venue-display`) de `text-xs sm:text-sm` a `text-base`.
       - Píldora de código de vestimenta (`#card-dress-display` y su contenedor): subir de `text-[11px] sm:text-xs` a `text-base` (`px-4 py-1.5 rounded-2xl sm:rounded-full`), y botones de pie de tarjeta a `text-sm` para eliminar cualquier micro-texto restante.
   - *Racional*: El contenedor interno de `#invitation-modal` ya cuenta con `max-h-[90dvh] overflow-y-auto`, por lo que aumentar la jerarquía tipográfica mejora drásticamente la lectura en teléfonos manteniendo un desplazamiento interno fluido.

3. **Ajuste de `<text>` dentro del Pastel SVG (`BirthdayCake.astro`)**:
   - *Decisión*:
     - En `#birthday-plaque`: aumentar `"Feliz"` de `font-size="19"` a `font-size="21"`, `"Cumpleaños"` de `font-size="16.5"` a `font-size="18"`, y `#svg-plaque-name` ("Sofía") de `font-size="20"` a `font-size="22"` con `font-weight="700"`, ajustando sutilmente las coordenadas `y` (`154`, `176`, `200`) para que encajen centrados dentro del círculo crema (`r="52"`).
     - En `#door-secret-interior`: aumentar `"¡Estás Invitado!"` de `font-size="14"` a `font-size="15.5"` (`font-weight="700"`), y el botón `"VER CARTA ✨"` de `font-size="9.5"` a `font-size="10.5"` (`font-weight="800"`, ampliando ligeramente el rectángulo del botón de `width="74"` a `width="82"`, `x="263"`).
   - *Racional*: Mejora la nitidez cuando el SVG se escala en pantallas pequeñas sin desbordar los bordes de la placa circular ni del interior de la puerta.

## Risks / Trade-offs

- **[Risk]** El incremento a `text-4xl` en `#main-heading` y `text-base` en `#main-instruction` podría restar altura al pastel SVG en pantallas móviles muy cortas (ej. iPhone SE). → **Mitigation**: Reducir márgenes entre píldora, título e instrucción (`mb-1`, `py-0.5`), usar `p-3.5` e interlineado `leading-snug` en `#main-instruction`, y `py-2.5` en `#primary-action-btn`, permitiendo que el contenedor `flex-1 min-h-0` del pastel absorba el espacio restante sin provocar scroll en la ventana.
