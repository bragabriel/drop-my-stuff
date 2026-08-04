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
