import { useState } from "react";

const faqs = [
  {
    q: "É uma assinatura mensal?",
    a: "Não. É pagamento único de R$19,90 com acesso vitalício.",
  },
  {
    q: "Preciso estar preparado para fazer o diagnóstico?",
    a: "Não. O objetivo é justamente descobrir seu ponto de partida.",
  },
  {
    q: "A análise da redação dá a nota oficial?",
    a: "Não. É uma estimativa educacional baseada nas cinco competências e não substitui a correção oficial ou humana.",
  },
  {
    q: "Isso substitui um cursinho?",
    a: "Não. A ferramenta serve como complemento para ajudar o aluno a entender seu nível e direcionar seus estudos.",
  },
  {
    q: "Até quando posso usar?",
    a: "O acesso é vitalício.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="border-b border-white/5">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <h2 className="font-display text-3xl font-bold text-mist-100 sm:text-4xl">
          Perguntas frequentes
        </h2>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display font-semibold text-mist-100">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-signal transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-mist-300 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
