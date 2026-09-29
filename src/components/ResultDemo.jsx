import { motion } from "framer-motion";
import { ResultBadge } from "./icons.jsx";

const areas = [
  { label: "Linguagens", value: 78 },
  { label: "Matemática", value: 54 },
  { label: "Ciências Humanas", value: 71 },
  { label: "Ciências da Natureza", value: 48 },
];

const ATTENTION_THRESHOLD = 60;

export default function ResultDemo() {
  const attention = areas.filter((a) => a.value < ATTENTION_THRESHOLD);

  return (
    <section className="border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <ResultBadge className="h-10 w-10 text-signal" />
            <h2 className="font-display text-3xl font-bold text-mist-100 sm:text-4xl">
              Como o diagnóstico aparece pra você
            </h2>
          </div>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-mist-400">
            Exemplo de resultado · visualização ilustrativa
          </span>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-panel sm:p-9">
          <div className="space-y-6">
            {areas.map((area) => (
              <div key={area.label}>
                <div className="mb-2 flex items-baseline justify-between text-sm">
                  <span className="text-mist-200">{area.label}</span>
                  <span className="font-display font-semibold text-mist-100">
                    {area.value}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${area.value}%` }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className={`h-full rounded-full ${
                      area.value < ATTENTION_THRESHOLD ? "bg-warn" : "bg-signal"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 rounded-xl border border-warn/30 bg-warn/[0.06] p-5">
            <p className="text-sm font-semibold text-warn">
              Pontos que merecem atenção
            </p>
            <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-mist-200">
              {attention.map((a) => (
                <li key={a.label}>{a.label}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-4 text-xs text-mist-400">
          Os números acima não são resultados reais de alunos — servem apenas
          para ilustrar o formato do diagnóstico.
        </p>
      </div>
    </section>
  );
}
