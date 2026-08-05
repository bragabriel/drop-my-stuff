# Direção de arte — DropMyStuff

## Conceito

**Vitrine minimalista.** O site é um negócio simples para exibir coisas à
venda — não um zine, não uma peça de identidade visual. A foto de cada item
é o conteúdo; a interface existe só para deixá-la legível e não deve
competir com ela em nenhum momento.

Na prática:

- Fundo branco. As fotos dos itens têm fundo branco de estúdio — o site
  precisa encaixar com elas em vez de criar uma moldura colorida ao redor.
- Uma família tipográfica só, usada em todo o site — nada de trocar de
  fonte por seção ou por tipo de conteúdo.
- Hierarquia visual por tamanho e peso da fonte, não por cor. A cor é
  praticamente monocromática: preto sobre branco, com um cinza para texto
  secundário.
- Um único acento de cor — reservado inteiramente ao estado "vendido" — e
  nenhuma outra função no site usa essa cor.
- Cada elemento do card precisa justificar sua existência. Menos campos,
  mais espaço para a foto.

## Tokens de cor

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#FFFFFF` | Fundo da página |
| `--surface` | `#FAFAFA` | Fundo sutil quando é preciso separar uma área (ex: estado vazio, chip ativo) |
| `--text` | `#111113` | Texto principal, títulos, bordas com significado |
| `--text-muted` | `#6E6E73` | Texto secundário: meta, categoria, condição, links utilitários |
| `--border` | `#E6E6E8` | Hairlines — divisores, bordas de card, bordas de chip |
| `--accent` | `#FF3D8B` | Rosa — **exclusivo do estado "vendido"** (carimbo e rótulo de preço). Não aparece em link, hover, chip ativo, foco ou qualquer outro elemento. |

Estados ativos, hover e foco usam somente preto/cinza (`--text`,
`--text-muted`, `--border`). Nenhum azul em lugar nenhum do site — a cor
antiga da direção anterior foi removida por completo.

Sem modo escuro nesta etapa.

### Nota sobre o rosa do estado "vendido"

Como texto puro sobre branco, o rosa `--accent` mede ~2.9:1 e reprova no
mínimo AA. Por isso ele **nunca é cor de texto**: tanto o carimbo sobre a
foto quanto o rótulo "Vendido" no rodapé do card são fundo rosa chapado com
texto em `--text` por cima, o que passa com folga. Em qualquer novo uso do
estado vendido, prefira sempre essa inversão a escurecer o rosa — escurecer
tira dele a qualidade fluorescente que faz o estado saltar.

## Tipografia

Uma família só: **Inter** (Google Fonts, pesos 400, 500, 600), com
fallback de sistema. Nenhuma fonte monoespaçada em lugar nenhum — preço,
categoria, condição, filtros e botões usam todos a mesma família.

### Escala de tipo (fixa, sem `clamp()`)

| Token | Tamanho | Uso |
|---|---|---|
| `--text-xs` | 12px | categoria, condição, contagem |
| `--text-sm` | 13px | meta, links secundários |
| `--text-base` | 15px | corpo, descrição, preço |
| `--text-md` | 16px | título do item |
| `--text-lg` | 20px | título de seção |
| `--text-xl` | 24px | título do hero (teto da escala — nada no site é maior que isso) |

Hierarquia vem de tamanho e peso (400/500/600), nunca de caixa alta com
letter-spacing largo — exceção única: o carimbo "Vendido", que mantém
caixa alta por ser, literalmente, um carimbo.

## Bordas, raio e sombra

- Bordas: **1px**, sempre em `--border` (ou `--text` quando precisam ter
  significado, como no carimbo de vendido).
- Raio: escala deliberada, não um valor único.
  - `--radius-sm` (8px) — botões, chips soltos.
  - `--radius-md` (12px) — mídia, superfícies médias.
  - `--radius-lg` (18px) — diálogo no desktop.
  - `--radius-pill` (999px) — chips de filtro, FAB.
- **Nenhuma sombra**, difusa ou chapada. Separação de camadas usa borda
  hairline ou fundo `--surface`, nunca `box-shadow`.

## Card de item

O card deixou de ser uma caixa com contorno — nada de borda nem fundo
próprio em volta de tudo, que era o que fazia o site parecer "um monte de
div". Em vez disso:

1. **Foto**, proporção 4:5, arredondada nos quatro cantos em `--radius-md`,
   com fundo `--surface` (as fotos têm fundo claro; a superfície sutil dá o
   limite que a borda dava antes). No hover, a foto tem um leve
   `scale(1.02)` com transição suave, contida pelo `overflow: hidden` do
   próprio contêiner de mídia — respeita `prefers-reduced-motion`.
2. Bloco de texto **solto direto sobre o fundo da página**, logo abaixo da
   foto, sem caixa e sem padding lateral próprio: título + preço na mesma
   linha (16px/500 à esquerda, preço 15px/500 com `tabular-nums` à
   direita), categoria · condição (12px `--text-muted`) logo abaixo, bem
   coladas — e um respiro maior separando esse grupo da foto acima e das
   ações abaixo.
3. Ações ("detalhes", "quero esse") como link de texto, 13px — não botão
   preenchido.

O resumo do item some da face do card; a descrição completa só aparece
atrás do toggle "detalhes". O medidor de blocos da condição foi removido —
a palavra (ex: "Excelente") já comunica o estado, com a descrição completa
disponível via `title` e para leitor de tela. O número do lote deixou de
ser exibido — existe só como `id` interno.

## Estado "vendido"

Elemento preservado da direção anterior — foi o único ponto elogiado. O
carimbo rotacionado sobre a foto continua com uma camada fantasma
levemente deslocada atrás (hoje em `--text`/cinza escuro, não mais azul) e
o carimbo principal com fundo `--accent` e texto em `--text` por cima.

**A foto do item vendido fica colorida.** Ela já foi dessaturada, e isso
custava caro: nas fotos do PC gamer o RGB é justamente o que elas têm de
bom. O estado é comunicado pelo card, não por estragar a imagem.

Como o card não tem mais contorno próprio para tingir, a identidade do
estado vendido vai para a própria foto: um anel na cor do estado
(`outline: 2px solid var(--accent)`, para dentro do contêiner de mídia),
reconhecível de relance na grade sem precisar ler o carimbo. Preço e CTA
somem; no lugar do preço aparece "Vendido" numa pílula `--accent` com texto
em `--text` — rosa como texto sobre branco mede ~2.9:1 e reprovaria em AA.

## Chips de filtro

Pílulas (`--radius-pill`), sem borda em nenhum estado. Inativo: só texto em
`--text-muted`. Ativo: fundo `--surface`, texto `--text` peso 500. Altura
mínima de toque 44px e foco de teclado visível em ambos os estados.

## O bait do hero

À direita do texto do hero (a partir de 900px, onde sobra espaço) fica um
bloco clicável: "Por que estou vendendo os itens?" com a dica "clica aqui
pra descobrir". O clique abre um diálogo que responde "Segredo 🤫 — Em
breve nos cinemas" e emenda um convite para gabrielbraga.dev, o site
pessoal do dono. A piada é a isca; o link é o destino real.

É o único elemento puramente brincalhão do site, e é de propósito: um só.
Ele usa a mesma paleta neutra do resto — a graça está no texto, não em
cor nova. A leve rotação retoma o gesto do carimbo de vendido.

Implementado com `<dialog>` nativo e `showModal()`, que já entrega foco
preso dentro, Esc para fechar e devolução do foco ao botão de origem. Não
troque por uma div com `position: fixed`.

**Abaixo de 640px o diálogo vira bottom sheet**, não a caixa centralizada de
desktop: largura total, colado na base da tela (`margin: auto auto 0`),
cantos superiores arredondados em 20px e inferiores retos, com padding
extra na base para a safe area do iOS. Entra deslizando de baixo
(`translateY(100%)` → `0`) e o `::backdrop` faz fade — ambos desligados sob
`prefers-reduced-motion`. A partir de 640px volta a ficar centralizado, com
`--radius-lg` e mais padding interno.

## Não faça

- Sem azul em lugar nenhum do site.
- Sem gradientes.
- Sem sombra (difusa ou chapada) em nenhum elemento.
- Sem glassmorphism.
- Sem mais de uma família tipográfica.
- Sem fonte monoespaçada.
- Sem caixa alta com letter-spacing largo, exceto no carimbo de vendido.
- Sem `--accent` fora do estado "vendido" — nem em link, nem em hover, nem
  em chip ativo, nem em foco.
- Sem textura, ruído ou overlay de papel — o fundo é liso, branco, sólido.
