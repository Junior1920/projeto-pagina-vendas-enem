import { CHECKOUT_URL } from "../config.js";
import { LifetimeIcon } from "./icons.jsx";

const included = [
  "Simulado diagnóstico",
  "Desempenho por áreas",
  "Análise da redação pelas cinco competências",
  "Plano de estudos/direcionamento",
  "Acesso vitalício",
];

export default function Offer() {
  return (
    <section id="oferta" className="border-b border-white/5 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <h2 className="font-display text-balance text-3xl font-bold leading-tight text-mist-100 sm:text-4xl">
              Seu diagnóstico para o ENEM por R$19,90.
            </h2>
            <p className="mt-5 max-w-prose text-mist-300 leading-relaxed">
              Sem mensalidade. Você paga uma vez e mantém acesso enquanto
              precisar revisar seu diagnóstico e seu plano de estudos.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-panel sm:p-9">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl font-extrabold text-mist-100">
                R$19,90
              </span>
            </div>
            <p className="mt-1 flex items-center gap-2 text-sm text-mist-400">
              Pagamento único · Acesso vitalício
              <LifetimeIcon className="h-3.5 w-auto text-signal" />
            </p>

            <ul className="mt-7 space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-mist-200">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={CHECKOUT_URL}
              className="mt-8 flex w-full items-center justify-center rounded-lg bg-signal px-6 py-3.5 font-display text-sm font-bold text-ink-950 transition-colors hover:bg-signal-dim"
            >
              Quero começar agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-signal"
      aria-hidden="true"
    >
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
