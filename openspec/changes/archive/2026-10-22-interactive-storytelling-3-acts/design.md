# Design

## Context

El proyecto está construido en Astro con Tailwind CSS v4 (`@tailwindcss/vite`) y HTML Web Components que se comunican mediante eventos personalizados en `window` y un estado compartido en `src/scripts/partyStore.ts`. Aunque la solicitud de diseño menciona `index.html`, la arquitectura actual del proyecto modulariza dicha página en componentes Astro (`WelcomeOverlay.astro`, `Header.astro`, `StoryGuide.astro`, `BirthdayCake.astro`, `InvitationModal.astro`, `ToastBanner.astro`, `Footer.astro`, `SparkleCanvas.astro`).

Actualmente, `partyState.step` modela 3 pasos donde el paso 1 es soplar las velas, el paso 2 es abrir la puerta y el paso 3 es la invitación revelada, mientras que la varita del hada es solo un efecto secundario aislado. Además, existen botones para saltar a la invitación desde el inicio, una leyenda de "Hotspots", un cajón de RSVP/muro de deseos sin backend y un componente `CustomizeModal.astro`. Consulta `proposal.md` para la motivación completa.

## Goals / Non-Goals

**Goals:**
- Diseñar una máquina de estados lineal de 3 actos + estado completado (`step: 1 | 2 | 3 | 4`) donde cada acto desbloquea el siguiente de forma natural y orgánica.
- Garantizar que la Tarjeta de Invitación Real (`#invitation-modal`) solo pueda abrirse tras completar el Acto 3.
- Simplificar los componentes eliminando el código muerto o sin servidor (`rsvp-wall`, `CustomizeModal.astro`, leyenda de hotspots y botones de salto directo).
- Preservar íntegramente el arte SVG del pastel (con el número `"4"` de la edad actual de Sofía en la puerta), la paleta de colores, las partículas en Canvas y las melodías de Web Audio API.

**Non-Goals:**
- No se introducirá persistencia en servidor ni almacenamiento externo.
- No se modificará la geometría del pastel SVG, las animaciones CSS existentes ni la síntesis de audio en `src/scripts/audioManager.ts`.

## Decisions

### 1. Máquina de estados de 3 Actos + Estado Final (`step: 1 | 2 | 3 | 4`)
- **Decisión**: Ampliar `partyState.step` en `src/scripts/partyStore.ts` a `1 | 2 | 3 | 4` y añadir `wandActivated: boolean`:
  - **`step = 1` (Acto 1: La Magia del Hada - Despertar el Pastel)**:
    - Indicador (`#step-indicator-text`): `"Acto 1 de 3 • La Magia del Hada"`
    - Instrucción (`#main-instruction`): Guía al usuario a tocar a la pequeña princesa hada con su varita (o el botón principal `"✨ Agitar la Varita Mágica"`) para llenar el pastel de polvo de hadas y encender la magia del castillo.
    - Burbuja del pastel (`#bubble-text`): `"¡Toca a la princesita hada o su varita estrellada para despertar la magia! 🪄✨"`
    - Al ejecutar `triggerMagicWand()` en `step === 1`, se marca `partyState.wandActivated = true`, se avanza a `partyState.step = 2` y se emite `party:step-changed`.
  - **`step = 2` (Acto 2: El Deseo Real - Soplar las Velas)**:
    - Indicador: `"Acto 2 de 3 • El Deseo Real"`
    - Instrucción: Invita a pedir un deseo de cumpleaños y tocar las 3 banderitas/velas encendidas del castillo (o el botón principal `"🕯️ Soplar las Velas"`) para apagarlas.
    - Burbuja del pastel: `"¡Pide un deseo y toca las 3 velas encendidas del castillo para soplarlas! 🕯️✨"`
    - Al apagar las 3 velas (`checkAllCandlesBlown()`), se reproduce la melodía de cumpleaños, se activa la clase `.door-ready` en `#cake-door-panel` para que brille intensamente y se avanza a `partyState.step = 3`.
  - **`step = 3` (Acto 3: El Secreto detrás de la Puerta #4 - El Gran Descubrimiento)**:
    - Indicador: `"Acto 3 de 3 • El Secreto de la Puerta #4"`
    - Instrucción: Anuncia que el deseo ha desbloqueado la Puerta Floral #4 del pastel e invita a tocar la puerta brillante (o el botón principal `"🚪 Abrir la Puerta #4"`) para descubrir el gran tesoro.
    - Burbuja del pastel: `"¡Tu deseo desbloqueó la Puerta Floral #4! ¡Tócala para abrirla! 🚪✨"`
    - Al abrir la puerta (`toggleCakeDoor()`), el panel gira en 3D (`.door-open`) con sonido mágico y partículas, se avanza a `partyState.step = 4` y tras la breve animación (`1150ms`) se emite `party:open-invitation` para revelar automáticamente la Tarjeta de Invitación Real.
  - **`step = 4` (Cuento Completado - El Gran Tesoro Revelado)**:
    - Indicador: `"✨ Cuento Completado • ¡Estás Invitado!"`
    - Instrucción: Celebra que el secreto real ha sido descubierto e invita a abrir la tarjeta o repetir la magia cuando quieran.
    - Botón principal (`#primary-action-btn`): `"💌 Ver Tarjeta de Invitación"` (emite `party:open-invitation`).
    - Botón secundario visible únicamente en `step === 4` (`#replay-magic-btn`): `"🔄 Repetir la Magia"` (emite `party:reset-cake`, que restaura `step = 1`, `wandActivated = false`, enciende las velas y cierra la puerta).
- **Alternativa considerada**: Mantener solo 3 valores en `step` sobrecargando `step === 3` con un booleano `doorOpen`. Se descartó porque separar `step = 3` (Acto 3 listo para abrir la puerta) y `step = 4` (Acto 3 completado y tarjeta desbloqueada) hace explícita la transición de la interfaz y la aparición de los botones de relectura y repetición.

### 2. Protección de interacciones en el SVG del pastel (`BirthdayCake.astro`)
- **Decisión**:
  - En `#birthday-plaque`, cambiar `data-cake-action="open-invitation"` por `data-cake-action="wand"` para que tocar la placa del pastel antes de completar la historia no abra prematuramente la invitación, sino que lance destellos mágicos.
  - Si el usuario toca las velas durante el Acto 1 (`step === 1`), mostrar un mensaje amigable en `#toast-banner` indicando que primero despierte la magia del pastel tocando la varita del hada.
  - Si el usuario toca la puerta `#cake-door-panel` antes del Acto 3 (`step < 3`), mostrar un mensaje en `#toast-banner` indicando el paso actual (primero despertar la magia con el hada o soplar las velas pidiendo un deseo) sin abrir la puerta antes de tiempo.
- **Racional**: Evita que toques accidentales en el SVG rompan la secuencia lineal de los 3 actos antes de descubrir el tesoro final.

### 3. Eliminación limpia de componentes y funciones sin servidor
- **Decisión**:
  - En `src/scripts/partyStore.ts`, eliminar la interfaz `BirthdayWish` y la propiedad `wishes`, y sincronizar `venue` con `'Casa Club, Condominio Uniko San Francisco'` para que `partyState` sea la única fuente de verdad centralizada.
  - Eliminar `src/components/CustomizeModal.astro`, su importación en `src/pages/index.astro` y el código relacionado en `src/components/Header.astro`.
  - En `src/components/InvitationModal.astro`, eliminar `<rsvp-wall>`, `RsvpWallElement`, `copyInvitationText` y dejar en el pie del modal únicamente dos botones:
    1. `"🎊 Celebrar con Confeti"` (`data-action="celebrate"` → `celebrateGrandFinale()`)
    2. `"✕ Cerrar / Volver al Pastel"` (`data-action="close-modal"` → `closeModal()`)

## Risks / Trade-offs

- **[Risk] Tocar partes del pastel fuera de orden** → **Mitigación**: Cuando el usuario toca las velas en el Acto 1 o la puerta antes del Acto 3, se reproduce un sonido suave y un toast guiado que le recuerda con cariño qué elemento del cuento debe tocar a continuación.
- **[Risk] Número de la puerta en las instrucciones (#3 vs #4)** → **Mitigación**: Dado que la edad configurada de Sofía es `4` años (`partyState.age = '4'`), todos los textos dinámicos y el SVG usan `${partyState.age}` (`#4`), manteniendo coherencia total en toda la experiencia.
