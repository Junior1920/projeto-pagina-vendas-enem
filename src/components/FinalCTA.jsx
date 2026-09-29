import Countdown from "./Countdown.jsx";
import { CHECKOUT_URL } from "../config.js";

export default function FinalCTA() {
  return (
    <section className="border-b border-white/5 bg-ink-900/40">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <h2 className="font-display text-balance text-3xl font-bold leading-tight text-mist-100 sm:text-4xl">
          Você ainda tem tempo. Não desperdice estudando no escuro.
        </h2>
        <p className="mx-auto mt-5 max-w-prose text-mist-300 leading-relaxed">
          Descubra seu nível atual, identifique suas prioridades e organize
          melhor as próximas semanas.
        </p>

        <div className="mt-9 flex justify-center">
          <Countdown />
        </div>

        <a
          href={CHECKOUT_URL}
          className="mt-9 inline-flex items-center justify-center rounded-lg bg-signal px-7 py-3.5 font-display text-sm font-bold text-ink-950 transition-colors hover:bg-signal-dim"
        >
          Fazer meu diagnóstico por R$19,90
        </a>
        <p className="mt-3 text-sm text-mist-400">
          Pagamento único · Acesso vitalício
        </p>
      </div>
    </section>
  );
}
