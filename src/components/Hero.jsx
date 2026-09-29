import { motion } from "framer-motion";
import Countdown from "./Countdown.jsx";
import { CHECKOUT_URL } from "../config.js";
import { RadarIllustration, LogoMark } from "./icons.jsx";

export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-white/5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-signal/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-[-15%] h-[26rem] w-[26rem] rounded-full bg-cobalt/10 blur-[120px]"
      />

      <RadarIllustration className="pointer-events-none absolute right-[-2rem] top-16 hidden h-72 w-72 text-signal/70 lg:block xl:right-[2vw]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-8 pb-20 sm:pt-10 sm:pb-28">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-signal/15 text-signal">
            <LogoMark className="h-4 w-4" />
          </span>
          <span className="font-display font-bold text-mist-100 text-[0.95rem]">
            Modo Enem
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 max-w-3xl"
        >
          <h1 className="font-display text-balance text-4xl font-extrabold leading-[1.08] text-mist-100 sm:text-6xl">
            Você ainda tem tempo. Mas precisa saber onde usá-lo.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-mist-300">
            Descubra onde você está perdendo pontos, analise sua redação e receba um
            direcionamento para estudar melhor nas semanas que antecedem o ENEM.
          </p>
        </motion.div>

        <div className="mt-10 max-w-md">
          <Countdown />
        </div>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center rounded-lg bg-signal px-6 py-3.5 font-display text-sm font-bold text-ink-950 transition-colors hover:bg-signal-dim"
          >
            Quero descobrir meu nível
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-mist-100 transition-colors hover:border-white/30"
          >
            Ver como funciona
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-mist-400">
          <li className="flex items-center gap-2">
            <Dot /> Pagamento único
          </li>
          <li className="flex items-center gap-2">
            <Dot /> Acesso vitalício
          </li>
          <li className="flex items-center gap-2">
            <Dot /> Feito para o ENEM
          </li>
        </ul>
      </div>
    </header>
  );
}

function Dot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />;
}
