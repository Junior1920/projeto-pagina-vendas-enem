import { useEnemCountdown } from "../hooks/useEnemCountdown.js";

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[4.25rem]">
      <span className="font-display text-3xl sm:text-4xl font-extrabold tabular-nums text-mist-100">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[0.7rem] tracking-wide text-mist-400">{label}</span>
    </div>
  );
}

export default function Countdown({ compact = false }) {
  const { phase, days, hours, minutes, seconds } = useEnemCountdown();

  if (phase === "finished") {
    return (
      <div
        role="status"
        className="rounded-xl border border-white/10 bg-ink-800/60 px-5 py-4 text-sm text-mist-300"
      >
        O ENEM 2026 foi realizado. Se você chegou até aqui, o diagnóstico continua útil para revisar seu desempenho e se preparar para uma próxima tentativa.
      </div>
    );
  }

  const heading =
    phase === "before-day-1"
      ? `Faltam ${days} ${days === 1 ? "dia" : "dias"} para o primeiro dia do ENEM 2026`
      : `O 1º dia já passou. Faltam ${days} ${days === 1 ? "dia" : "dias"} para o 2º dia, em 15/11/2026`;

  return (
    <div
      role="timer"
      aria-live="polite"
      className={
        compact
          ? "flex items-center gap-4"
          : "rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm px-5 py-5 sm:px-7 sm:py-6 shadow-panel"
      }
    >
      {!compact && (
        <p className="mb-4 text-sm text-mist-300">{heading}</p>
      )}
      <div className="flex items-center gap-3 sm:gap-5">
        <Unit value={days} label="dias" />
        <span className="text-mist-400 text-xl -mt-4">:</span>
        <Unit value={hours} label="horas" />
        <span className="text-mist-400 text-xl -mt-4">:</span>
        <Unit value={minutes} label="min" />
        <span className="text-mist-400 text-xl -mt-4">:</span>
        <Unit value={seconds} label="seg" />
      </div>
    </div>
  );
}
