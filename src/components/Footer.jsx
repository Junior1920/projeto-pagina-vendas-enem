import { LogoMark } from "./icons.jsx";

export default function Footer() {
  return (
    <footer className="pb-24 sm:pb-10">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <p className="max-w-2xl text-xs leading-relaxed text-mist-400">
          <strong className="text-mist-300">Transparência:</strong> a
          ferramenta possui caráter educacional e de orientação. Os resultados
          e estimativas apresentados não substituem a nota oficial do ENEM nem
          uma correção humana especializada de redação.
        </p>
        <div className="mt-6 flex items-center gap-2 text-mist-400">
          <LogoMark className="h-3.5 w-3.5 text-signal/70" />
          <p className="text-xs">
            Modo Enem · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
