import { useEffect, useState } from "react";
import { ENEM_DAY_1_UTC, ENEM_DAY_2_UTC } from "../config.js";

function diffParts(targetMs, nowMs) {
  const total = Math.max(0, targetMs - nowMs);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function computeState(nowMs) {
  if (nowMs < ENEM_DAY_1_UTC) {
    return { phase: "before-day-1", ...diffParts(ENEM_DAY_1_UTC, nowMs) };
  }
  if (nowMs < ENEM_DAY_2_UTC) {
    return { phase: "before-day-2", ...diffParts(ENEM_DAY_2_UTC, nowMs) };
  }
  return { phase: "finished", days: 0, hours: 0, minutes: 0, seconds: 0 };
}

// Contador real, recalculado a cada segundo a partir de Date.now().
// Os alvos (config.js) são instantes UTC absolutos, então o resultado
// é o mesmo em qualquer fuso horário do navegador.
export function useEnemCountdown() {
  const [state, setState] = useState(() => computeState(Date.now()));

  useEffect(() => {
    const id = setInterval(() => {
      setState(computeState(Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return state;
}
