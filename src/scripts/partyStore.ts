export interface BirthdayWish {
  name: string;
  status: string;
  text: string;
}

export interface PartyState {
  name: string;
  age: string;
  dateISO: string;
  timeText: string;
  venue: string;
  dressCode: string;
  surpriseMessage: string;
  candlesLit: [boolean, boolean, boolean];
  doorOpen: boolean;
  step: 1 | 2 | 3; // 1: Blow Candles, 2: Open Door #3, 3: Invitation Revealed
  audioEnabled: boolean;
  wishes: BirthdayWish[];
}

export const partyState: PartyState = {
  name: 'Sofía',
  age: '4',
  dateISO: '2026-11-14',
  timeText: '3:00 PM – 6:30 PM',
  venue: 'El Jardín de Rosas Encantado, Calle de las Hadas 124',
  dressCode: 'Rosa Pastel, Crema y un Toque de Dorado',
  surpriseMessage:
    '"¡Ponte tu vestido de princesa favorito, piquito! ¡Tus mejores amigos, familiares, seres queridos y este pastel de castillo de hadas te están esperando solo a ti!"',
  candlesLit: [true, true, true],
  doorOpen: false,
  step: 1,
  audioEnabled: true,
  wishes: [
    {
      name: 'Abuelita y Abuelito',
      status: '✨ ¡Asistiremos con alegría!',
      text: '¡Feliz 4.º cumpleaños a nuestra más dulce princesita de las hadas!',
    },
    {
      name: 'Tía Elena y Maya',
      status: '✨ ¡Asistiremos con alegría!',
      text: '¡No podemos esperar para celebrar contigo en tu castillo real!',
    },
  ],
};

export function formatReadableDate(isoDateString: string): string {
  try {
    const [year, month, day] = isoDateString.split('-').map(Number);
    const d = new Date(year, month - 1, day);
    return d.toLocaleDateString('es-ES', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return isoDateString;
  }
}

export function updateDynamicTextInDOM(): void {
  document.querySelectorAll('.dynamic-name').forEach((el) => {
    el.textContent = partyState.name;
  });
  document.querySelectorAll('.dynamic-age').forEach((el) => {
    el.textContent = partyState.age;
  });
}

export function emitPartyEvent<T = unknown>(eventName: string, detail?: T): void {
  window.dispatchEvent(new CustomEvent(eventName, { detail }));
}

export function showToast(msg: string): void {
  emitPartyEvent('party:toast', { message: msg });
}

export function createParticles(
  x: number,
  y: number,
  count = 28,
  type: 'mix' | 'star' | 'heart' | 'circle' = 'mix'
): void {
  emitPartyEvent('party:particles', { x, y, count, type });
}
