# Spec Delta

## MODIFIED Requirements

### Requirement: Eliminación de micro-textos en móvil en el encabezado e indicador de progreso
El sistema SHALL eliminar los micro-textos en dispositivos móviles (`< 640px`) en el indicador de paso (`#step-indicator-text`) aplicando `text-sm sm:text-xs` con buen contraste, y MUST mantener `text-sm` en el título del evento y en el botón de música (`#btn-sound`) dentro del `<header>` cuando este es visible en pantallas `md:` y superiores, mientras en móvil (`< 768px`) el `<header>` permanece oculto (`hidden md:flex`) y el control de sonido se muestra como botón circular flotante (`w-10 h-10`).

#### Scenario: Lectura del encabezado e indicador de paso en pantallas móviles
- **WHEN** el usuario visualiza la pantalla principal en un dispositivo móvil (`< 640px`) y en pantallas `md:` o superiores
- **THEN** en móvil `#step-indicator-text` se muestra con `text-sm sm:text-xs` y el botón flotante de sonido tiene dimensiones `w-10 h-10` sin micro-textos, mientras que desde `md:` el `<header>` muestra el título del evento y `#btn-sound` con clase `text-sm`
