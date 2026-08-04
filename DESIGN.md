# Direção de arte — DropMyStuff

## Conceito

**Zine de risografia.** O site se comporta como uma publicação pessoal de
tiragem pequena, feita para catalogar coisas que estão sendo deixadas para
trás. A referência é a impressão em risógrafo: tintas chapadas em uma ou
duas cores por vez, um leve fora-de-registro entre camadas, papel com
granulação visível. É um objeto impresso, não uma tela de vidro.

Isso significa, na prática:

- Formas sólidas e bem definidas, não gradientes.
- Contraste de tinta sobre papel, não profundidade simulada com sombra.
- Uma textura de fundo constante que lembra a fibra do papel.
- Tipografia com peso e caráter — o Syne carrega a personalidade da marca.

## Tokens de cor

| Token | Hex | Uso |
|---|---|---|
| `--paper` | `#EAE7DE` | Fundo da página — papel jornal quente |
| `--paper-shade` | `#DEDACF` | Superfícies de card, divisores, áreas de destaque sutil |
| `--ink` | `#17171C` | Texto principal, bordas, quase preto |
| `--ink-soft` | `#55555F` | Texto secundário, metadados discretos |
| `--riso-blue` | `#2B44A8` | Tinta primária — links, chips ativos, ações primárias, foco de teclado |
| `--riso-pink` | `#FF3D8B` | Tinta fluorescente — elemento-assinatura, hover, estado "vendido". **Só para preenchimentos/fundos e áreas grandes** — não passa em contraste como texto sobre papel (ver nota abaixo) |
| `--riso-pink-ink` | `#A81155` | Variante escura do pink, só para **texto ou bordas com significado** sobre `--paper`/`--paper-shade` (label "vendido", chip ativo, links em hover) |
| `--riso-overlap` | `#5B2E86` | Simula o multiply de blue + pink; usar com muita parcimônia (nunca como cor de base) |

Sem modo escuro nesta etapa.

### Nota de contraste (auditoria de acessibilidade)

`--riso-pink` sobre `--paper` mede ~2.7:1 e sobre `--paper-shade` ~2.4:1 —
abaixo do mínimo WCAG AA (3:1 para elementos gráficos/UI, 4.5:1 para texto
normal). Isso reprovava o carimbo "Vendido", o rótulo de preço vendido, o
chip "Esconder vendidos" ativo e os links em hover. `--riso-blue` e
`--ink-soft` sobre `--paper` passam (~6.8:1 e ~5.96:1) e não precisaram de
ajuste. A correção foi introduzir `--riso-pink-ink` (mede ~5.9:1 sobre
`--paper` e ~5.2:1 sobre `--paper-shade`) para todo uso de pink como texto
ou borda-com-significado; `--riso-pink` continua reservado para
preenchimentos/fundos de área grande, onde a tinta original mantém a
identidade fluorescente do site.

**Regra prática: o rosa preenche, nunca escreve.** No carimbo de "vendido" e
no rótulo de vendido do rodapé do card, a primeira tentativa foi escurecer o
rosa para virar cor de texto — e o carimbo perdeu a qualidade fluorescente
que define o conceito. A solução melhor foi inverter: `--riso-pink` como
fundo chapado com `--ink` escrevendo por cima. Passa em contraste com folga
(~5.4:1), deixa a tinta-assinatura mais presente, e é mais fiel a um carimbo
de verdade. Prefira sempre essa inversão a escurecer o rosa.

## Tipografia

Três famílias, cada uma com um papel fixo — não se misturam fora do seu uso.

- **Syne** (700, 800) — família de display. Reservada para a wordmark, o
  headline do hero e títulos de item. Uso restrito: é a voz mais alta da
  página, então aparece pouco.
- **Instrument Sans** (400, 500) — corpo de texto. Descrições, parágrafos,
  qualquer prosa que precise ser lida com conforto.
- **Space Mono** (400, 700) — camada utilitária. Preços, números de lote,
  tags, labels e metadados. Sempre em caixa alta com letter-spacing quando
  usada como label (ex: eyebrows, botões, links de rodapé).

### Escala de tipo (fluida, `clamp()`)

| Token | Faixa | Uso típico |
|---|---|---|
| `--text-xs` | 0.7rem → 0.78rem | labels, metadados |
| `--text-sm` | 0.82rem → 0.9rem | botões, links utilitários |
| `--text-base` | 1rem → 1.08rem | corpo de texto padrão |
| `--text-lg` | 1.15rem → 1.35rem | parágrafo de destaque, wordmark no header |
| `--text-xl` | 1.4rem → 1.85rem | subtítulos |
| `--text-2xl` | 1.9rem → 2.75rem | títulos de seção |
| `--text-3xl` | 2.4rem → 4rem | títulos grandes |
| `--text-4xl` | 3rem → 5.5rem | headline do hero |

## Elemento-assinatura

O **overlay de granulação**: um ruído sutil (SVG `feTurbulence` como
data-URI) aplicado como `background-image` fixo sobre toda a página,
opacidade entre 0.035 e 0.05, `mix-blend-mode: multiply`. É o que faz a
página parecer impressa em vez de renderizada. Estático — não anima, então
não conflita com `prefers-reduced-motion`.

Em segundo plano, o **rosa fluorescente** (`--riso-pink`) funciona como
assinatura de interação: é a cor que aparece em hover, seleção de texto e no
estado "vendido" — sempre pontual, nunca como cor de fundo de área grande.

## Não faça

- Sem gradientes, em nenhuma cor ou combinação.
- Sem sombras difusas / soft shadow (`box-shadow` com blur alto). Se precisar
  separar camadas, use borda sólida (`--ink`, 2px) ou deslocamento chapado
  (offset sem blur), não profundidade simulada.
- Sem glassmorphism (blur de fundo, transparência com desfoque).
- Sem badge colorido de status genérico (verde = disponível, vermelho =
  vendido, etc.). O estado "vendido" se comunica com a tinta do sistema
  (`--riso-pink`) e tratamento tipográfico, não com uma pílula colorida solta.
- Sem `border-radius` grande ou `border-radius: 9999px` (pill/full) em
  cards ou botões — o riso é chapado, os cantos ficam discretos
  (`--radius-sm` a `--radius-lg`, 2–6px).
- Sem misturar as três famílias tipográficas fora dos papéis definidos acima
  (ex: nunca usar Space Mono para prosa longa, nunca usar Syne para
  metadados).
