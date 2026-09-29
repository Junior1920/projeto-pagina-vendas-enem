import { BrokenPathIllustration } from "./icons.jsx";

const loop = [
  "Você estuda uma matéria",
  "Faz questões sobre ela",
  "Erra algumas",
  "Muda de assunto",
  "Continua sem saber exatamente onde está o problema",
];

export default function PainSection() {
  return (
    <section className="border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-balance text-3xl font-bold leading-tight text-mist-100 sm:text-4xl">
              Estudar mais não resolve se você não sabe onde está errando.
            </h2>
            <p className="mt-5 max-w-prose text-mist-300 leading-relaxed">
              É possível passar horas revisando um conteúdo que você já domina
              enquanto uma lacuna maior — em outra área — fica pra trás sem
              ninguém apontar.
            </p>
            <BrokenPathIllustration className="mt-8 h-28 w-auto text-mist-400" />
          </div>

          <ol className="space-y-0">
            {loop.map((step, i) => (
              <li key={step} className="flex gap-4 border-l border-white/10 pb-6 pl-6 last:pb-0">
                <span
                  className="relative -ml-[1.65rem] mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-mist-400/40"
                  aria-hidden="true"
                />
                <span className="text-mist-200">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
