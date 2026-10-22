# Tasks

## 1. Configuración de Idioma Base y Estado Reactivo (`partyStore.ts`)

- [x] 1.1 Cambiar `<html lang="en">` a `<html lang="es">` y traducir el título por defecto en `src/layouts/Layout.astro` y `src/pages/index.astro`, verificando en el código fuente que el documento raíz declare `lang="es"`.
- [x] 1.2 Actualizar `partyState` en `src/scripts/partyStore.ts` reemplazando `"Yashika"` por `"Sofía"`, traduciendo `timeText`, `venue`, `dressCode`, `surpriseMessage` y los deseos iniciales en `wishes`, y cambiando `formatReadableDate` para usar `toLocaleDateString('es-ES', ...)`, verificando que no queden cadenas en inglés ni referencias a `"Yashika"` en `partyStore.ts`.

## 2. Traducción de Encabezado, Bienvenida, Pie de Página y Notificaciones

- [x] 2.1 Traducir `src/components/Header.astro` adaptando el título a `"3.er Cumpleaños Real de Sofía"`, traduciendo los botones de acción, cambiando los estados de sonido a `"Música Sí"` / `"Silencio"` y traduciendo los mensajes `showToast` de audio, verificando que los IDs `#nav-name-display`, `#nav-age-display`, `#sound-icon` y `#sound-label` se mantengan intactos.
- [x] 2.2 Traducir `src/components/WelcomeOverlay.astro` reemplazando `"Yashika"` por `"Sofía"` y traduciendo el subtítulo, título, descripción y botones de inicio/salto de la sorpresa, verificando que el overlay conserve sus clases y acciones `data-action`.
- [x] 2.3 Traducir el texto inicial en `src/components/ToastBanner.astro` y el texto con el nombre `"Sofía"` en `src/components/Footer.astro`, verificando que `.dynamic-name` y `#toast-message` permanezcan sin cambios estructurales.

## 3. Traducción de la Guía Interactiva y Pastel SVG (`StoryGuide.astro` y `BirthdayCake.astro`)

- [x] 3.1 Traducir `src/components/StoryGuide.astro` tanto en el HTML inicial como en `updateStepUI()` para los pasos 1, 2 y 3 (`#step-indicator-text`, `#main-instruction`, `#primary-action-text`), el encabezado con `"Sofía"`, los botones de acción y la leyenda de puntos interactivos del pastel, verificando que todos los pasos muestren textos en español.
- [x] 3.2 Actualizar el SVG y la lógica en `src/components/BirthdayCake.astro`: traducir `#bubble-text` inicial y dinámico, cambiar en `#birthday-plaque` los textos a `"Feliz"`, `"Cumpleaños"` (ajustando `font-size` para encajar en el círculo) y `"Sofía"`, cambiar en `#door-secret-interior` a `"¡Estás Invitado!"` y `"VER CARTA ✨"`, y traducir todos los `showToast(...)`, verificando que los textos encajen visualmente y los IDs del SVG no se alteren.

## 4. Traducción de Modales de Invitación y Personalización (`InvitationModal.astro` y `CustomizeModal.astro`)

- [x] 4.1 Traducir `src/components/InvitationModal.astro`: encabezados con `"Sofía"`, mensaje sorpresa inicial, etiquetas del contador (`"Días"`, `"Horas"`, `"Mins"`, `"Segs"`), tarjetas de Fecha/Hora/Lugar, código de vestimenta, botones de acción, plantilla de portapapeles en `copyInvitationText`, formulario `#rsvp-form` y mensajes `showToast`, verificando que todos los campos y textos copiados estén en español.
- [x] 4.2 Traducir `src/components/CustomizeModal.astro`: título, instrucciones, etiquetas de los campos del formulario, valores iniciales (`value="Sofía"` y textos en español), botones y el fallback/toast al guardar en `CustomizeModalElement`, verificando que al guardar se actualice correctamente el pastel y la invitación para `"Sofía"`.

## 5. Verificación de Integración y Compilación

- [x] 5.1 Ejecutar `npm run build` y buscar en `src/` cualquier ocurrencia residual de `"Yashika"` o textos visibles en inglés, verificando que la compilación de Astro finalice sin errores (`exit code 0`).
