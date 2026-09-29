# Modo Enem — Landing Page

Landing page em React + Vite + Tailwind para o produto "Modo Enem".

## Antes de publicar

Abra `src/config.js` e troque:

```js
export const CHECKOUT_URL = "COLE_SEU_CHECKOUT_AQUI";
```

pelo link real do seu checkout. Todos os botões de compra (hero, oferta, CTA
final e barra fixa do mobile) usam essa única variável.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` com os arquivos finais.

Para conferir o build localmente antes de publicar:

```bash
npm run preview
```

## Publicar na Vercel

**Opção 1 — CLI:**

```bash
npm install -g vercel
vercel
```

Siga o prompt (framework detectado automaticamente como Vite). Para produção:

```bash
vercel --prod
```

**Opção 2 — pelo site:**

1. Suba este projeto para um repositório no GitHub.
2. Em vercel.com, clique em "Add New… → Project" e importe o repositório.
3. A Vercel detecta Vite automaticamente (`Build Command: vite build`,
   `Output Directory: dist`). Não é necessário alterar nada.
4. Clique em "Deploy".

## Sobre o contador regressivo

O contador em `src/hooks/useEnemCountdown.js` calcula a diferença em tempo
real entre `Date.now()` e dois instantes fixos em UTC, definidos em
`src/config.js`:

- 08/11/2026 às 13:30 (horário de Brasília, UTC-3) → primeiro dia do ENEM 2026
- 15/11/2026 às 13:30 (horário de Brasília, UTC-3) → segundo dia do ENEM 2026

Por serem instantes UTC absolutos, o cálculo é correto independentemente do
fuso horário configurado no navegador do visitante.

Comportamento:

- **Antes de 08/11/2026:** mostra contagem regressiva para o primeiro dia.
- **Entre 08/11/2026 e 15/11/2026:** mostra contagem regressiva para o
  segundo dia, com aviso de que o primeiro dia já ocorreu.
- **Depois de 15/11/2026:** o contador some e uma mensagem informa que o
  ENEM 2026 foi realizado.

## Observação sobre performance/SEO

O projeto foi construído seguindo boas práticas (sem imagens pesadas, sem
dependências desnecessárias, HTML semântico, meta tags de SEO e Open Graph
configuradas em `index.html`). Não há como rodar um relatório real do
Lighthouse neste ambiente — rode `npm run build && npm run preview` e audite
localmente pelo Chrome DevTools antes de publicar, para confirmar as notas.

Uma imagem de capa para o Open Graph (`/og-cover.png`, referenciada no
`index.html`) ainda precisa ser adicionada em `public/` — nenhuma imagem foi
inventada ou incluída por padrão.
