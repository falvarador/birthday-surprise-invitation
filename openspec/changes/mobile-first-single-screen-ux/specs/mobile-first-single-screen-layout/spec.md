# Spec Delta

## Purpose

Garantiza una experiencia Mobile-First de pantalla única (`100dvh`) sin desplazamiento vertical donde el encabezado compacto, la tarjeta de pista activa, el pastel interactivo SVG y el botón de acción principal caben íntegramente en la ventana visible, con áreas táctiles ampliadas, guía visual pulsante en el pastel y un modal de invitación optimizado para pantallas móviles.

## ADDED Requirements

### Requirement: Diseño de pantalla única sin scroll con jerarquía vertical intuitiva en móvil
El sistema SHALL estructurar la vista principal dentro del alto visible de la ventana (`h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between`) sin requerir scroll de página, y MUST presentar en dispositivos móviles el orden visual de arriba hacia abajo: (1) encabezado compacto con título corto a la izquierda y botón de música a la derecha, (2) tarjeta de historia/pista activa encima del pastel, (3) pastel SVG flexible en el centro (`flex-1 min-h-0 flex items-center justify-center` sin `#cake-speech-bubble`), y (4) botón de acción principal (`#primary-action-btn`) fijo y visible en la parte inferior al alcance del pulgar.

#### Scenario: Visualización completa sin scroll en pantallas móviles y de escritorio
- **WHEN** el usuario visualiza la pantalla principal en un teléfono móvil o en escritorio
- **THEN** el contenedor principal aplica `h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between`, el globo redundante `#cake-speech-bubble` no existe, y tanto la pista activa como el pastel SVG y el botón `#primary-action-btn` permanecen completamente visibles dentro del viewport sin barras de desplazamiento en la página

#### Scenario: Orden visual vertical en dispositivos móviles
- **WHEN** el usuario abre la experiencia en una pantalla móvil
- **THEN** los elementos se muestran de arriba hacia abajo en el orden: encabezado compacto (título corto a la izquierda y botón `#btn-sound` a la derecha), tarjeta de historia con `#step-indicator-text` y `#main-instruction`, contenedor flexible del pastel `#birthday-cake-svg` (`max-h-[48dvh]` a `max-h-[52dvh]`), y botón de acción `#primary-action-btn` en la parte inferior

### Requirement: Áreas de toque ampliadas y resplandor visual en el objetivo activo del pastel SVG
El sistema SHALL incluir áreas de toque invisibles (`fill="transparent"`) ampliadas alrededor de las 3 velas/banderitas del castillo, de la princesa hada con su varita y de la puerta del pastel, y MUST mostrar un resplandor o destello pulsante únicamente sobre el elemento del pastel que corresponde tocar en el acto actual.

#### Scenario: Áreas táctiles transparentes ampliadas en el SVG
- **WHEN** el usuario intenta tocar con el dedo la princesa hada/varita, las 3 velas del castillo o la puerta en una pantalla pequeña
- **THEN** cada uno de esos grupos interactivos cuenta con una superficie `fill="transparent"` ampliada que captura el toque con facilidad

#### Scenario: Destello guía dinámico según el acto activo
- **WHEN** el cuento se encuentra en el Acto 1, Acto 2 o Acto 3
- **THEN** únicamente el objetivo correspondiente al acto actual (la princesa hada/varita en el Acto 1, las velas del castillo en el Acto 2, o la puerta en el Acto 3) exhibe una animación de resplandor pulsante que guía la vista y el dedo del usuario

### Requirement: Modal de invitación adaptado a pantallas móviles con scroll interno
El sistema SHALL presentar el contenedor interno de la tarjeta de invitación (`#invitation-modal`) con altura máxima controlada (`max-h-[90dvh] overflow-y-auto`) y espaciados compactos (`p-4 sm:p-6`) para que todo su contenido y los botones finales sean accesibles en teléfonos pequeños.

#### Scenario: Apertura de la tarjeta de invitación en un dispositivo móvil pequeño
- **WHEN** se abre el modal `#invitation-modal` en una pantalla móvil
- **THEN** la tarjeta se ajusta dentro de `max-h-[90dvh]` con desplazamiento interno suave (`overflow-y-auto`) y márgenes compactos (`p-4 sm:p-6`), permitiendo leer todos los detalles y pulsar los botones `"Celebrar con Confeti"` y `"Cerrar / Volver al Pastel"` sin cortes
