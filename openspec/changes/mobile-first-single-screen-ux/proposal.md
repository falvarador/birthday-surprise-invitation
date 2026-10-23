# Proposal

## Why

En dispositivos móviles, el tamaño actual del pastel SVG y el orden de los elementos (`order-1` para el pastel y `order-2` para la guía con el texto y el botón juntos debajo) empujan las instrucciones del cuento y el botón de acción principal fuera del área visible de la pantalla, obligando al usuario a hacer scroll vertical constante. Además, los elementos interactivos dentro del SVG tienen áreas de toque pequeñas para pantallas táctiles y carecen de un indicador visual dinámico en los Actos 1 y 2 que guíe el dedo hacia el objetivo activo. Reestructurar la aplicación bajo un diseño Mobile-First de pantalla única (`100dvh`) sin scroll garantiza una experiencia fluida tipo app nativa donde la pista, el pastel y el botón principal están siempre a la vista.

## What Changes

- **Diseño de Pantalla Única Sin Scroll (`100dvh` App-Like Layout en `Layout.astro`, `index.astro`, `Header.astro`, `StoryGuide.astro`, `BirthdayCake.astro`, `Footer.astro`)**:
  - Configurar el contenedor raíz (`<body>` / `<main>`) con `h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between` para que toda la experiencia principal quepa dentro del alto visible de la ventana tanto en móvil como en escritorio sin necesidad de hacer scroll.
  - Establecer un orden visual vertical e intuitivo en móvil (de arriba hacia abajo):
    1. **Encabezado compacto (Arriba - `Header.astro`)**: Barra superior mínima y limpia con el título corto a la izquierda y únicamente el botón de música a la derecha.
    2. **Tarjeta de Historia / Pista Activa (Arriba del pastel - `StoryGuide.astro`)**: Indicador de paso (`#step-indicator-text`) y texto narrativo (`#main-instruction`) justo encima del pastel en un contenedor compacto, legible y elegante.
    3. **El Pastel Interactivo (Centro flexible - `BirthdayCake.astro`)**: Contenedor SVG con `flex-1 min-h-0 flex items-center justify-center` y altura máxima controlada (`max-h-[48dvh]` / `max-h-[52dvh]` en móvil) para adaptarse automáticamente al espacio central disponible.
    4. **Botón de Acción Principal Fijo y Visible (Abajo del pastel - `StoryGuide.astro`)**: Botón principal (`#primary-action-btn`, acompañado de `#replay-magic-btn` al completar el Acto 3) situado en la parte inferior de la pantalla, siempre visible y al alcance del pulgar.
  - **BREAKING**: Eliminar el globo flotante redundante sobre el pastel (`#cake-speech-bubble` y `#bubble-text`) en `BirthdayCake.astro` para ganar espacio vertical y evitar textos duplicados con la pista superior.
- **Interacción Táctil Directa y Sincronizada en el Pastel SVG (`BirthdayCake.astro`, `global.css`)**:
  - **Áreas de toque ampliadas (Hitboxes invisibles)**: Agregar figuras transparentes (`fill="transparent"`) más grandes alrededor de las 3 velas/banderitas del castillo, de la princesa hada con su varita (`#fairy-princess-doll`) y de la Puerta #4 (`#cake-door-panel`), facilitando el toque con el dedo en pantallas pequeñas.
  - **Sincronización total con el flujo de la historia**: Tocar directamente el objetivo activo del pastel en cada acto (la varita/hada en el Acto 1, las velas en el Acto 2 o la puerta en el Acto 3) ejecuta exactamente el mismo avance de historia que presionar el botón principal inferior.
  - **Guía visual clara (Destello en el objetivo activo)**: Aplicar un resplandor pulsante (`target-active-glow` / `animate-glow` o halo dorado suave) únicamente sobre la parte del pastel que corresponde tocar en el paso actual (princesa hada y varita en el Acto 1, velas del castillo en el Acto 2, puerta floral en el Acto 3).
- **Modal de Invitación Adaptado a Móvil (`InvitationModal.astro`)**:
  - Optimizar el contenedor interno de `#invitation-modal` con `max-h-[90dvh] overflow-y-auto` y espaciados/tipografías compactas (`p-4 sm:p-6`) para que en teléfonos pequeños se visualice de forma impecable con desplazamiento interno suave y botones finales siempre accesibles.

## Capabilities

### New Capabilities
- `mobile-first-single-screen-layout`: Diseño responsive de pantalla única (`100dvh` sin scroll), jerarquía vertical móvil (encabezado compacto → pista narrativa → pastel flexible sin globo redundante → botón de acción inferior), áreas táctiles ampliadas (`fill="transparent"`), resplandor dinámico en el objetivo activo del SVG y modal de invitación con scroll interno (`max-h-[90dvh]`).

### Modified Capabilities
- `linear-storytelling-flow`: Sincronización táctil directa donde tocar el objetivo activo del pastel (incluyendo un solo toque en las velas durante el Acto 2) ejecuta exactamente el mismo avance de historia que el botón inferior, acompañado de un indicador visual pulsante sobre el elemento activo de cada acto.
- `spanish-localization-sofia`: Actualización del requisito de textos dinámicos de la guía interactiva para reflejar la eliminación del globo redundante `#cake-speech-bubble` (`#bubble-text`).

## Impact

- `src/layouts/Layout.astro` y `src/pages/index.astro`: Estructura `h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between` y distribución responsive para móvil y escritorio.
- `src/components/Header.astro`: Encabezado compacto con título corto a la izquierda y botón de música a la derecha.
- `src/components/StoryGuide.astro`: Separación visual entre la tarjeta de pista superior (arriba del pastel en móvil) y la barra de acción inferior (abajo del pastel en móvil).
- `src/components/BirthdayCake.astro` y `src/styles/global.css`: Eliminación de `#cake-speech-bubble`, ajuste `flex-1 min-h-0`, hitboxes transparentes ampliados (`fill="transparent"`), sincronización táctil de un toque en Acto 2 y clases de resplandor pulsante por acto.
- `src/components/InvitationModal.astro`: Contenedor compacto con `max-h-[90dvh] overflow-y-auto` y `p-4 sm:p-6`.
- `src/components/Footer.astro`: Integración compacta que no exceda el `100dvh`.
