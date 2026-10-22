# Proposal

## Why

La aplicación de invitación y sorpresa de cumpleaños mágica fue migrada a componentes de Astro y HTML Web Components conservando los textos originales en inglés y el nombre de ejemplo "Yashika". Se requiere localizar completamente la experiencia al español (`lang="es"`) y personalizarla para la princesa "Sofía", cuidando que el diseño visual, los contenedores y los textos dentro del SVG del pastel mantengan proporciones equilibradas sin desbordamientos.

## What Changes

- Cambiar el atributo de idioma del documento HTML de `<html lang="en">` a `<html lang="es">` y traducir el título de la página.
- Reemplazar todas las apariciones del nombre `"Yashika"` por `"Sofía"` tanto en las plantillas de los componentes Astro como en el estado inicial `partyState` y valores de respaldo en JavaScript/TypeScript.
- Traducir todos los textos estáticos visibles al español respetando cualquier texto que ya esté en español, adaptando estructuras como `"Yashika's Royal 3rd Birthday"` a una forma natural en español (`"3.er Cumpleaños Real de Sofía"`).
- Ajustar y traducir los textos embebidos dentro del SVG interactivo del pastel (`#birthday-cake-svg`):
  - En `#birthday-plaque`, cambiar `"Happy"` y `"Birthday"` por `"Feliz"` y `"Cumpleaños"` (ajustando el `font-size` de `"Cumpleaños"` para que encaje dentro del círculo sin desbordarse) y `"Yashika"` por `"Sofía"`.
  - En `#door-secret-interior`, cambiar `"You're Invited!"` por `"¡Estás Invitado!"` y `"OPEN CARD ✨"` por `"VER CARTA ✨"`.
- Traducir las etiquetas del contador regresivo (`Days`, `Hours`, `Mins`, `Secs`) a `"Días"`, `"Horas"`, `"Mins"` y `"Segs"`.
- Traducir todos los textos dinámicos controlados por JavaScript en los Web Components:
  - Indicadores e instrucciones de los pasos 1, 2 y 3 (`#step-indicator-text`, `#main-instruction`, `#bubble-text`, `#primary-action-text`).
  - Mensajes emergentes (`showToast(...)`), etiquetas del botón de sonido (`"Música Sí"` / `"Silencio"`), texto copiado al portapapeles (`copyInvitationText`), y formato de fecha con `toLocaleDateString('es-ES', ...)`.
  - Valores por defecto en `partyState` (lugar, horario, código de vestimenta, mensaje sorpresa y lista inicial de deseos `wishes`).
- Mantener intactos todos los IDs, clases de Tailwind CSS, animaciones CSS, colores de la paleta y la lógica funcional de audio (Tone.js) y partículas en canvas.

## Capabilities

### New Capabilities
- `spanish-localization-sofia`: Localización completa de la interfaz, textos SVG, mensajes interactivos, formato de fecha en español (`es-ES`) y personalización por defecto para el cumpleaños de Sofía.

### Modified Capabilities
<!-- Ninguna capacidad existente se modifica ya que no existen especificaciones previas en openspec/specs/. -->

## Impact

- `src/layouts/Layout.astro`: Atributo `lang="es"` y título por defecto en español.
- `src/pages/index.astro`: Título de la página en español.
- `src/scripts/partyStore.ts`: Estado inicial `partyState` con `"Sofía"`, textos por defecto en español y formateo de fecha con `toLocaleDateString('es-ES', ...)`.
- `src/components/Header.astro`: Encabezado `"3.er Cumpleaños Real de Sofía"`, botones de acción, estados `"Música Sí"` / `"Silencio"` y notificaciones toast de sonido.
- `src/components/WelcomeOverlay.astro`: Textos de bienvenida para la Princesa Sofía y botones de inicio/salto.
- `src/components/StoryGuide.astro`: Textos iniciales y dinámicos de los pasos 1, 2 y 3, botones de acción y leyenda de interacción del pastel.
- `src/components/BirthdayCake.astro`: Globo de sugerencia, textos del SVG (`#birthday-plaque` con `"Feliz"`, `"Cumpleaños"` ajustado en tamaño y `"Sofía"`; `#door-secret-interior` con `"¡Estás Invitado!"` y `"VER CARTA ✨"`) y mensajes toast interactivos.
- `src/components/InvitationModal.astro`: Tarjeta de invitación, etiquetas del contador (`Días`, `Horas`, `Mins`, `Segs`), detalles del evento, texto copiado al portapapeles y formulario/muro de deseos RSVP.
- `src/components/CustomizeModal.astro`: Etiquetas del formulario de personalización, valores iniciales para `"Sofía"` y mensaje toast al guardar.
- `src/components/ToastBanner.astro` y `src/components/Footer.astro`: Mensaje inicial del banner toast y pie de página en español para `"Sofía"`.
