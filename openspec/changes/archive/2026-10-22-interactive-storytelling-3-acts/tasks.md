# Tasks

## 1. Estado Centralizado y Limpieza de Datos sin Servidor

- [x] 1.1 Actualizar `src/scripts/partyStore.ts` para eliminar la interfaz `BirthdayWish` y el arreglo `wishes`, agregar `wandActivated: boolean` y ampliar `step: 1 | 2 | 3 | 4` en `PartyState`, centralizando los datos del evento (incluyendo `venue: 'Casa Club, Condominio Uniko San Francisco'`), y verificar que no queden referencias a `wishes` en el archivo.
- [x] 1.2 Eliminar el archivo `src/components/CustomizeModal.astro`, quitar su importación y etiqueta `<CustomizeModal />` en `src/pages/index.astro`, y limpiar el botón/evento de personalización en `src/components/Header.astro`, verificando que no existan referencias a `party:open-customize` ni `CustomizeModal`.

## 2. Prólogo y Flujo Narrativo en 3 Actos

- [x] 2.1 Actualizar `src/components/WelcomeOverlay.astro` para mostrar el prólogo del cuento (*"Había una vez un reino mágico que se preparaba para celebrar un día muy especial..."*) y eliminar el botón `"Saltar directamente a la tarjeta de invitación →"` (`[data-action="skip-to-invitation"]`), dejando un único botón mágico para comenzar el cuento, y verificar que el componente ya no emita `party:open-invitation`.
- [x] 2.2 Rediseñar `src/components/StoryGuide.astro` para eliminar el botón secundario inicial `"Ver invitación"` y el panel inferior de `"Hotspots / Leyenda de botones pequeños"`, implementando la guía lineal para el Acto 1 (La Magia del Hada), Acto 2 (El Deseo Real), Acto 3 (El Secreto detrás de la Puerta #4) y el estado completado (`step === 4`, donde se habilitan los botones para volver a ver la tarjeta de invitación y repetir la magia), verificando que la interfaz muestre una sola instrucción clara y el botón principal acorde a cada acto.
- [x] 2.3 Actualizar `src/components/BirthdayCake.astro` para sincronizar las interacciones del SVG con los 3 actos (`step 1` agitar varita del hada → `step 2` soplar las 3 velas → `step 3` abrir la puerta brillante en 3D y revelar automáticamente la invitación → `step 4` cuento completado), protegiendo las interacciones fuera de orden con mensajes guía y cambiando `data-cake-action` en `#birthday-plaque` a `"wand"`, y verificar que la invitación solo se abra al completar el Acto 3.

## 3. Simplificación de la Tarjeta de Invitación y Verificación Final

- [x] 3.1 Simplificar `src/components/InvitationModal.astro` eliminando por completo el sistema de RSVP y Muro de Deseos (`[data-action="toggle-rsvp"]`, `<rsvp-wall>`, `#rsvp-drawer`, `#rsvp-form`, `#wishes-list`, `RsvpWallElement`) y el botón de copiar detalles (`copyInvitationText`), dejando únicamente dos botones limpios al pie de la tarjeta: `"Celebrar con Confeti"` (`celebrateGrandFinale()`) y `"Cerrar / Volver al Pastel"` (`closeModal()`), y verificar que el modal conserve intactos el mensaje sorpresa, el contador en vivo y los detalles del evento.
- [x] 3.2 Ejecutar `npm run build` para verificar que el proyecto Astro compila sin errores de TypeScript, plantillas ni estilos, conservando intactos el SVG del pastel, la paleta de colores, las partículas en Canvas y las melodías de audio.
