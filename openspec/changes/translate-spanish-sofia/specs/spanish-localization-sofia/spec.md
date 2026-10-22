# Spec Delta

## Purpose

Proporciona una experiencia de invitación y sorpresa de cumpleaños completamente localizada al español y personalizada para la princesa Sofía, preservando el diseño visual, las proporciones del SVG y la interactividad original.

## ADDED Requirements

### Requirement: Idioma del documento y personalización del nombre a Sofía
El sistema SHALL definir el atributo de idioma principal del documento HTML como `lang="es"` y MUST mostrar `"Sofía"` como nombre por defecto en todos los elementos visibles y estados iniciales en lugar de `"Yashika"`.

#### Scenario: Carga inicial del documento y visualización del nombre
- **WHEN** el usuario carga la página principal de la invitación
- **THEN** el elemento raíz `<html>` tiene `lang="es"` y el nombre `"Sofía"` aparece en la pantalla de bienvenida, el encabezado, la guía interactiva, la placa del pastel SVG, la tarjeta de invitación, el formulario de personalización y el pie de página

#### Scenario: Estructura natural de edad y cumpleaños en el encabezado
- **WHEN** se muestra el indicador del encabezado superior
- **THEN** el texto presenta una estructura natural en español (`"3.er Cumpleaños Real de Sofía"`) manteniendo los elementos dinámicos para el nombre y la edad

### Requirement: Traducción y ajuste visual de textos en el pastel SVG
El sistema SHALL mostrar los textos dentro del SVG del pastel (`#birthday-cake-svg`) en español sin desbordar los contenedores gráficos circulares ni los botones internos.

#### Scenario: Placa circular de cumpleaños en el pastel
- **WHEN** se renderiza el grupo `#birthday-plaque` en el SVG del pastel
- **THEN** las líneas de texto muestran `"Feliz"`, `"Cumpleaños"` (con un tamaño de fuente ajustado para encajar dentro del círculo interior) y `"Sofía"`

#### Scenario: Interior de la puerta secreta del pastel
- **WHEN** el usuario abre la puerta `#cake-door-panel` y observa `#door-secret-interior`
- **THEN** el encabezado interno muestra `"¡Estás Invitado!"` y el botón de acción muestra `"VER CARTA ✨"` encajando dentro de la tarjeta interior

### Requirement: Traducción de la guía interactiva de 3 pasos y controles del pastel
El sistema SHALL presentar en español todos los textos estáticos y las actualizaciones dinámicas de los pasos 1, 2 y 3 (`#step-indicator-text`, `#main-instruction`, `#bubble-text`, `#primary-action-text`), así como los controles de audio y leyenda de puntos interactivos.

#### Scenario: Progreso interactivo por los 3 pasos del pastel
- **WHEN** el usuario avanza del Paso 1 (soplar las velas) al Paso 2 (abrir la puerta secreta) y al Paso 3 (sorpresa desbloqueada), o reinicia las velas
- **THEN** `#step-indicator-text`, `#main-instruction`, `#bubble-text` y `#primary-action-text` actualizan su contenido íntegramente en español reflejando el nombre y la edad actuales

#### Scenario: Alternancia del botón de sonido y notificaciones emergentes
- **WHEN** el usuario activa o silencia el botón `#btn-sound` o interactúa con la varita, las velas o la puerta del pastel
- **THEN** la etiqueta `#sound-label` alterna entre `"Música Sí"` y `"Silencio"`, y el banner `#toast-banner` muestra los mensajes emergentes (`showToast`) en español

### Requirement: Traducción de modales de invitación, contador, RSVP y personalización
El sistema SHALL mostrar en español todos los textos de la tarjeta de invitación (`#invitation-modal`), el contador regresivo, el muro de deseos RSVP, el modal de personalización (`#customize-modal`), el texto copiado al portapapeles y las fechas formateadas con configuración regional `es-ES`.

#### Scenario: Visualización del contador regresivo y fecha localizada
- **WHEN** se abre el modal de invitación `#invitation-modal`
- **THEN** las etiquetas del contador muestran `"Días"`, `"Horas"`, `"Mins"` y `"Segs"`, y la fecha del evento se formatea mediante `toLocaleDateString('es-ES', ...)`

#### Scenario: Copiado de detalles de invitación al portapapeles
- **WHEN** el usuario pulsa el botón para copiar los detalles de la invitación
- **THEN** el texto copiado al portapapeles y la confirmación temporal en `#copy-btn-label` se generan completamente en español con los datos de `"Sofía"`

#### Scenario: Valores iniciales y envío de deseos o personalización
- **WHEN** el usuario consulta los deseos iniciales en `#wishes-list`, envía un nuevo deseo en `#rsvp-form` o guarda cambios en `#customize-form`
- **THEN** los datos por defecto (lugar, horario, código de vestimenta, nota sorpresa y deseos de ejemplo) y los mensajes de confirmación se muestran en español
