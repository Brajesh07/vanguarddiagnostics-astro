import { useState, useRef } from "react";

export function useSoundEffect() {
  const audioCtxRef = useRef(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  function playFlipSound() {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (
          window.AudioContext || window.webkitAudioContext
        )();
      }
      const ctx = audioCtxRef.current;
      // Resume if suspended (browser autoplay policy)
      if (ctx.state === "suspended") ctx.resume();

      const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.09, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2);
      }
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      source.start();
    } catch (e) {
      // AudioContext not available, silently fail
    }
  }

  return { playFlipSound, soundEnabled, setSoundEnabled };
}
