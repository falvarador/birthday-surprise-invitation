# mobile-first-single-screen-layout Specification

## Purpose

Garantiza una experiencia Mobile-First de pantalla única (`100dvh`) sin desplazamiento vertical donde el encabezado compacto, la tarjeta de pista activa, el pastel interactivo SVG y el botón de acción principal caben íntegramente en la ventana visible, con áreas táctiles ampliadas, guía visual pulsante en el pastel y un modal de invitación optimizado para pantallas móviles.

## Requirements

### Requirement: Diseño de pantalla única sin scroll con jerarquía vertical intuitiva en móvil
El sistema SHALL estructurar la vista principal dentro del alto visible de la ventana (`h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between`) sin requerir scroll de página, ocultando el `<header>` principal en dispositivos móviles (`hidden md:flex`), reubicando el control de audio como un botón circular flotante independiente (`fixed top-3 right-3 z-50 w-10 h-10 bg-white/80 backdrop-blur-sm`) y aplicando `py-3 px-4` en `<main>`, y MUST presentar en dispositivos móviles el orden visual de arriba hacia abajo: (1) tarjeta de historia/pista activa en la parte superior con margen cómodo (`mt-2`), `#step-indicator-text` (`text-sm sm:text-xs`), `#main-heading` (`text-4xl sm:text-5xl lg:text-6xl`) y `#main-instruction` (`text-base sm:text-lg leading-snug p-3.5 sm:p-4`), (2) pastel SVG con mayor protagonismo en el centro (`flex-1 min-h-0 flex items-center justify-center` sin `#cake-speech-bubble`), y (3) botón de acción principal (`#primary-action-btn` en `text-base sm:text-lg font-bold`) fijo y visible en la parte inferior al alcance del pulgar.

#### Scenario: Visualización completa sin scroll en pantallas móviles y de escritorio
- **WHEN** el usuario visualiza la pantalla principal en un teléfono móvil (`< 768px`) o en escritorio (`md:` y superiores)
- **THEN** en móvil el `<header>` está oculto (`hidden md:flex`), el control de audio aparece como botón circular flotante (`fixed top-3 right-3 z-50 w-10 h-10`), el contenedor principal aplica `h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between` y tanto la pista activa como el pastel SVG y el botón `#primary-action-btn` permanecen completamente visibles dentro del viewport sin barras de desplazamiento, mientras que en `md:` y superiores se muestra el `<header>` superior completo

#### Scenario: Orden visual vertical en dispositivos móviles
- **WHEN** el usuario abre la experiencia en una pantalla móvil
- **THEN** el `<header>` no ocupa espacio en el flujo vertical, el botón de música flota discretamente en la esquina superior derecha (`fixed top-3 right-3 z-50 w-10 h-10`), y dentro de `<main>` (`py-3 px-4`) se muestran de arriba hacia abajo: la tarjeta de historia con margen superior `mt-2`, el contenedor flexible del pastel `#birthday-cake-svg` con mayor protagonismo central (`max-h-[54dvh]` a `max-h-[56dvh]`), y el botón de acción `#primary-action-btn` en la parte inferior

### Requirement: Áreas de toque ampliadas y resplandor visual en el objetivo activo del pastel SVG
El sistema SHALL incluir áreas de toque invisibles (`fill="transparent"`) ampliadas alrededor de las 3 velas/banderitas del castillo, de la princesa hada con su varita y de la puerta del pastel, y MUST mostrar un resplandor o destello pulsante únicamente sobre el elemento del pastel que corresponde tocar en el acto actual.

#### Scenario: Áreas táctiles transparentes ampliadas en el SVG
- **WHEN** el usuario intenta tocar con el dedo la princesa hada/varita, las 3 velas del castillo o la puerta en una pantalla pequeña
- **THEN** cada uno de esos grupos interactivos cuenta con una superficie `fill="transparent"` ampliada que captura el toque con facilidad

#### Scenario: Destello guía dinámico según el acto activo
- **WHEN** el cuento se encuentra en el Acto 1, Acto 2 o Acto 3
- **THEN** únicamente el objetivo correspondiente al acto actual (la princesa hada/varita en el Acto 1, las velas del castillo en el Acto 2, o la puerta en el Acto 3) exhibe una animación de resplandor pulsante que guía la vista y el dedo del usuario

### Requirement: Modal de invitación adaptado a pantallas móviles con scroll interno
El sistema SHALL presentar el contenedor interno de la tarjeta de invitación (`#invitation-modal`) con altura máxima controlada (`max-h-[90dvh] overflow-y-auto`), espaciados compactos (`p-4 sm:p-6`) y tipografías legibles sin micro-textos (`#card-surprise-message` en `text-xl sm:text-2xl`, números del contador en `text-2xl sm:text-3xl`, etiquetas en `text-xs` y valores de detalles del evento en `text-base`) para que todo su contenido y los botones finales sean accesibles en teléfonos pequeños.

#### Scenario: Apertura de la tarjeta de invitación en un dispositivo móvil pequeño
- **WHEN** se abre el modal `#invitation-modal` en una pantalla móvil
- **THEN** la tarjeta se ajusta dentro de `max-h-[90dvh]` con desplazamiento interno suave (`overflow-y-auto`), márgenes compactos (`p-4 sm:p-6`) y textos ampliados de alta legibilidad, permitiendo leer todos los detalles y pulsar los botones `"Celebrar con Confeti"` y `"Cerrar / Volver al Pastel"` sin cortes
