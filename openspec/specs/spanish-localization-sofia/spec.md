# spanish-localization-sofia Specification

## Purpose

Proporciona una experiencia de invitación y sorpresa de cumpleaños completamente localizada al español y personalizada para la princesa Sofía, preservando el diseño visual, las proporciones del SVG y la interactividad original.

## Requirements

### Requirement: Idioma del documento y personalización del nombre a Sofía
El sistema SHALL definir el atributo de idioma principal del documento HTML como `lang="es"` y MUST mostrar `"Sofía"` como nombre por defecto y `"4"` como edad en todos los elementos visibles y estados iniciales en lugar de `"Yashika"`.

#### Scenario: Carga inicial del documento y visualización del nombre
- **WHEN** el usuario carga la página principal de la invitación
- **THEN** el elemento raíz `<html>` tiene `lang="es"` y el nombre `"Sofía"` aparece en la pantalla de bienvenida, el encabezado, la guía interactiva, la placa del pastel SVG, la tarjeta de invitación y el pie de página

#### Scenario: Estructura natural de edad y cumpleaños en el encabezado
- **WHEN** se muestra el indicador del encabezado superior
- **THEN** el texto presenta una estructura natural en español indicando que `"Sofía"` está cumpliendo `"4"` años, manteniendo los elementos dinámicos para el nombre y la edad

### Requirement: Traducción y ajuste visual de textos en el pastel SVG
El sistema SHALL mostrar los textos dentro del SVG del pastel (`#birthday-cake-svg`) en español sin desbordar los contenedores gráficos circulares ni los botones internos.

#### Scenario: Placa circular de cumpleaños en el pastel
- **WHEN** se renderiza el grupo `#birthday-plaque` en el SVG del pastel
- **THEN** las líneas de texto muestran `"Feliz"`, `"Cumpleaños"` (con un tamaño de fuente ajustado para encajar dentro del círculo interior) y `"Sofía"`

#### Scenario: Interior de la puerta secreta del pastel
- **WHEN** el usuario abre la puerta `#cake-door-panel` y observa `#door-secret-interior`
- **THEN** el encabezado interno muestra `"¡Estás Invitado!"` y el botón de acción muestra `"VER CARTA ✨"` encajando dentro de la tarjeta interior

### Requirement: Traducción de la guía interactiva de 3 pasos y controles del pastel
El sistema SHALL presentar en español todos los textos estáticos y las actualizaciones dinámicas de los 3 actos del cuento y su estado completado (`#step-indicator-text`, `#main-instruction`, `#primary-action-text`), así como los controles de audio del encabezado compacto.

#### Scenario: Progreso interactivo por los 3 actos del pastel
- **WHEN** el usuario avanza del Acto 1 (despertar la magia con la varita del hada) al Acto 2 (pedir un deseo y soplar las velas), al Acto 3 (abrir la puerta secreta) y al estado final completado, o repite la magia
- **THEN** `#step-indicator-text`, `#main-instruction` y `#primary-action-text` actualizan su contenido íntegramente en español reflejando el nombre y la edad actuales

#### Scenario: Alternancia del botón de sonido y notificaciones emergentes
- **WHEN** el usuario activa o silencia el botón `#btn-sound` o interactúa con la varita, las velas o la puerta del pastel
- **THEN** la etiqueta `#sound-label` alterna entre los estados de música activa y silenciada en español, y el banner `#toast-banner` muestra los mensajes emergentes (`showToast`) en español

### Requirement: Traducción de modales de invitación, contador, RSVP y personalización
El sistema SHALL mostrar en español todos los textos de la tarjeta de invitación (`#invitation-modal`), el contador regresivo, los datos del evento centralizados en el estado y las fechas formateadas con configuración regional `es-ES`.

#### Scenario: Visualización del contador regresivo y fecha localizada
- **WHEN** se abre el modal de invitación `#invitation-modal`
- **THEN** las etiquetas del contador muestran `"Días"`, `"Horas"`, `"Mins"` y `"Segs"`, y la fecha del evento se formatea mediante `toLocaleDateString('es-ES', ...)`

#### Scenario: Valores iniciales y acciones de la tarjeta de invitación en español
- **WHEN** el usuario abre la tarjeta de invitación `#invitation-modal`
- **THEN** los datos centralizados del evento (lugar, horario, código de vestimenta y nota sorpresa) y los dos botones de acción (`"Celebrar con Confeti"` y `"Cerrar / Volver al Pastel"`) se muestran íntegramente en español
