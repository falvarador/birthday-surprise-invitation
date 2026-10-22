# Spec Delta

## Purpose

Proporciona un flujo narrativo interactivo y lineal estructurado en Prólogo y 3 Actos mágicos donde la Tarjeta de Invitación Real se descubre exclusivamente al final como recompensa del cuento, con una interfaz simplificada sin elementos de servidor ni distractores.

## ADDED Requirements

### Requirement: Prólogo en pantalla de bienvenida con botón único de inicio
El sistema SHALL presentar en la pantalla de bienvenida (`#welcome-overlay`) el inicio del cuento (*"Había una vez un reino mágico que se preparaba para celebrar un día muy especial..."*) y MUST ofrecer un único botón de acción principal para comenzar el cuento e ir al pastel, sin mostrar botones para saltar directamente a la tarjeta de invitación.

#### Scenario: Visualización del prólogo e inicio del cuento
- **WHEN** el usuario abre la aplicación y ve la pantalla de bienvenida `#welcome-overlay`
- **THEN** se muestra el texto introductorio del cuento y un único botón mágico para comenzar la historia, y al pulsarlo se oculta `#welcome-overlay` con música y partículas para dar inicio al Acto 1

### Requirement: Progresión lineal guiada en 3 actos hasta revelar la invitación
El sistema SHALL guiar al usuario de forma secuencial a través de 3 actos interactivos con una única instrucción clara y un único botón de acción principal visible durante el recorrido, impidiendo abrir la tarjeta de invitación antes de completar el Acto 3.

#### Scenario: Acto 1 - La Magia del Hada (Despertar el Pastel)
- **WHEN** el cuento se encuentra en el Acto 1 y el usuario toca a la pequeña princesa hada con su varita (`#fairy-princess-doll`) o el botón de acción principal único (`#primary-action-btn`)
- **THEN** la varita se agita con animación, sonido mágico y partículas de polvo de hadas sobre el pastel, y la historia avanza automáticamente al Acto 2

#### Scenario: Acto 2 - El Deseo Real (Soplar las Velas)
- **WHEN** el cuento se encuentra en el Acto 2 y el usuario toca las 3 banderitas/velas encendidas del castillo (individualmente o mediante el botón de acción principal único)
- **THEN** las llamas (`#flame-0`, `#flame-1`, `#flame-2`) se apagan con efectos de sonido y partículas, suena la melodía de cumpleaños, la puerta del pastel (`#cake-door-panel`) comienza a brillar (`door-ready`) y la historia avanza al Acto 3

#### Scenario: Acto 3 - El Secreto detrás de la Puerta #4 (El Gran Descubrimiento)
- **WHEN** el cuento se encuentra en el Acto 3 y el usuario toca la puerta brillante del pastel (`#cake-door-panel`) o el botón de acción principal único
- **THEN** la puerta se abre en 3D (`door-open`) con sonido mágico y partículas, la historia pasa al estado de cuento completado y se abre automáticamente la Tarjeta de Invitación Real (`#invitation-modal`) como gran sorpresa final

#### Scenario: Estado posterior a completar el Acto 3
- **WHEN** el usuario ha completado el Acto 3 y cierra la tarjeta de invitación para volver al pastel
- **THEN** quedan visibles un botón principal claro para volver a abrir la Tarjeta de Invitación Real cuando quiera y un botón secundario para repetir la magia del cuento desde el Acto 1

### Requirement: Simplificación de la interfaz sin funciones de servidor ni paneles secundarios
El sistema SHALL omitir cualquier formulario o contenedor de RSVP/muro de deseos, el panel de leyenda de botones pequeños ("Hotspots") bajo la guía principal, el botón o modal de personalización en la vista de invitados, y el botón de copiar al portapapeles, manteniendo todos los datos del evento centralizados en el estado de la aplicación.

#### Scenario: Interfaz limpia en la guía del cuento y el encabezado
- **WHEN** el usuario visualiza el encabezado y la guía junto al pastel
- **THEN** no existen el botón `"Personalizar"`, el botón secundario inicial `"Ver invitación"` ni el panel inferior de `"Hotspots / Leyenda de botones pequeños"`

#### Scenario: Acciones simplificadas al pie de la Tarjeta de Invitación
- **WHEN** se muestra el modal `#invitation-modal` con el mensaje especial de sorpresa, la cuenta regresiva en vivo, la fecha, hora, lugar y código de vestimenta
- **THEN** no existen el botón ni cajón de RSVP (`#rsvp-drawer`, `#rsvp-form`, `#wishes-list`) ni el botón de copiar detalles, y el pie de la tarjeta presenta únicamente dos botones limpios: `"Celebrar con Confeti"` y `"Cerrar / Volver al Pastel"`
