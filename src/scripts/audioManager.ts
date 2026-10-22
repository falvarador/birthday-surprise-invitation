import { partyState } from './partyStore';

declare global {
  interface Window {
    Tone?: any;
  }
}

let musicSynth: any = null;
let chimeSynth: any = null;
let audioInitialized = false;

export async function initAudio(): Promise<void> {
  if (audioInitialized || typeof window === 'undefined' || !window.Tone) return;
  try {
    const Tone = window.Tone;
    await Tone.start();
    musicSynth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'sine' },
      envelope: { attack: 0.02, decay: 0.3, sustain: 0.15, release: 1.2 },
    }).toDestination();
    musicSynth.volume.value = -8;

    chimeSynth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: 'triangle' },
      envelope: { attack: 0.01, decay: 0.2, sustain: 0.05, release: 0.8 },
    }).toDestination();
    chimeSynth.volume.value = -6;

    audioInitialized = true;
  } catch (e) {
    console.warn('Audio initialization skipped:', e);
  }
}

export function playSparkleChime(): void {
  if (!partyState.audioEnabled) return;
  initAudio().then(() => {
    if (!chimeSynth || !window.Tone) return;
    const now = window.Tone.now();
    const notes = ['C6', 'E6', 'G6', 'B6', 'C7'];
    notes.forEach((n, idx) => {
      chimeSynth.triggerAttackRelease(n, '16n', now + idx * 0.06);
    });
  });
}

export function playCandleBlowSound(): void {
  if (!partyState.audioEnabled) return;
  initAudio().then(() => {
    if (!chimeSynth || !window.Tone) return;
    const now = window.Tone.now();
    chimeSynth.triggerAttackRelease(['G5', 'C6', 'E6'], '8n', now);
  });
}

export function playDoorCreakChime(): void {
  if (!partyState.audioEnabled) return;
  initAudio().then(() => {
    if (!musicSynth || !window.Tone) return;
    const now = window.Tone.now();
    const chord = ['F4', 'A4', 'C5', 'F5', 'A5'];
    chord.forEach((n, idx) => {
      musicSynth.triggerAttackRelease(n, '8n', now + idx * 0.09);
    });
  });
}

export function playHappyBirthdayMelody(): void {
  if (!partyState.audioEnabled) return;
  initAudio().then(() => {
    if (!musicSynth || !window.Tone) return;
    const now = window.Tone.now();
    const melody = [
      { note: 'C5', dur: '8n', time: 0.0 },
      { note: 'C5', dur: '8n', time: 0.25 },
      { note: 'D5', dur: '4n', time: 0.5 },
      { note: 'C5', dur: '4n', time: 0.9 },
      { note: 'F5', dur: '4n', time: 1.3 },
      { note: 'E5', dur: '2n', time: 1.7 },

      { note: 'C5', dur: '8n', time: 2.5 },
      { note: 'C5', dur: '8n', time: 2.75 },
      { note: 'D5', dur: '4n', time: 3.0 },
      { note: 'C5', dur: '4n', time: 3.4 },
      { note: 'G5', dur: '4n', time: 3.8 },
      { note: 'F5', dur: '2n', time: 4.2 },
    ];
    melody.forEach((item) => {
      musicSynth.triggerAttackRelease(item.note, item.dur, now + item.time);
    });
  });
}

export function celebrateGrandFinale(): void {
  playHappyBirthdayMelody();
  window.dispatchEvent(
    new CustomEvent('party:particles', {
      detail: { x: window.innerWidth * 0.25, y: window.innerHeight * 0.4, count: 35, type: 'mix' },
    })
  );
  window.dispatchEvent(
    new CustomEvent('party:particles', {
      detail: { x: window.innerWidth * 0.75, y: window.innerHeight * 0.4, count: 35, type: 'mix' },
    })
  );
  window.dispatchEvent(
    new CustomEvent('party:particles', {
      detail: { x: window.innerWidth * 0.5, y: window.innerHeight * 0.25, count: 40, type: 'mix' },
    })
  );
}
