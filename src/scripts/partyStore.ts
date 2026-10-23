export interface PartyState {
  name: string;
  age: string;
  dateISO: string;
  timeText: string;
  venue: string;
  dressCode: string;
  surpriseMessage: string;
  wandActivated: boolean;
  candlesLit: [boolean, boolean, boolean, boolean];
  doorOpen: boolean;
  step: 1 | 2 | 3 | 4; // 1: Acto 1 (Magia del Hada), 2: Acto 2 (Deseo Real / Velas), 3: Acto 3 (Puerta #4), 4: Cuento Completado
  audioEnabled: boolean;
}

export const partyState: PartyState = {
  name: 'Sofía',
  age: '4',
  dateISO: '2026-11-14',
  timeText: '3:00 PM – 6:30 PM',
  venue: 'Casa Club, Condominio Uniko San Francisco',
  dressCode: ' Ropa fresca y relajada',
  surpriseMessage:
    '"¡Ponte tu vestido de princesa favorito, piquito! ¡Tus mejores amigos, familiares y este pastel de castillo de hadas te están esperando solo a ti!"',
  wandActivated: false,
  candlesLit: [true, true, true, true],
  doorOpen: false,
  step: 1,
  audioEnabled: true,
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
