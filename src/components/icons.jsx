// Ilustrações e ícones vetoriais originais, feitos para este site.
// Sem dependência de bancos de imagem — apenas SVG inline, herdando cor via currentColor.

export function LogoMark({ className = "" }) {
  // Monograma: uma linha de desempenho ascendente (M invertido/gráfico),
  // com um ponto de destaque no pico — o "diagnóstico" que aponta o caminho.
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M3.5 16.5 L8.2 8.5 L11.4 13 L15 5.8 L20.5 16.5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="5.8" r="2" fill="currentColor" />
    </svg>
  );
}

export function RadarIllustration({ className = "" }) {
  // Radar de 4 eixos representando as áreas do ENEM, com um vértice
  // puxado pra dentro (a lacuna que o diagnóstico revela).
  return (
    <svg
      viewBox="0 0 260 260"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <g stroke="currentColor" strokeOpacity="0.18" strokeWidth="1">
        <polygon points="130,30 230,130 130,230 30,130" />
        <polygon points="130,65 195,130 130,195 65,130" />
        <polygon points="130,100 160,130 130,160 100,130" />
      </g>
      <line x1="130" y1="30" x2="130" y2="230" stroke="currentColor" strokeOpacity="0.12" />
      <line x1="30" y1="130" x2="230" y2="130" stroke="currentColor" strokeOpacity="0.12" />

      {/* forma de desempenho: um vértice puxado para dentro = ponto fraco */}
      <polygon
        points="130,55 205,130 130,175 78,130"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="130" cy="55" r="4" fill="currentColor" />
      <circle cx="205" cy="130" r="4" fill="currentColor" />
      <circle cx="130" cy="175" r="4" fill="currentColor" />
      <circle cx="78" cy="130" r="4" fill="currentColor" className="opacity-70" />
    </svg>
  );
}

export function BrokenPathIllustration({ className = "" }) {
  // Caminho pontilhado que sai, dá uma volta e não chega a lugar nenhum —
  // ilustra estudar sem direção.
  return (
    <svg
      viewBox="0 0 220 160"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M14 130 C 60 150, 70 80, 40 60 C 10 40, 40 10, 90 18 C 150 28, 140 90, 100 100 C 70 108, 80 140, 120 138"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="1 10"
        strokeOpacity="0.55"
      />
      <circle cx="14" cy="130" r="4.5" fill="currentColor" />
      <circle cx="120" cy="138" r="4.5" fill="currentColor" fillOpacity="0.35" />
    </svg>
  );
}

export function DiagnosisIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <rect x="5" y="3.5" width="14" height="17" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 9h7M8.5 12.5h7M8.5 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 3.5v-1a1 1 0 011-1h4a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function MagnifierIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <circle cx="10.5" cy="10.5" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15.2 15.2L20 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7.5 12v-4M10.5 12V6M13.5 12v-2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function EssayIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M6 3.5h9l3 3V20a1 1 0 01-1 1H6a1 1 0 01-1-1V4.5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10h8M8 13h8M8 16h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M15.5 16.5l1-1 2 2-1 1-2-2z" fill="currentColor" />
    </svg>
  );
}

export function DirectionIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <path d="M12 3.5V6M12 18v2.5M20.5 12H18M6 12H3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function ResultBadge({ className = "" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.4" />
      <path d="M13 26V17M20 26V12M27 26v-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function LifetimeIcon({ className = "" }) {
  // infinito estilizado — acesso vitalício
  return (
    <svg viewBox="0 0 32 20" className={className} aria-hidden="true" fill="none">
      <path
        d="M8 4.5c-3 0-5.5 2.5-5.5 5.5S5 15.5 8 15.5c3.4 0 5-2 8-5s4.6-5 8-5c3 0 5.5 2.5 5.5 5.5S27.4 15.5 24 15.5c-3.4 0-5-2-8-5s-4.6-5-8-5z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
