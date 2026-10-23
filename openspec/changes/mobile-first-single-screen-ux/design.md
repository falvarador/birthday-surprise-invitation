# Design

## Context

Actualmente, `Layout.astro` usa `min-h-screen` y `index.astro` coloca `<StoryGuide />` (`order-2 lg:order-1`) y `<BirthdayCake />` (`order-1 lg:order-2`) dentro de un `<main>` en columna para móvil. Como `<StoryGuide />` agrupa en un mismo bloque tanto la pista narrativa como el botón `#primary-action-btn` y `<BirthdayCake />` renderiza encima con un contenedor de aspecto fijo más el globo `#cake-speech-bubble`, en pantallas móviles el pastel ocupa la parte superior y empuja tanto el texto de la historia como el botón principal fuera del viewport, forzando scroll. Consulta `proposal.md` para la motivación completa.

## Goals / Non-Goals

**Goals:**
- Lograr un layout `100dvh` (`h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between`) donde jamás exista scroll vertical en la vista principal, tanto en móvil como en escritorio.
- Ordenar visualmente en móvil de arriba hacia abajo: (1) Encabezado compacto, (2) Tarjeta de Historia / Pista Activa, (3) Pastel Interactivo SVG flexible en el centro (`flex-1 min-h-0`), (4) Botón de Acción Principal fijo en la parte inferior al alcance del pulgar.
- Añadir hitboxes invisibles (`fill="transparent"`) ampliados en el SVG, sincronizar el toque directo de cada objetivo con el avance del botón principal y destacar con un resplandor pulsante únicamente el elemento activo del paso actual.
- Adaptar `#invitation-modal` con `max-h-[90dvh] overflow-y-auto` y `p-4 sm:p-6`.

**Non-Goals:**
- No alterar la ilustración artística del pastel SVG ni la síntesis de audio en `audioManager.ts`.

## Decisions

### 1. Arquitectura de Pantalla Única (`100dvh`) y Separación Pista Superior / Botón Inferior en Móvil
- **Decisión**:
  - En `src/layouts/Layout.astro`, aplicar en `<body>`: `h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between relative selection:bg-palette-pink selection:text-palette-brown`.
  - En `src/components/Header.astro`, compactar la barra superior (`shrink-0 px-3 sm:px-4 pt-2 pb-1`): a la izquierda el indicador compacto con el título corto (`"👑 Cumpleaños #4 de Sofía"`) y a la derecha únicamente el botón `#btn-sound` de música, eliminando el botón redundante de varita del header para evitar distracciones.
  - En `src/pages/index.astro` y `src/components/StoryGuide.astro`:
    - Usar `display: contents` en `<story-guide class="contents lg:w-5/12 lg:flex lg:flex-col lg:items-start lg:justify-center lg:text-left">` para que en móvil sus dos hijos directos participen como ítems flexibles dentro de `<main class="relative z-10 flex-1 min-h-0 w-full max-w-6xl mx-auto px-3 sm:px-4 py-1 flex flex-col lg:flex-row items-center justify-between lg:justify-center gap-1.5 sm:gap-3 lg:gap-10 overflow-hidden">`:
      1. **Bloque de Pista Activa (`order-1`, `shrink-0`)**: Contiene la píldora de progreso (`#step-indicator-text`), el título compacto (`#main-heading`) y la tarjeta de instrucción (`#main-instruction`) justo encima del pastel.
      2. **Pastel Interactivo (`<birthday-cake>`, `order-2`, `flex-1 min-h-0 w-full lg:w-7/12 flex items-center justify-center`)**: Contiene el SVG con `w-auto h-full max-h-[48dvh] sm:max-h-[52dvh] lg:max-h-[78dvh] aspect-[520/610]` para escalar automáticamente al espacio central disponible sin desbordar. Se elimina por completo `#cake-speech-bubble`.
      3. **Barra de Botón de Acción Principal (`order-3`, `shrink-0 w-full max-w-md pb-1`)**: Situada debajo del pastel en móvil (y debajo de la tarjeta de historia dentro de la columna izquierda en `lg:`), manteniendo `#primary-action-btn` (y `#replay-magic-btn` en `step === 4`) siempre fijos al alcance del pulgar.
  - En `src/components/Footer.astro`, usar un diseño ultracompacto (`shrink-0 py-1 px-3 text-[11px] leading-tight hidden sm:block`) para que en móviles pequeños todo el espacio vertical útil se dedique al encabezado, la pista, el pastel y el botón inferior.
- **Alternativa considerada**: Duplicar `<StoryGuide />` en dos componentes separados (`StoryClue.astro` y `StoryActionBar.astro`). Se descartó porque mantener ambos bloques dentro del custom element `<story-guide>` con `contents lg:flex` conserva toda la lógica de actualización de UI (`updateStepUI`) en un solo Web Component sin sincronización extra.

### 2. Hitboxes Táctiles Ampliados (`fill="transparent"`) y Sincronización Directa en `BirthdayCake.astro`
- **Decisión**:
  - **Princesa Hada y Varita (`#fairy-princess-doll`)**: Añadir dentro del grupo un `<rect x="75" y="315" width="150" height="215" rx="24" fill="transparent" />` que cubra generosamente la varita estrellada y la muñeca para facilitar el toque en el Acto 1.
  - **Las 3 Velas / Banderitas del Castillo**: Añadir en cada `[data-candle]` un `<rect>` o `<circle r="34" fill="transparent" />` centrado en la llama y banderita (`(153, 128)`, `(227, 45)`, `(262, 95)`). Además, cuando `partyState.step === 2`, tocar cualquiera de las velas ejecuta `this.blowAllCandles()` para que un solo toque en las velas del castillo apague las 3 velas en secuencia y avance al Acto 3, exactamente igual que presionar `#primary-action-btn`.
  - **Puerta Mágica (`#cake-door-panel`)**: Añadir un `<rect x="224" y="295" width="160" height="215" rx="20" fill="transparent" />` sobre la puerta para ampliar la superficie de toque en el Acto 3.

### 3. Resplandor Visual en el Objetivo Activo del Pastel SVG
- **Decisión**:
  - Definir en `src/styles/global.css` una clase `.cake-target-glow` con animación de resplandor dorado pulsante (`drop-shadow(0 0 14px rgba(205, 179, 123, 0.95))` y ligero pulso).
  - En `BirthdayCakeElement`, añadir un método `updateActiveTargetHighlight()` invocado al iniciar y en cada `party:step-changed`:
    - `step === 1`: `#fairy-princess-doll` tiene `.cake-target-glow`; las velas y la puerta no.
    - `step === 2`: los grupos `[data-candle]` tienen `.cake-target-glow`; el hada y la puerta no.
    - `step === 3`: `#cake-door-panel` tiene `.door-ready` / `.cake-target-glow`.
    - `step === 4`: `#door-secret-interior` tiene `.cake-target-glow`.

### 4. Modal de Invitación Adaptado a Móvil (`InvitationModal.astro`)
- **Decisión**:
  - Configurar la tarjeta contenedora dentro de `#invitation-modal` con `max-h-[90dvh] overflow-y-auto p-4 sm:p-6` y ajustar márgenes verticales internos (`mb-3 sm:mb-5`, `gap-2 sm:gap-3`) para que el contenido se desplace suavemente dentro de la tarjeta en pantallas pequeñas y los dos botones finales estén siempre accesibles.

## Risks / Trade-offs

- **[Risk] Pantallas móviles muy bajas (ej. iPhone SE con barras del navegador abiertas)** → **Mitigación**: El uso de `100dvh` se adapta dinámicamente a las barras del navegador móvil, y `flex-1 min-h-0` en el contenedor del pastel permite que el SVG se reduzca proporcionalmente (`w-auto h-full max-h-[48dvh]`) sin empujar nunca el botón inferior fuera de la vista.
