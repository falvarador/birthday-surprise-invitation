# Design

## Context

El proyecto ya cuenta con la arquitectura en Astro + Tailwind CSS v4 + HTML Web Components (`src/components/*.astro` y `src/scripts/partyStore.ts`), migrada a partir del `index.html` original. Consulta `proposal.md` para la motivación y alcance. Esta fase de diseño aborda cómo aplicar la traducción completa al español y la personalización para "Sofía" a través de los componentes y el estado reactivo sin alterar IDs, clases de Tailwind, animaciones CSS ni la lógica de audio/partículas.

## Goals / Non-Goals

**Goals:**
- Garantizar que todos los textos estáticos en plantillas `.astro` y los textos dinámicos en scripts de Web Components estén en español y usen `"Sofía"` por defecto.
- Mantener el equilibrio visual en contenedores de ancho fijo, píldoras de botones y textos SVG (`#birthday-plaque` y `#door-secret-interior`).
- Preservar todos los selectores DOM (`id`, clases `.dynamic-name`, `.dynamic-age`, atributos `data-*`), clases utilitarias de Tailwind y animaciones CSS.

**Non-Goals:**
- Implementar un sistema de internacionalización multi-idioma dinámico (i18n routing o diccionarios externos); la aplicación tendrá el español como único idioma directo.
- Modificar la paleta de colores, melodías de Tone.js o física de partículas en canvas.

## Decisions

1. **Ajuste tipográfico en el SVG del pastel (`#birthday-plaque` y `#door-secret-interior`)**
   - *Decisión*: En `#birthday-plaque` (`r="52"` interior, centrado en `x="338"`), reemplazar `"Happy"` (`font-size="19"`) por `"Feliz"` (`font-size="19"`), `"Birthday"` (`font-size="19"`) por `"Cumpleaños"` reduciendo su `font-size` a `"16.5"` o `"17"`, y `"Yashika"` por `"Sofía"` (`font-size="20"`). En `#door-secret-interior`, usar `"¡Estás Invitado!"` (`font-size="14"`) y `"VER CARTA ✨"` (`font-size="9.5"`).
   - *Racional*: La palabra `"Cumpleaños"` tiene 10 caracteres frente a los 8 de `"Birthday"`; reducir ligeramente el `font-size` evita que los extremos del texto toquen el borde blanco del círculo interior (`r="52"`). De igual forma, `"¡Estás Invitado!"` encaja limpiamente en el ancho `width="98"` del rectángulo interior de la puerta.
   - *Alternativas consideradas*: Usar `textLength` en SVG, descartado porque deforma la proporción tipográfica de la fuente cursiva/serif (`Cormorant Garamond` y `Dancing Script`).

2. **Reordenamiento natural del título en el encabezado (`Header.astro`)**
   - *Decisión*: Cambiar `<span id="nav-name-display" class="dynamic-name">Yashika</span>'s Royal <span id="nav-age-display" class="dynamic-age">3</span>rd Birthday` a `<span id="nav-age-display" class="dynamic-age">3</span>.er Cumpleaños Real de <span id="nav-name-display" class="dynamic-name">Sofía</span>`.
   - *Racional*: Mantiene exactamente los mismos IDs (`#nav-name-display`, `#nav-age-display`) y clases (`.dynamic-name`, `.dynamic-age`) para que las actualizaciones dinámicas desde `CustomizeModal` funcionen sin cambios en la lógica de selección DOM, mientras ofrece una gramática natural en español.

3. **Centralización de valores por defecto y formato de fecha en `partyStore.ts`**
   - *Decisión*: Actualizar `partyState` en `src/scripts/partyStore.ts` con `name: 'Sofía'`, textos por defecto traducidos (`timeText`, `venue`, `dressCode`, `surpriseMessage`, `wishes`) y cambiar `toLocaleDateString('en-US', ...)` a `toLocaleDateString('es-ES', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })`, sincronizando los mismos valores iniciales en el HTML de `InvitationModal.astro` y `CustomizeModal.astro`.
   - *Racional*: Evita parpadeos de texto en inglés antes de la hidratación de los Web Components (`connectedCallback`).

## Risks / Trade-offs

- **[Risk] Desbordamiento de texto en botones móviles o contenedores pequeños al traducir frases más largas al español** → **Mitigación**: Usar traducciones concisas y naturales (p. ej., `"Lanzar Magia"`, `"Música Sí"` / `"Silencio"`, `"Personalizar"`, `"Días"`, `"Horas"`, `"Mins"`, `"Segs"`, `"VER CARTA ✨"`).
- **[Risk] Desincronización entre el HTML estático inicial de Astro y el estado en `partyStore.ts`** → **Mitigación**: Asegurar que tanto las plantillas `.astro` como los valores por defecto en `partyStore.ts` y `CustomizeModal.astro` contengan exactamente los mismos textos iniciales en español para `"Sofía"`.
