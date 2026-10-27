# Spec Delta

## MODIFIED Requirements

### Requirement: Diseño de pantalla única sin scroll con jerarquía vertical intuitiva en móvil
El sistema SHALL estructurar la vista principal dentro del alto visible de la ventana (`h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between`) sin requerir scroll de página, ocultando el `<header>` principal en dispositivos móviles (`hidden md:flex`), reubicando el control de audio como un botón circular flotante independiente (`fixed top-3 right-3 z-50 w-10 h-10 bg-white/80 backdrop-blur-sm`) y aplicando `py-3 px-4` en `<main>`, y MUST presentar en dispositivos móviles el orden visual de arriba hacia abajo: (1) tarjeta de historia/pista activa en la parte superior con margen cómodo (`mt-2`), `#step-indicator-text` (`text-sm sm:text-xs`), `#main-heading` (`text-4xl sm:text-5xl lg:text-6xl`) y `#main-instruction` (`text-base sm:text-lg leading-snug p-3.5 sm:p-4`), (2) pastel SVG con mayor protagonismo en el centro (`flex-1 min-h-0 flex items-center justify-center` sin `#cake-speech-bubble`), y (3) botón de acción principal (`#primary-action-btn` en `text-base sm:text-lg font-bold`) fijo y visible en la parte inferior al alcance del pulgar.

#### Scenario: Visualización completa sin scroll en pantallas móviles y de escritorio
- **WHEN** el usuario visualiza la pantalla principal en un teléfono móvil (`< 768px`) o en escritorio (`md:` y superiores)
- **THEN** en móvil el `<header>` está oculto (`hidden md:flex`), el control de audio aparece como botón circular flotante (`fixed top-3 right-3 z-50 w-10 h-10`), el contenedor principal aplica `h-[100dvh] max-h-[100dvh] overflow-hidden flex flex-col justify-between` y tanto la pista activa como el pastel SVG y el botón `#primary-action-btn` permanecen completamente visibles dentro del viewport sin barras de desplazamiento, mientras que en `md:` y superiores se muestra el `<header>` superior completo

#### Scenario: Orden visual vertical en dispositivos móviles
- **WHEN** el usuario abre la experiencia en una pantalla móvil
- **THEN** el `<header>` no ocupa espacio en el flujo vertical, el botón de música flota discretamente en la esquina superior derecha (`fixed top-3 right-3 z-50 w-10 h-10`), y dentro de `<main>` (`py-3 px-4`) se muestran de arriba hacia abajo: la tarjeta de historia con margen superior `mt-2`, el contenedor flexible del pastel `#birthday-cake-svg` con mayor protagonismo central (`max-h-[54dvh]` a `max-h-[56dvh]`), y el botón de acción `#primary-action-btn` en la parte inferior
