# Proposal

## Why

La interfaz actual presenta múltiples caminos simultáneos (botones para saltar directamente a la invitación, botón secundario de "Ver invitación" visible desde el inicio y un panel inferior con botones pequeños de "Hotspots") que compiten por la atención del usuario y diluyen el factor sorpresa. Además, al tratarse de una aplicación web estática sin backend, funciones como el formulario de RSVP/muro de deseos y el modal de personalización en la vista de invitados agregan complejidad innecesaria. Transformar la experiencia en un cuento interactivo lineal y guiado en 3 actos convierte la Tarjeta de Invitación Real en el gran tesoro que se descubre al final del recorrido mágico.

## What Changes

- **Prólogo en Pantalla de Bienvenida (`WelcomeOverlay.astro`)**:
  - Presentar la introducción narrativa del cuento (*"Había una vez un reino mágico que se preparaba para celebrar un día muy especial..."*).
  - **BREAKING**: Eliminar el botón `"Saltar directamente a la tarjeta de invitación →"` (`[data-action="skip-to-invitation"]`), dejando un único botón mágico para comenzar el cuento e ir al pastel.
- **Nuevo Flujo Narrativo Lineal en 3 Actos (`StoryGuide.astro`, `BirthdayCake.astro`, `partyStore.ts`)**:
  - **Acto 1: La Magia del Hada (Despertar el Pastel)**: Guía al usuario a tocar a la pequeña princesa hada con su varita (o el botón de acción principal único) para agitar su varita mágica, llenar el pastel de polvo de hadas y despertar la magia del castillo, avanzando al Acto 2.
  - **Acto 2: El Deseo Real (Soplar las Velas)**: Una vez activada la varita, invita a pedir un deseo de cumpleaños y tocar las 3 banderitas/velas encendidas del castillo (o el botón principal) para apagarlas, avanzando al Acto 3.
  - **Acto 3: El Secreto detrás de la Puerta #4 (El Gran Descubrimiento)**: Al apagar las velas, anuncia que el deseo ha desbloqueado la Puerta Floral #4 del pastel, la cual brilla intensamente (`door-ready`). Al tocar la puerta (o el botón principal), se abre en 3D con sonido mágico y revela automáticamente la Tarjeta de Invitación Real como recompensa final.
  - **Estado Final (Cuento Completado)**: Una vez completado el Acto 3, muestra claramente el botón principal para volver a abrir la Tarjeta de Invitación Real y un botón secundario para repetir la magia desde el Acto 1 (`party:reset-cake`).
  - **BREAKING**: Eliminar el botón secundario `"Ver invitación"` visible desde el inicio y el panel inferior de `"Hotspots / Leyenda de botones pequeños"` en `StoryGuide.astro`.
- **Simplificación de la Interfaz Estática (`Header.astro`, `InvitationModal.astro`, `CustomizeModal.astro`, `index.astro`, `partyStore.ts`)**:
  - **BREAKING**: Eliminar por completo el sistema de RSVP y Muro de Deseos (`[data-action="toggle-rsvp"]`, `<rsvp-wall>`, `#rsvp-drawer`, `#rsvp-form`, `#wishes-list`, y el arreglo `wishes` e interfaz `BirthdayWish` en `partyStore.ts`).
  - **BREAKING**: Eliminar el modal de personalización de la vista de invitados (`CustomizeModal.astro` y su referencia en `index.astro` y `Header.astro`), manteniendo todos los datos centralizados en `partyState` dentro de `src/scripts/partyStore.ts`.
  - **BREAKING**: Simplificar el pie de la Tarjeta de Invitación (`InvitationModal.astro`) para dejar únicamente dos botones limpios: `"Celebrar con Confeti"` (`celebrateGrandFinale()`) y `"Cerrar / Volver al Pastel"` (`closeModal()`), eliminando también el botón de copiar detalles al portapapeles.
- **Integridad Visual y Técnica**:
  - Conservar intacto el diseño del pastel en SVG, la paleta de colores (`#966859`, `#E6C0CF`, `#DCB4B7`, `#F2F8F6`, `#CDB37B`, `#F2F2F2`), las partículas en Canvas y las melodías de Web Audio API.

## Capabilities

### New Capabilities
- `linear-storytelling-flow`: Flujo narrativo interactivo y lineal de cumpleaños estructurado en Prólogo y 3 Actos (Acto 1: La Magia del Hada, Acto 2: El Deseo Real, Acto 3: El Secreto detrás de la Puerta #4) con revelación exclusiva de la invitación al final y controles simplificados sin funciones de servidor.

### Modified Capabilities
- `spanish-localization-sofia`: Actualización de los requisitos de localización en español para alinearlos con los textos de los 3 actos narrativos y reflejar la eliminación del muro de deseos RSVP, copia al portapapeles, leyenda de hotspots y modal de personalización.

## Impact

- `src/scripts/partyStore.ts`: Actualización del tipo `PartyState` (`step: 1 | 2 | 3 | 4`, eliminación de `BirthdayWish` y `wishes`, centralización de datos del evento).
- `src/components/WelcomeOverlay.astro`: Narrativa de prólogo y botón único para iniciar el cuento.
- `src/components/StoryGuide.astro`: Textos e iconos guiados para los Actos 1, 2, 3 y estado completado; eliminación del botón secundario inicial de invitación y de la leyenda de hotspots.
- `src/components/BirthdayCake.astro`: Sincronización de interacciones del pastel SVG con la máquina de estados de 3 actos (`step 1` varita → `step 2` velas → `step 3` puerta → `step 4` invitación revelada).
- `src/components/InvitationModal.astro`: Eliminación de `<rsvp-wall>`, `#rsvp-drawer`, `#rsvp-form`, `#wishes-list` y botón de copiar; conservación exclusiva de `"Celebrar con Confeti"` y `"Cerrar / Volver al Pastel"`.
- `src/components/Header.astro`, `src/components/CustomizeModal.astro` y `src/pages/index.astro`: Limpieza de referencias y eliminación del modal de personalización de la vista de invitados.
