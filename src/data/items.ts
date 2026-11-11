import type { Item } from '../types/item';
import { assetUrl } from '../utils/asset';

function itemImage(filename: string): string {
  return assetUrl(`assets/images/items/${filename}`);
}

export const ITEMS: Item[] = [
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
      {
        type: 'image',
        src: itemImage('pc-gamer-5.webp'),
        alt: 'Gabinete com fans em roxo e azul iluminados',
      },
      {
        type: 'image',
        src: itemImage('pc-gamer-6.webp'),
        alt: 'Gabinete com fans em verde e rosa iluminados',
      },
      {
        type: 'image',
        src: itemImage('pc-gamer-7.webp'),
        alt: 'Gabinete com fans em azul iluminados, outro ângulo',
      },
      {
        type: 'image',
        src: itemImage('pc-gamer-8.webp'),
        alt: 'Close do cooler e da placa de vídeo GeForce RTX iluminados',
      },
    ],
    sold: true,
  },
  {
    id: 14,
    title: 'Webcam Redragon Apex 1080p GW900 Preto',
    summary: 'Webcam gamer com foco automático e LED indicador. Vendida.',
    description:
      'Webcam Redragon Apex GW900 Full HD (1080p), ideal para lives e chamadas. Autofoco e microfone embutido. Testada e funcionando normalmente, sem riscos na lente.',
    category: 'eletronicos',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('webcam-1.webp'), alt: 'Webcam Redragon segurada na mão, com monitor ao fundo' },
    ],
    sold: true,
  },
  {
    id: 15,
    title: 'Combo Teclado e Mouse sem fio Logitech MK235',
    summary: 'Layout ABNT2, conjunto sem fio slim. Bom estado de conservação.',
    description:
      'Combo Teclado e Mouse sem fio Logitech MK235, layout ABNT2. Acompanha receptor USB único. Boa autonomia de bateria e funcionamento normal em todas as teclas e botões.',
    price: 0,
    category: 'eletronicos',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('teclado-mouse-sf-1.webp'), alt: 'Teclado e mouse sem fio sobre a mesa' },
      { type: 'image', src: itemImage('teclado-mouse-sf-2.webp'), alt: 'Parte inferior do mouse sem fio' },
    ],
  },
  {
    id: 16,
    title: 'Teclado Mecânico Redragon Surara Pro RGB',
    summary: 'Switch Optical Brown, iluminação RGB por tecla. Boa resposta tátil.',
    description:
      'Teclado Mecânico Gamer Redragon Surara Pro RGB, na cor branca, com Switch Optical Brown e iluminação RGB individual por tecla. Ótima resposta tátil. Usado, com leve desgaste estético nas teclas mais usadas.',
    price: 0,
    category: 'eletronicos',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('teclado-mecanico-1.webp'), alt: 'Teclado mecânico branco com iluminação RGB' },
    ],
  },
  {
    id: 17,
    title: 'Monitor AOC',
    summary: 'Tela ligada e funcionando normalmente, sem pixels mortos aparentes.',
    description:
      'Monitor AOC em pleno funcionamento, imagem nítida e sem pixels mortos aparentes. Boa opção para setup de trabalho ou jogos. Inclui ajustes de tela testados no menu de configurações.',
    price: 0,
    category: 'eletronicos',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('monitor-1.webp'), alt: 'Tela do monitor exibindo padrão de pontos coloridos' },
      { type: 'image', src: itemImage('monitor-2.webp'), alt: 'Menu de configurações de exibição do monitor' },
      { type: 'image', src: itemImage('monitor-3.webp'), alt: 'Monitor exibindo papel de parede de paisagem' },
    ],
  },
  {
    id: 18,
    title: 'Mousepad gamer DON',
    summary: 'Mousepad estendido preto com detalhe gravado a laser. Pouco uso.',
    description:
      'Mousepad gamer estendido, na cor preta com detalhe vermelho gravado a laser. Superfície lisa e boa para deslizamento do mouse. Pouco uso, sem desgaste significativo.',
    price: 0,
    category: 'eletronicos',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('mousepad-1.webp'), alt: 'Mousepad preto estendido com detalhe vermelho' },
      { type: 'image', src: itemImage('mousepad-2.webp'), alt: 'Close do detalhe gravado a laser no mousepad' },
    ],
  },
  {
    id: 19,
    title: 'Microfone condensador USB Fifine Ampligame',
    summary: 'Microfone gamer/streaming com anel de LED RGB. Acompanha caixa e base.',
    description: [
      'Microfone Fifine Ampligame, dinâmico, com anel de LED RGB, controle de volume e de ganho do fone no próprio corpo. Acompanha base, manual e caixa original.',
      '',
      'Características:',
      '- Marca: Fifine',
      '- Modelo: Ampligame',
      '',
      'Especificações:',
      '- Tipo: Dinâmico',
      '- Padrão polar: Cardióide',
      '- Conexão de saída: USB tipo C (extremidade do microfone) para tipo A 2.0 (extremidade do computador)/XLR',
      '- Consumo de energia USB: Voltagem: 5±0,25 V',
      '- Profundidade de bits/taxa de amostragem: 16 bits/44,1k-48k Hz',
      '- Resposta de frequência: 50-16 kHz',
      '- Relação S/N: >80 dB',
      '- Sensibilidade: -50±3dB',
    ].join('\n'),
    price: 0,
    category: 'eletronicos',
    condition: 'excelente',
    media: [
      { type: 'image', src: itemImage('microfone-1.webp'), alt: 'Microfone Fifine com anel de LED roxo aceso' },
      { type: 'image', src: itemImage('microfone-2.webp'), alt: 'Close do microfone Fifine com logo na base' },
      { type: 'image', src: itemImage('microfone-box-1.webp'), alt: 'Caixa do microfone Fifine Ampligame' },
      { type: 'image', src: itemImage('microfone-open-1.webp'), alt: 'Caixa aberta com base, manual e acessórios do microfone' },
      { type: 'image', src: itemImage('microfone-ref-1.webp'), alt: 'Microfone Fifine Ampligame em suporte de mesa com iluminação RGB' },
      { type: 'image', src: itemImage('microfone-ref-2.webp'), alt: 'Close dos controles de volume e ganho do microfone Fifine Ampligame' },
      { type: 'image', src: itemImage('microfone-ref-3.webp'), alt: 'Microfone Fifine Ampligame em três cores de iluminação RGB' },
    ],
  },
  {
    id: 20,
    title: 'Luz de vídeo LED portátil (clip)',
    summary: 'Mini painel de luz LED com clipe, ótima para videochamadas. Pouco uso.',
    description:
      'Luz de vídeo LED portátil, com clipe de fixação e difusor. Ideal para videochamadas, selfies e pequenas produções de vídeo. Pouco uso, funcionando normalmente.',
    price: 0,
    category: 'eletronicos',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('luz-led-1.webp'), alt: 'Mini luz de LED com difusor montada em suporte' },
      { type: 'image', src: itemImage('luz-led-2.webp'), alt: 'Mini luz de LED branca presa por clipe' },
      { type: 'image', src: itemImage('luz-led-3.webp'), alt: 'Mini luz de LED acesa em vermelho sobre tecido' },
    ],
  },
  {
    id: 21,
    title: 'Mini luminária RGB de bolso',
    summary: 'RGB Pocket Lamp, luz de ambiente portátil com várias cores. Compacta.',
    description:
      'Mini luminária RGB de bolso (RGB Pocket Lamp), recarregável, com várias cores e efeitos de iluminação. Tamanho compacto, ótima para cenário de fotos ou ambientação.',
    price: 0,
    category: 'eletronicos',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('pocket-lamp-1.webp'), alt: 'Mini luminária RGB de bolso desligada' },
      { type: 'image', src: itemImage('pocket-lamp-2.webp'), alt: 'Mini luminária RGB de bolso acesa no escuro' },
    ],
  },
  {
    id: 22,
    title: 'Mouse Logitech G sem fio',
    summary: 'Mouse gamer sem fio com iluminação RGB. Sensor preciso, bom estado.',
    description:
      'Mouse gamer Logitech G sem fio, com iluminação RGB e sensor de alta precisão. Boa pegada e cliques responsivos. Usado, em bom estado de conservação.',
    price: 0,
    category: 'eletronicos',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('mouse-g-1.webp'), alt: 'Mouse Logitech G visto de cima sobre mousepad vermelho' },
      { type: 'image', src: itemImage('mouse-g-2.webp'), alt: 'Mouse Logitech G visto de lado com luz RGB azul' },
      { type: 'image', src: itemImage('mouse-g-3.webp'), alt: 'Parte inferior do mouse Logitech G' },
    ],
  },
  {
    id: 23,
    title: 'Tripé + mini câmera de ação',
    summary: 'Tripé/monopé extensível acompanhado de mini câmera de ação. Funcionando.',
    description:
      'Kit com tripé/monopé extensível e mini câmera de ação estilo GoPro. Ótimo para vídeos, vlogs e transmissões. Testado e funcionando normalmente.',
    price: 0,
    category: 'eletronicos',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('tripod-1.webp'), alt: 'Tripé extensível aberto sobre a cama' },
      { type: 'image', src: itemImage('tripod-2.webp'), alt: 'Tripé montado perto da janela' },
      { type: 'image', src: itemImage('actioncam-1.webp'), alt: 'Mini câmera de ação montada no tripé' },
      { type: 'image', src: itemImage('actioncam-2.webp'), alt: 'Mini câmera de ação montada no tripé, outro ângulo' },
      { type: 'image', src: itemImage('actioncam-3.webp'), alt: 'Close da mini câmera de ação montada' },
    ],
  },
  {
    id: 24,
    title: 'Lote de bonecos Star Wars',
    summary: 'Mini figuras colecionáveis: stormtroopers, Chewbacca e chaveiros. Bom estado.',
    description:
      'Lote de colecionáveis Star Wars: mini figuras de Stormtrooper e Chewbacca, além de chaveiros temáticos. Peças em bom estado, sem quebras.',
    price: 0,
    category: 'colecionaveis',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('starwars-lot-1.webp'), alt: 'Conjunto de bonecos e chaveiros de Star Wars sobre a mesa' },
      { type: 'image', src: itemImage('starwars-lot-2.webp'), alt: 'Boneco Stormtrooper na mão' },
      { type: 'image', src: itemImage('starwars-lot-3.webp'), alt: 'Boneco Stormtrooper na mão, outro ângulo' },
      { type: 'image', src: itemImage('starwars-lot-4.webp'), alt: 'Boneco Chewbacca na mão' },
      { type: 'image', src: itemImage('starwars-lot-5.webp'), alt: 'Boneco Chewbacca na mão, outro ângulo' },
    ],
  },
  {
    id: 25,
    title: 'Pelúcia Grogu (Baby Yoda)',
    summary: 'Pelúcia macia do Grogu, personagem de The Mandalorian. Bom estado.',
    description:
      'Pelúcia do Grogu (Baby Yoda), personagem de The Mandalorian. Material macio, sem manchas ou rasgos visíveis. Boa para decoração ou presente.',
    price: 0,
    category: 'colecionaveis',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('grogu-1.webp'), alt: 'Pelúcia do Grogu vista de frente' },
      { type: 'image', src: itemImage('grogu-2.webp'), alt: 'Pelúcia do Grogu vista de costas' },
      { type: 'image', src: itemImage('grogu-3.webp'), alt: 'Close do capuz da pelúcia do Grogu' },
    ],
  },
  {
    id: 26,
    title: 'Boneco Doutor Estranho',
    summary: 'Mini figura colecionável da Marvel, sentado em pose de feitiço. Bom estado.',
    description:
      'Mini figura colecionável do Doutor Estranho (Marvel), em pose sentado com livro de feitiços. Pintura bem conservada, sem quebras.',
    price: 0,
    category: 'colecionaveis',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('doutorestranho-1.webp'), alt: 'Boneco do Doutor Estranho na mão, vista frontal' },
      { type: 'image', src: itemImage('doutorestranho-2.webp'), alt: 'Boneco do Doutor Estranho na mão, outro ângulo' },
      { type: 'image', src: itemImage('doutorestranho-3.webp'), alt: 'Boneco do Doutor Estranho visto de costas' },
    ],
  },
  {
    id: 27,
    title: 'Livro: Código Limpo',
    summary: 'Robert C. Martin, edição revisada. Usado, mas em estado de novo.',
    description:
      '"Código Limpo: Habilidades Práticas do Agile Software", de Robert C. Martin, edição revisada. Único da lista que já foi usado, mas está em estado de novo, sem desgaste perceptível na capa ou nas páginas.',
    price: 0,
    category: 'livros',
    condition: 'excelente',
    media: [
      { type: 'image', src: itemImage('livro-codigolimpo-1.webp'), alt: 'Capa do livro Código Limpo' },
      { type: 'image', src: itemImage('livro-codigolimpo-2.webp'), alt: 'Lombada do livro Código Limpo' },
      { type: 'image', src: itemImage('livro-codigolimpo-3.webp'), alt: 'Contracapa do livro Código Limpo' },
    ],
  },
  {
    id: 28,
    title: 'Livro: O Codificador Limpo',
    summary: 'Robert C. Martin (The Clean Coder). Ainda lacrado na embalagem original.',
    description:
      '"O Codificador Limpo", de Robert C. Martin, sobre conduta profissional de engenharia de software. Exemplar novo, ainda lacrado na embalagem original.',
    price: 0,
    category: 'livros',
    condition: 'excelente',
    media: [
      { type: 'image', src: itemImage('livro-codificadorlimpo-1.webp'), alt: 'Capa do livro O Codificador Limpo, lacrado' },
      { type: 'image', src: itemImage('livro-codificadorlimpo-2.webp'), alt: 'Contracapa do livro O Codificador Limpo, lacrado' },
    ],
  },
  {
    id: 29,
    title: 'Livro: Microsserviços Prontos para Produção',
    summary: 'Susan J. Fowler, editora Novatec. Ainda lacrado na embalagem original.',
    description:
      '"Microsserviços Prontos para Produção", de Susan J. Fowler (Novatec), ótimo para quem trabalha com arquitetura de software. Exemplar novo, ainda lacrado na embalagem original.',
    price: 0,
    category: 'livros',
    condition: 'excelente',
    media: [
      { type: 'image', src: itemImage('livro-microservicos-1.webp'), alt: 'Capa do livro Microsserviços Prontos para Produção, lacrado' },
      { type: 'image', src: itemImage('livro-microservicos-2.webp'), alt: 'Contracapa do livro Microsserviços Prontos para Produção, lacrado' },
    ],
  },
  {
    id: 30,
    title: 'Livro: O Investidor Inteligente',
    summary: 'Benjamin Graham, ainda lacrado na embalagem original. Novo.',
    description:
      '"O Investidor Inteligente", de Benjamin Graham, clássico sobre investimentos. Exemplar novo, ainda lacrado na embalagem original.',
    price: 0,
    category: 'livros',
    condition: 'excelente',
    media: [
      { type: 'image', src: itemImage('livro-investidor-1.webp'), alt: 'Capa do livro O Investidor Inteligente, lacrado' },
      { type: 'image', src: itemImage('livro-investidor-2.webp'), alt: 'Lombada do livro O Investidor Inteligente' },
      { type: 'image', src: itemImage('livro-investidor-3.webp'), alt: 'Contracapa do livro O Investidor Inteligente, lacrado' },
    ],
  },
  {
    id: 31,
    title: 'Lote de miniaturas Nintendo',
    summary: 'Figuras de Mario, Luigi, Donkey Kong e amigos. Bom estado.',
    description:
      'Lote de miniaturas colecionáveis do universo Nintendo: Mario, Luigi, Donkey Kong, Toad e outros personagens. Peças em bom estado, sem quebras.',
    price: 0,
    category: 'colecionaveis',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('mario-lot-1.webp'), alt: 'Miniaturas de personagens da Nintendo em prateleira' },
      { type: 'image', src: itemImage('mario-lot-2.webp'), alt: 'Miniaturas de personagens da Nintendo em prateleira, outro ângulo' },
    ],
  },
  {
    id: 32,
    title: 'Perfume Essencial Único (O Boticário)',
    summary: 'Fragrância amadeirada, pouco usado, acompanha caixa original.',
    description:
      'Perfume Essencial Único, de O Boticário. Fragrância amadeirada, frasco com boa quantidade restante. Acompanha caixa original.',
    price: 0,
    category: 'beleza',
    condition: 'bom',
    media: [
      { type: 'image', src: itemImage('perfume-1.webp'), alt: 'Caixa do perfume Essencial Único fechada' },
      { type: 'image', src: itemImage('perfume-2.webp'), alt: 'Caixa do perfume aberta mostrando o frasco' },
      { type: 'image', src: itemImage('perfume-3.webp'), alt: 'Frasco do perfume dentro da caixa' },
      { type: 'image', src: itemImage('perfume-4.webp'), alt: 'Frasco do perfume na mão, contra a luz da janela' },
    ],
  },
];
