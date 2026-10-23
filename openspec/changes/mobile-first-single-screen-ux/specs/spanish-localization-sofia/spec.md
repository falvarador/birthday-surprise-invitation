# Spec Delta

## MODIFIED Requirements

### Requirement: Traducción de la guía interactiva de 3 pasos y controles del pastel
El sistema SHALL presentar en español todos los textos estáticos y las actualizaciones dinámicas de los 3 actos del cuento y su estado completado (`#step-indicator-text`, `#main-instruction`, `#primary-action-text`), así como los controles de audio del encabezado compacto.

#### Scenario: Progreso interactivo por los 3 actos del pastel
- **WHEN** el usuario avanza del Acto 1 (despertar la magia con la varita del hada) al Acto 2 (pedir un deseo y soplar las velas), al Acto 3 (abrir la puerta secreta) y al estado final completado, o repite la magia
- **THEN** `#step-indicator-text`, `#main-instruction` y `#primary-action-text` actualizan su contenido íntegramente en español reflejando el nombre y la edad actuales

#### Scenario: Alternancia del botón de sonido y notificaciones emergentes
- **WHEN** el usuario activa o silencia el botón `#btn-sound` o interactúa con la varita, las velas o la puerta del pastel
- **THEN** la etiqueta `#sound-label` alterna entre los estados de música activa y silenciada en español, y el banner `#toast-banner` muestra los mensajes emergentes (`showToast`) en español
