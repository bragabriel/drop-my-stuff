import type { Item } from '../types/item';
import { assetUrl } from '../utils/asset';

function itemImage(filename: string): string {
  return assetUrl(`assets/images/items/${filename}`);
}

export const ITEMS: Item[] = [
  {
    id: 1,
    title: 'Jaqueta de couro vintage',
    summary: 'Couro marrom dos anos 90, desgaste mínimo. Bolsos internos e zíper de metal.',
    description:
      'Jaqueta clássica de couro marrom dos anos 90. Couro de alta qualidade com desgaste mínimo. Perfeita para ocasiões casuais ou semi-formais. Inclui bolsos internos, zíper de metal e punhos ajustáveis.',
    price: 150,
    category: 'moda',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('jacket-1.webp'), alt: 'Jaqueta de couro marrom com zíper frontal' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Jaqueta de couro marrom, vista de costas' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Detalhe dos bolsos internos da jaqueta' },
    ],
  },
  {
    id: 2,
    title: 'MacBook Pro 2019',
    summary: '13 polegadas, i5, 8GB, 256GB SSD. Bateria com menos de 200 ciclos.',
    description:
      'MacBook Pro 13 polegadas, modelo 2019. Intel Core i5, 8GB RAM, 256GB SSD. Contagem de ciclos da bateria abaixo de 200. Acompanha carregador original e caixa. Pequenos arranhões cosméticos na parte inferior, tela impecável.',
    price: 800,
    category: 'eletronicos',
    condition: 'excelente',
    media: [
      { type: 'image', src: itemImage('macbook-1.webp'), alt: 'MacBook Pro prateado aberto, tela ligada' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'MacBook Pro fechado ao lado do carregador original' },
    ],
    sold: true,
  },
  {
    id: 3,
    title: 'Mesa de centro de madeira',
    summary: 'Carvalho maciço, acabamento rústico. Arranhões e manchas de água visíveis, mas sólida.',
    description:
      'Mesa de centro de carvalho maciço com acabamento rústico. Dimensões: 120cm x 60cm x 45cm. Possui alguns arranhões visíveis e pequenas manchas de água na superfície, mas estruturalmente sólida e resistente.',
    price: 75,
    category: 'casa',
    condition: 'regular',
    media: [
      { type: 'image', src: itemImage('table-1.webp'), alt: 'Mesa de centro de madeira maciça em ambiente de sala' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Detalhe da superfície da mesa com marcas de uso' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Mesa de centro vista de lado' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Pernas de madeira da mesa de centro' },
    ],
  },
  {
    id: 4,
    title: 'Nike Air Max 270',
    summary: 'Preto e branco, tamanho US 10. Poucas vezes usado, praticamente novo.',
    description:
      'Nike Air Max 270 nas cores preto e branco. Tamanho US 10. Usado poucas vezes, praticamente novo. Caixa original incluída. Sem sinais de desgaste no solado ou parte superior.',
    price: 90,
    category: 'moda',
    condition: 'excelente',
    media: [
      { type: 'image', src: itemImage('sneakers-1.webp'), alt: 'Tênis Nike Air Max preto e branco, vista lateral' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Par de tênis Nike Air Max dentro da caixa original' },
    ],
  },
  {
    id: 5,
    title: 'Violão Yamaha F310',
    summary: 'Acústico para iniciante, som excelente. Capa e cordas extras inclusas.',
    description:
      'Violão acústico ideal para iniciantes. Bem conservado, som excelente. Inclui capa macia e cordas extras. Algum desgaste no acabamento da parte traseira devido ao uso regular.',
    price: 120,
    category: 'musica',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('guitar-1.webp'), alt: 'Violão acústico marrom encostado na parede' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Capa macia do violão com cordas extras ao lado' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Detalhe do tampo do violão' },
    ],
  },
  {
    id: 6,
    title: 'Luminária de mesa LED',
    summary: 'Brilho e temperatura ajustáveis, porta USB. Usada por 2 anos, arranhões leves na base.',
    description:
      'Luminária LED moderna com brilho e temperatura de cor ajustáveis. Painel de controle touch. Porta USB para carregamento incluída. Usada diariamente por cerca de 2 anos, pequenos arranhões na base.',
    price: 35,
    category: 'casa',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('lamp-1.webp'), alt: 'Luminária de mesa LED articulada acesa' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Painel touch de controle da luminária' },
    ],
  },
  {
    id: 7,
    title: 'Câmera Polaroid vintage',
    summary: 'Polaroid OneStep+, testada e funcionando. Sem filmes inclusos, desgaste cosmético na carcaça.',
    description:
      'Câmera instantânea Polaroid OneStep+. Testada e funcionando perfeitamente. Captura fotos incríveis no estilo vintage. Não inclui pacotes de filme. Algum desgaste cosmético na carcaça externa.',
    price: 110,
    category: 'eletronicos',
    condition: 'regular',
    media: [
      { type: 'image', src: itemImage('camera-1.webp'), alt: 'Câmera instantânea Polaroid OneStep+ na cor branca' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Câmera Polaroid vista de frente com lente em destaque' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Parte traseira da câmera Polaroid' },
    ],
  },
  {
    id: 8,
    title: 'Bolsa de grife',
    summary: 'Couro preto, interior espaçoso, ferragens douradas. Alças em excelente estado.',
    description:
      'Elegante bolsa de couro preta de marca premium. Interior espaçoso com múltiplos compartimentos. Ferragens em tom dourado. Mostra sinais mínimos de uso, alças em excelente estado.',
    price: 200,
    category: 'moda',
    condition: 'excelente',
    media: [
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Bolsa de couro preta com alça de mão' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Interior da bolsa de couro preta com compartimentos' },
    ],
  },
  {
    id: 9,
    title: 'Mouse gamer Logitech G502',
    summary: 'Pesos ajustáveis, RGB, botões 100% funcionais. Cabo com desgaste perto do conector.',
    description:
      'Mouse gamer popular com pesos personalizáveis e iluminação RGB. Todos os botões totalmente funcionais. Cabo mostra algum desgaste perto do conector, mas ainda funciona perfeitamente.',
    price: 40,
    category: 'eletronicos',
    condition: 'desgastado',
    media: [{ type: 'image', src: itemImage('placeholder.svg'), alt: 'Mouse gamer preto com iluminação RGB' }],
  },
  {
    id: 10,
    title: 'Conjunto de vasos de cerâmica',
    summary: '3 vasos artesanais em tons terrosos, tamanhos diferentes. Novos, nunca usados.',
    description:
      'Conjunto de 3 vasos de cerâmica artesanais em diferentes tamanhos. Belo acabamento esmaltado em tons terrosos suaves. Perfeito para suculentas ou plantas pequenas. Novos, nunca usados.',
    price: 45,
    category: 'casa',
    condition: 'excelente',
    media: [
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Três vasos de cerâmica em tons terrosos lado a lado' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Vaso de cerâmica esmaltado visto de cima' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Conjunto de vasos vazios sobre uma mesa' },
    ],
  },
  {
    id: 11,
    title: 'Coleção de discos de vinil',
    summary: '15 discos de rock clássico dos anos 70/80, com Pink Floyd, Led Zeppelin e Beatles.',
    description:
      'Coleção de 15 discos de vinil de rock clássico dos anos 70 e 80. Inclui álbuns de Pink Floyd, Led Zeppelin e The Beatles. Maioria em boas condições de reprodução, alguns arranhões superficiais.',
    price: 180,
    category: 'musica',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Pilha de discos de vinil de rock clássico' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Capa de disco de vinil em destaque na coleção' },
    ],
  },
  {
    id: 12,
    title: 'Cadeira de escritório ergonômica',
    summary: 'Mesh, suporte lombar, braços e altura ajustáveis. Desgaste leve no assento.',
    description:
      'Cadeira de escritório confortável em mesh com suporte lombar e apoios de braço ajustáveis. Altura regulável. Usada por cerca de um ano, mostra desgaste leve no assento mas ainda muito confortável.',
    price: 95,
    category: 'casa',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Cadeira de escritório em mesh preto' },
      { type: 'image', src: itemImage('placeholder.svg'), alt: 'Base giratória e apoios de braço da cadeira' },
    ],
  },
  {
    id: 13,
    title: 'PC Gamer Intel i9 + RTX 3060',
    summary: 'Core i9 10900F, RTX 3060 12GB, 16GB RAM, 2TB em SSD. Gabinete com 10 fans RGB.',
    description: [
      'Processador: Intel Core i9 10900F (10ª geração), 10 núcleos, 20 threads, socket LGA 1200, 2.80 GHz.',
      'Placa de vídeo: NVIDIA GeForce RTX 3060, 12 GB.',
      'Placa-mãe: ASUS TUF Gaming Z490-Plus, Intel LGA 1200, ATX, DDR4.',
      'Memória RAM: 16 GB BraveX Gamer RGB, DDR4, 3000 MHz.',
      'Armazenamento: SSD NVMe Kingston de 1 TB (leitura 6.000 MB/s, escrita 4.000 MB/s) e SSD SATA WIN Memory de 1 TB (leitura 550 MB/s, escrita 500 MB/s).',
      'Air cooler: Cooler Master MasterAir MA620P RGB, 120 mm.',
      'Gabinete Aquário, com kit de 10 fans RGB e controladora.',
      'Fonte: 550 W RGB.',
    ].join('\n'),
    category: 'eletronicos',
    condition: 'bom',
    media: [
      {
        type: 'image',
        src: itemImage('pc-gamer-1.webp'),
        alt: 'Interior do gabinete iluminado em azul, com nove fans RGB e a placa de vídeo à direita',
      },
      {
        type: 'image',
        src: itemImage('pc-gamer-2.webp'),
        alt: 'Mesmo gabinete com os fans em vermelho e verde e a fita de LED acesa sobre a placa-mãe',
      },
      {
        type: 'image',
        src: itemImage('pc-gamer-3.webp'),
        alt: 'Close do air cooler e das memórias BraveX iluminadas em roxo, ao lado da GeForce RTX',
      },
      {
        type: 'image',
        src: itemImage('pc-gamer-4.webp'),
        alt: 'Gabinete visto de lado com o painel de vidro aberto, mostrando cooler e placa de vídeo',
      },
    ],
    sold: true,
  },
];
