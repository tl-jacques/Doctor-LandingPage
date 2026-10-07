# Dr. Jorge Medeiros — Landing page

Site do Dr. Jorge Medeiros, dermatologista em Sobral-CE. Uma página só, pensada
primeiro para o celular, com agendamento pelo WhatsApp.

**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS 3 ·
Vitest + Testing Library. Hospedado na Vercel.

## Rodando localmente

Requer **Node 24** (veja `.nvmrc`; com nvm: `nvm use`).

```bash
npm ci          # instala as dependências
npm run dev     # http://localhost:3000
```

| Comando              | O que faz                                      |
| -------------------- | ---------------------------------------------- |
| `npm run dev`        | servidor de desenvolvimento                    |
| `npm test`           | roda os testes uma vez                         |
| `npm run test:watch` | testes em modo observação                      |
| `npm run lint`       | ESLint                                         |
| `npm run build`      | build de produção (também checa os tipos)      |

## Onde mudar o conteúdo

Quase todo o texto do site fica em um lugar só, sem mexer nos componentes:

| O quê                                              | Arquivo                       |
| -------------------------------------------------- | ----------------------------- |
| Queixas, vídeos, perguntas, formação, contatos, menu, link e número do WhatsApp | `src/constants/index.js` |
| Imagem do topo (foto, texto alternativo, enquadramento) | `src/constants/hero.ts`  |
| Título, descrição e URL do site (SEO)              | `src/constants/site.ts`       |
| IDs do Google Ads e da conversão do WhatsApp       | `src/constants/gtm.ts`        |
| Dados para o Google (endereço, telefone — JSON-LD) | `src/components/StructuredData.tsx` |
| Imagem de compartilhamento (WhatsApp, redes)       | `src/app/opengraph-image.jpg` (1200×630) |

**Imagens:** coloque em `src/assets` no tamanho em que serão usadas (até ~2500 px
no lado maior). O `next/image` gera as versões leves, mas um original enorme
deixa a primeira carga lenta.

## Estrutura

```
src/
  app/          layout, página, 404, robots, sitemap, estilos globais
  sections/     uma seção da página por arquivo (Hero, Presentation, ...)
  components/   peças reutilizáveis (Navbar, VideoFacade, Accordion, ...)
  constants/    conteúdo e configurações
  assets/       imagens
  __tests__/    testes (um arquivo por seção/componente)
```

Ordem da página (`src/app/page.tsx`): Hero → Apresentação → Queixas →
Vídeos → Em destaque → Sobre → Dúvidas → Rodapé.

## Design system

Cores definidas em `tailwind.config.ts`:

| Token          | Uso                                         |
| -------------- | ------------------------------------------- |
| `porcelain`    | fundo principal                             |
| `ivory`, `stone`, `cream`, `sand` | faixas e superfícies claras |
| `espresso`     | texto principal e faixas escuras            |
| `taupe`        | texto secundário em fundo claro             |
| `bronze`       | detalhes e destaques em fundo claro         |
| `mist`, `bronze-light` | texto secundário e detalhes em fundo escuro |
| `line`, `line-strong`, `espresso-line` | divisórias        |

Fontes: **Instrument Serif** (títulos, classe `heading-display`) e **DM Sans**
(texto). Classes prontas em `src/app/globals.css`: `container-page`,
`btn-pill` + `btn-pill-dark` / `btn-pill-light` / `btn-pill-outline`, e
`reveal` (entrada suave ao rolar). Rótulos de seção usam o componente
`Eyebrow`.

Alguns cuidados que os testes verificam: um único `h1`, landmarks separados
(cabeçalho, conteúdo, rodapé), link para pular o menu, links externos em nova
aba com aviso para leitores de tela e o registro da conversão no clique do
WhatsApp.

## Fluxo de trabalho (git)

- `master` — produção (a Vercel publica a partir dela).
- `dev` — integração; recebe cada etapa pronta e vai para a `master` por PR.
- Cada etapa nasce de uma branch curta a partir da `dev`
  (`feat/...`, `fix/...`, `ci/...`), com commits pequenos e descritivos.
  Depois do merge na `dev`, a branch é apagada.

O CI (GitHub Actions) roda lint, testes e build em todo push. Recomendado
ativar no GitHub *Settings → General → Automatically delete head branches*.

## Deploy

A Vercel faz o deploy de cada push (prévia) e da `master` (produção). Com
domínio próprio, defina `NEXT_PUBLIC_SITE_URL` (ex.: `https://www.dominio.com.br`)
nas variáveis de ambiente da Vercel para que links canônicos, sitemap e
prévias de compartilhamento usem o domínio certo.
