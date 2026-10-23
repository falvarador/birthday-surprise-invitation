# Spec Delta

## MODIFIED Requirements

### Requirement: Diseño de pantalla única sin scroll con jerarquía vertical intuitiva en móvil
El sistema SHALL estructurar la vista principal dentro del alto visible de la ventana (`h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between`) sin requerir scroll de página, compensando el aumento tipográfico móvil mediante márgenes exteriores compactos (`mb-1` a `mb-2`) y rellenos reducidos (`py-2.5`, `p-3.5`), y MUST presentar en dispositivos móviles el orden visual de arriba hacia abajo: (1) encabezado compacto con título corto a la izquierda y botón de música a la derecha en `text-sm`, (2) tarjeta de historia/pista activa encima del pastel con `#step-indicator-text` (`text-sm sm:text-xs`), `#main-heading` (`text-4xl sm:text-5xl lg:text-6xl`) y `#main-instruction` (`text-base sm:text-lg leading-snug p-3.5 sm:p-4`), (3) pastel SVG flexible en el centro (`flex-1 min-h-0 flex items-center justify-center` sin `#cake-speech-bubble`), y (4) botón de acción principal (`#primary-action-btn` en `text-base sm:text-lg font-bold`) fijo y visible en la parte inferior al alcance del pulgar.

#### Scenario: Visualización completa sin scroll en pantallas móviles y de escritorio
- **WHEN** el usuario visualiza la pantalla principal en un teléfono móvil (`< 640px`) o en escritorio
- **THEN** el contenedor principal aplica `h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between`, los márgenes y rellenos móviles compactos compensan la tipografía ampliada, y tanto la pista activa como el pastel SVG y el botón `#primary-action-btn` permanecen completamente visibles dentro del viewport sin barras de desplazamiento en la página

#### Scenario: Orden visual vertical en dispositivos móviles
- **WHEN** el usuario abre la experiencia en una pantalla móvil
- **THEN** los elementos se muestran de arriba hacia abajo en el orden: encabezado compacto (título corto a la izquierda y botón `#btn-sound` a la derecha en `text-sm`), tarjeta de historia con `#step-indicator-text` y `#main-instruction` (`text-base sm:text-lg`), contenedor flexible del pastel `#birthday-cake-svg` (`max-h-[48dvh]` a `max-h-[52dvh]`), y botón de acción `#primary-action-btn` (`text-base sm:text-lg font-bold`) en la parte inferior

### Requirement: Modal de invitación adaptado a pantallas móviles con scroll interno
El sistema SHALL presentar el contenedor interno de la tarjeta de invitación (`#invitation-modal`) con altura máxima controlada (`max-h-[90dvh] overflow-y-auto`), espaciados compactos (`p-4 sm:p-6`) y tipografías legibles sin micro-textos (`#card-surprise-message` en `text-xl sm:text-2xl`, números del contador en `text-2xl sm:text-3xl`, etiquetas en `text-xs` y valores de detalles del evento en `text-base`) para que todo su contenido y los botones finales sean accesibles en teléfonos pequeños.

#### Scenario: Apertura de la tarjeta de invitación en un dispositivo móvil pequeño
- **WHEN** se abre el modal `#invitation-modal` en una pantalla móvil
- **THEN** la tarjeta se ajusta dentro de `max-h-[90dvh]` con desplazamiento interno suave (`overflow-y-auto`), márgenes compactos (`p-4 sm:p-6`) y textos ampliados de alta legibilidad, permitiendo leer todos los detalles y pulsar los botones `"Celebrar con Confeti"` y `"Cerrar / Volver al Pastel"` sin cortes
