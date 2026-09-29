import {
  DiagnosisIcon,
  MagnifierIcon,
  EssayIcon,
  DirectionIcon,
} from "./icons.jsx";

const items = [
  { label: "Fazer o diagnóstico", Icon: DiagnosisIcon },
  { label: "Identificar dificuldades", Icon: MagnifierIcon },
  { label: "Analisar a redação", Icon: EssayIcon },
  { label: "Receber direcionamento", Icon: DirectionIcon },
];

export default function SolutionSection() {
  return (
    <section className="border-b border-white/5 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="text-sm font-semibold text-signal">A solução</p>
        <h2 className="mt-3 font-display text-balance max-w-2xl text-3xl font-bold leading-tight text-mist-100 sm:text-4xl">
          Uma forma de descobrir seu ponto de partida antes da prova.
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ label, Icon }) => (
            <div key={label} className="rounded-xl border border-white/10 p-5">
              <Icon className="h-6 w-6 text-signal" />
              <p className="mt-4 text-mist-100 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
