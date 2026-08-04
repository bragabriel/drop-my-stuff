# DropMyStuff

Site vitrine para divulgar itens pessoais à venda (eletrônicos, casa, moda e
música), com o contato de compra levando para Instagram/WhatsApp. Zine de
risografia — ver `DESIGN.md` para a direção de arte completa.

**Produção:** https://bragabriel.github.io/drop-my-stuff/

## Stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/)
- TypeScript

## Como rodar

```bash
# Instalar dependências
npm install

# Ambiente de desenvolvimento
npm run dev

# Build de produção
npm run build

# Checagens (typecheck, lint)
npm run typecheck
npm run lint
```

O site é publicado no GitHub Pages em um subcaminho
(`/drop-my-stuff/`, configurado em `vite.config.ts`), então assets em
`public/` devem ser referenciados com o helper `assetUrl()` de
`src/utils/asset.ts` (ou `%BASE_URL%` no `index.html`), nunca com um
caminho absoluto fixo como `/assets/...`.

## Como adicionar ou editar um item

Não há painel de administração — o inventário é o array `ITEMS` em
`src/data/items.ts`, editado à mão. Cada item segue o formato de `Item`
(definido em `src/types/item.ts`):

```ts
{
  id: 13, // número do lote, exibido como "LOTE 13" — não reutilize um id existente
  title: 'Nome curto do item',
  summary: 'Linha curta (até ~90 caracteres) mostrada no card fechado.',
  description: 'Descrição completa, mostrada quando o card é expandido.',
  price: 100, // em reais, sem formatação
  category: 'eletronicos', // 'eletronicos' | 'casa' | 'moda' | 'musica'
  condition: 'bom', // 'excelente' | 'bom' | 'regular' | 'desgastado'
  media: [
    { type: 'image', src: itemImage('meu-item-1.webp'), alt: 'Descreva o que aparece na foto' },
    { type: 'image', src: itemImage('placeholder.svg'), alt: '...' },
  ],
}
```

- **Imagens**: coloque o arquivo em `public/assets/images/items/` e
  referencie com o helper `itemImage('arquivo.webp')` já usado no topo do
  arquivo (ele por baixo dos panos usa `assetUrl`, então funciona tanto em
  dev quanto no subcaminho do GitHub Pages). Todo item precisa de pelo
  menos uma mídia; o `alt` é obrigatório e deve descrever a foto — é o que
  leitores de tela anunciam.
- **Vídeo**: use `{ type: 'video', src: itemImage('arquivo.mp4'), poster: itemImage('capa.webp'), alt: 'Descrição do vídeo' }`
  no array `media`. O `poster` é a imagem exibida antes do play e também
  entra em `public/assets/images/items/`.
- **Itens sem foto própria ainda**: use `itemImage('placeholder.svg')`
  (o arquivo fica em `public/assets/images/items/placeholder.svg`).
- **Marcar como vendido**: adicione `sold: true` ao item. O card ganha o
  carimbo "Vendido", vai para o fim da lista dentro da categoria e some do
  filtro quando "Esconder vendidos" está ativo. Para desfazer, remova a
  propriedade (ou mude para `sold: false`).
- **Categorias**: a lista de categorias válidas (e seus rótulos) fica em
  `CATEGORIES`, no topo de `src/types/item.ts`.

Depois de editar, rode `npm run typecheck` — o TypeScript aponta na hora se
faltou um campo obrigatório ou se `category`/`condition` tem um valor que
não existe.

## Autor

Criado por Gabriel Braga — [LinkedIn](https://www.linkedin.com/in/gabriel-braga-da-silva/) | [Twitter](https://x.com/gbraga_dev) | [YouTube](https://www.youtube.com/@gabrielbragadev)
