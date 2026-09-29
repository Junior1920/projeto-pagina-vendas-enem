const benefits = [
  {
    title: "Diagnóstico por áreas",
    text: "Entenda seu desempenho nas diferentes áreas do ENEM.",
  },
  {
    title: "Análise da redação",
    text: "Análise orientada pelas cinco competências oficiais.",
  },
  {
    title: "Plano de ação",
    text: "Transforme o diagnóstico em uma direção prática para estudar.",
  },
  {
    title: "Visão do seu momento",
    text: "Tenha uma visão mais objetiva de onde você está antes da prova.",
  },
];

export default function Benefits() {
  return (
    <section className="border-b border-white/5 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <h2 className="font-display text-3xl font-bold text-mist-100 sm:text-4xl">
          O que você recebe
        </h2>
        <div className="mt-12 divide-y divide-white/5 border-y border-white/5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="grid gap-2 py-6 sm:grid-cols-[16rem_1fr] sm:items-baseline sm:gap-8"
            >
              <h3 className="font-display font-semibold text-mist-100">
                {b.title}
              </h3>
              <p className="text-mist-300 leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
