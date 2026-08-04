export const CATEGORIES = [
  { id: 'eletronicos', label: 'Eletrônicos' },
  { id: 'casa', label: 'Casa' },
  { id: 'moda', label: 'Moda' },
  { id: 'musica', label: 'Música' },
] as const satisfies ReadonlyArray<{ id: string; label: string }>;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export const CONDITIONS = ['excelente', 'bom', 'regular', 'desgastado'] as const;

export type Condition = (typeof CONDITIONS)[number];

interface ConditionInfo {
  label: string;
  /** 4 = melhor estado, 1 = pior; usado pelo medidor de blocos na UI */
  rank: 4 | 3 | 2 | 1;
  description: string;
}

export const CONDITION_INFO: Record<Condition, ConditionInfo> = {
  excelente: {
    label: 'Excelente',
    rank: 4,
    description: 'Como novo, sinais mínimos de uso',
  },
  bom: {
    label: 'Bom',
    rank: 3,
    description: 'Usado mas bem conservado',
  },
  regular: {
    label: 'Regular',
    rank: 2,
    description: 'Mostra desgaste mas totalmente funcional',
  },
  desgastado: {
    label: 'Desgastado',
    rank: 1,
    description: 'Desgaste significativo mas ainda utilizável',
  },
};

export type Media =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster: string; alt: string };

export interface Item {
  /** número do lote, exibido como "LOTE 07" */
  id: number;
  title: string;
  /** linha curta (max ~90 caracteres) para o card */
  summary: string;
  description: string;
  price: number;
  category: CategoryId;
  condition: Condition;
  media: Media[];
  sold?: boolean;
}
