export type ItemCondition = 'excellent' | 'good' | 'fair' | 'worn';

export interface Item {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    condition: ItemCondition;
}
