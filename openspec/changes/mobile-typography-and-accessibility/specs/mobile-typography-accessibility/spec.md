# Spec Delta

## Purpose

Garantiza una tipografía responsiva y accesible en dispositivos móviles (`< 640px`), eliminando micro-textos (`10px`, `11px` y `text-xs`) y elevando la jerarquía de títulos, instrucciones narrativas, pantalla de bienvenida, tarjeta de invitación y textos SVG del pastel sin afectar el diseño de escritorio ni romper el layout de pantalla única (`100dvh`).

## ADDED Requirements

### Requirement: Eliminación de micro-textos en móvil en el encabezado e indicador de progreso
El sistema SHALL eliminar los micro-textos en dispositivos móviles (`< 640px`) en la barra superior (`header`) y en el indicador de paso (`#step-indicator-text`), aplicando `text-sm` en el título del evento y en el botón de música (`#btn-sound`), y `text-sm sm:text-xs` en `#step-indicator-text` con buen contraste.

#### Scenario: Lectura del encabezado e indicador de paso en pantallas móviles
- **WHEN** el usuario visualiza el encabezado superior y la píldora de progreso en una pantalla móvil (`< 640px`)
- **THEN** el título del evento y el botón `#btn-sound` se muestran con clase `text-sm`, y `#step-indicator-text` se muestra con `text-sm sm:text-xs` sin emplear `text-xs`, `text-[11px]` ni `text-[10px]` en móvil

### Requirement: Jerarquía tipográfica y lectura cómoda de la historia principal y acción primaria
El sistema SHALL presentar en dispositivos móviles (`< 640px`) el título principal (`#main-heading`) con escala `text-4xl sm:text-5xl lg:text-6xl`, la caja de instrucción narrativa (`#main-instruction`) con `text-base sm:text-lg`, interlineado `leading-snug` y relleno compacto (`p-3.5 sm:p-4`), y el botón de acción principal (`#primary-action-btn`) con `text-base sm:text-lg font-bold`.

#### Scenario: Visualización de la tarjeta de historia y botón principal en móvil
- **WHEN** el usuario lee el bloque narrativo y observa el botón de acción principal en un teléfono móvil
- **THEN** `#main-heading` se renderiza con `text-4xl sm:text-5xl lg:text-6xl`, `#main-instruction` usa `text-base sm:text-lg leading-snug p-3.5 sm:p-4`, y `#primary-action-btn` usa `text-base sm:text-lg font-bold`

### Requirement: Legibilidad mejorada en el modal de bienvenida y en la tarjeta de invitación
El sistema SHALL mostrar en la pantalla de bienvenida (`#welcome-overlay`) el subtítulo superior en `text-sm` y el párrafo del cuento en `text-base sm:text-lg`, y MUST mostrar en la tarjeta de invitación (`#invitation-modal`) el mensaje sorpresa (`#card-surprise-message`) en `text-xl sm:text-2xl`, los números del contador (`#cd-days`, `#cd-hours`, `#cd-mins`, `#cd-secs`) en `text-2xl sm:text-3xl` con etiquetas en `text-xs`, y los detalles del evento (etiquetas en `text-xs` y valores `#card-date-display`, `#card-time-display`, `#card-venue-display`, `#card-dress-display` en `text-base`).

#### Scenario: Lectura de la pantalla de bienvenida en móvil
- **WHEN** el usuario abre la pantalla de bienvenida `#welcome-overlay` en un dispositivo móvil
- **THEN** el subtítulo superior ("Anuncio real") tiene tamaño `text-sm` y el párrafo narrativo tiene tamaño `text-base sm:text-lg`

#### Scenario: Lectura de la tarjeta de invitación en móvil
- **WHEN** se abre el modal `#invitation-modal` en un dispositivo móvil
- **THEN** `#card-surprise-message` se muestra en `text-xl sm:text-2xl`, los números del contador regresivo se muestran en `text-2xl sm:text-3xl` con etiquetas en `text-xs`, y los detalles de fecha, hora, lugar y código de vestimenta muestran sus etiquetas en `text-xs` y sus valores en `text-base`

### Requirement: Nitidez y legibilidad de los textos dentro del pastel SVG
El sistema SHALL incrementar ligeramente el `font-size` y `font-weight` de los elementos `<text>` dentro de `#birthday-cake-svg` en la placa circular (`#birthday-plaque`) y en el interior secreto de la puerta (`#door-secret-interior`) para que permanezcan nítidos y legibles cuando el SVG se escala en pantallas móviles.

#### Scenario: Visualización de la placa redonda y el interior de la puerta en el pastel SVG en móvil
- **WHEN** el pastel `#birthday-cake-svg` se adapta al espacio central en una pantalla móvil
- **THEN** los textos de `#birthday-plaque` ("Feliz", "Cumpleaños", "Sofía") y de `#door-secret-interior` ("¡Estás Invitado!", "VER CARTA ✨") mantienen un tamaño y grosor de fuente reforzados sin desbordarse de sus contenedores SVG
