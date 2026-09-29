const steps = [
  {
    n: "01",
    title: "Faça o diagnóstico",
    text: "Responda às questões e teste seu desempenho nas diferentes áreas.",
  },
  {
    n: "02",
    title: "Descubra onde precisa melhorar",
    text: "Entenda quais áreas e pontos merecem mais atenção.",
  },
  {
    n: "03",
    title: "Analise sua redação",
    text: "Envie sua redação e receba uma análise baseada nas cinco competências avaliadas no ENEM.",
  },
  {
    n: "04",
    title: "Receba seu direcionamento",
    text: "Use o diagnóstico para organizar melhor suas próximas semanas de estudo.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <h2 className="font-display text-3xl font-bold text-mist-100 sm:text-4xl">
          Como funciona
        </h2>
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {steps.map((step) => (
            <div key={step.n} className="flex gap-5">
              <span className="font-display text-2xl font-bold text-signal/70">
                {step.n}
              </span>
              <div>
                <h3 className="font-display font-semibold text-mist-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-mist-300 leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
