# Spec Delta

## MODIFIED Requirements

### Requirement: Progresión lineal guiada en 3 actos hasta revelar la invitación
El sistema SHALL guiar al usuario de forma secuencial a través de 3 actos interactivos con una única instrucción clara encima del pastel, un destello visual en el elemento activo del SVG y un único botón de acción principal visible en la parte inferior durante el recorrido, de modo que tocar directamente el elemento indicado en el pastel ejecute exactamente el mismo avance de historia que presionar el botón inferior, impidiendo abrir la tarjeta de invitación antes de completar el Acto 3.

#### Scenario: Acto 1 - La Magia del Hada (Despertar el Pastel)
- **WHEN** el cuento se encuentra en el Acto 1 y el usuario toca el área táctil de la pequeña princesa hada con su varita (`#fairy-princess-doll`) o el botón de acción principal inferior (`#primary-action-btn`)
- **THEN** la varita se agita con animación, sonido mágico y partículas de polvo de hadas sobre el pastel, el destello guía pasa a las velas del castillo y la historia avanza automáticamente al Acto 2

#### Scenario: Acto 2 - El Deseo Real (Soplar las Velas)
- **WHEN** el cuento se encuentra en el Acto 2 y el usuario toca cualquiera de las banderitas/velas encendidas del castillo (con área táctil ampliada) o el botón de acción principal inferior
- **THEN** las 3 llamas (`#flame-0`, `#flame-1`, `#flame-2`) se apagan en secuencia con efectos de sonido y partículas, suena la melodía de cumpleaños, la puerta del pastel (`#cake-door-panel`) comienza a brillar (`door-ready`) y la historia avanza automáticamente al Acto 3

#### Scenario: Acto 3 - El Secreto detrás de la Puerta #4 (El Gran Descubrimiento)
- **WHEN** el cuento se encuentra en el Acto 3 y el usuario toca el área táctil de la puerta brillante del pastel (`#cake-door-panel`) o el botón de acción principal inferior
- **THEN** la puerta se abre en 3D (`door-open`) con sonido mágico y partículas, la historia pasa al estado de cuento completado y se abre automáticamente la Tarjeta de Invitación Real (`#invitation-modal`) como gran sorpresa final

#### Scenario: Estado posterior a completar el Acto 3
- **WHEN** el usuario ha completado el Acto 3 y cierra la tarjeta de invitación para volver al pastel
- **THEN** quedan visibles en la parte inferior un botón principal claro para volver a abrir la Tarjeta de Invitación Real cuando quiera y un botón secundario para repetir la magia del cuento desde el Acto 1
