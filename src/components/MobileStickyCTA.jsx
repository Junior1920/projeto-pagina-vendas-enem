import { CHECKOUT_URL } from "../config.js";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/90 px-4 py-3 backdrop-blur-md sm:hidden">
      <a
        href={CHECKOUT_URL}
        className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-signal px-4 py-3 font-display text-sm font-bold text-ink-950"
      >
        Começar por R$19,90 →
      </a>
    </div>
  );
}
