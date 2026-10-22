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
  name: 'Yashika',
  age: '3',
  dateISO: '2026-11-14',
  timeText: '3:00 PM – 6:30 PM',
  venue: 'The Enchanted Rose Garden, 124 Fairy Lane',
  dressCode: 'Pastel Pink, Cream & Touch of Gold',
  surpriseMessage:
    '"Put on your favorite princess dress, sweetheart! All your best friends, magical balloons, and this real-life fairy castle cake are waiting just for you!"',
  candlesLit: [true, true, true],
  doorOpen: false,
  step: 1,
  audioEnabled: true,
  wishes: [
    {
      name: 'Grandma & Grandpa',
      status: '✨ Joyfully Attending!',
      text: 'Happy 3rd Birthday to our sweetest little fairy princess!',
    },
    {
      name: 'Auntie Elena & Maya',
      status: '✨ Joyfully Attending!',
      text: 'We cannot wait to celebrate with you in your royal castle!',
    },
  ],
};

export function formatReadableDate(isoDateString: string): string {
  try {
    const [year, month, day] = isoDateString.split('-').map(Number);
    const d = new Date(year, month - 1, day);
    return d.toLocaleDateString('en-US', {
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
