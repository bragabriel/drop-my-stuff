import { Injectable } from '@angular/core';
import { Item, ItemCondition } from '../models/item.model';

@Injectable({
    providedIn: 'root'
})
export class ItemsService {
    private items: Item[] = [
        {
            id: 1,
            title: 'Vintage Leather Jacket',
            description: 'Jaqueta clássica de couro marrom dos anos 90. Couro de alta qualidade com desgaste mínimo. Perfeita para ocasiões casuais ou semi-formais. Inclui bolsos internos, zíper de metal e punhos ajustáveis.',
            price: 150,
            category: 'Vestuário',
            condition: 'good',
            images: [
                '/assets/images/items/jacket-1.jpg',
                '/assets/images/items/placeholder.svg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 2,
            title: 'Apple MacBook Pro 2019',
            description: 'MacBook Pro 13 polegadas, modelo 2019. Intel Core i5, 8GB RAM, 256GB SSD. Contagem de ciclos da bateria abaixo de 200. Acompanha carregador original e caixa. Pequenos arranhões cosméticos na parte inferior, tela impecável.',
            price: 800,
            category: 'Eletrônicos',
            condition: 'excellent',
            images: [
                '/assets/images/items/macbook-1.jpg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 3,
            title: 'Wooden Coffee Table',
            description: 'Mesa de centro de carvalho maciço com acabamento rústico. Dimensões: 120cm x 60cm x 45cm. Possui alguns arranhões visíveis e pequenas manchas de água na superfície, mas estruturalmente sólida e resistente.',
            price: 75,
            category: 'Móveis',
            condition: 'fair',
            images: [
                '/assets/images/items/table-1.jpg',
                '/assets/images/items/placeholder.svg',
                '/assets/images/items/placeholder.svg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 4,
            title: 'Nike Air Max Sneakers',
            description: 'Nike Air Max 270 nas cores preto e branco. Tamanho US 10. Usado poucas vezes, praticamente novo. Caixa original incluída. Sem sinais de desgaste no solado ou parte superior.',
            price: 90,
            category: 'Calçados',
            condition: 'excellent',
            images: [
                '/assets/images/items/sneakers-1.jpg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 5,
            title: 'Acoustic Guitar - Yamaha F310',
            description: 'Violão acústico ideal para iniciantes. Bem conservado, som excelente. Inclui capa macia e cordas extras. Algum desgaste no acabamento da parte traseira devido ao uso regular.',
            price: 120,
            category: 'Música',
            condition: 'good',
            images: [
                '/assets/images/items/guitar-1.jpg',
                '/assets/images/items/placeholder.svg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 6,
            title: 'Standing Desk Lamp',
            description: 'Luminária LED moderna com brilho e temperatura de cor ajustáveis. Painel de controle touch. Porta USB para carregamento incluída. Usada diariamente por cerca de 2 anos, pequenos arranhões na base.',
            price: 35,
            category: 'Casa & Escritório',
            condition: 'good',
            images: [
                '/assets/images/items/lamp-1.jpg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 7,
            title: 'Vintage Polaroid Camera',
            description: 'Câmera instantânea Polaroid OneStep+. Testada e funcionando perfeitamente. Captura fotos incríveis no estilo vintage. Não inclui pacotes de filme. Algum desgaste cosmético na carcaça externa.',
            price: 110,
            category: 'Eletrônicos',
            condition: 'fair',
            images: [
                '/assets/images/items/camera-1.jpg',
                '/assets/images/items/placeholder.svg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 8,
            title: 'Designer Handbag',
            description: 'Elegante bolsa de couro preta de marca premium. Interior espaçoso com múltiplos compartimentos. Ferragens em tom dourado. Mostra sinais mínimos de uso, alças em excelente estado.',
            price: 200,
            category: 'Acessórios',
            condition: 'excellent',
            images: [
                '/assets/images/items/placeholder.svg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 9,
            title: 'Gaming Mouse - Logitech G502',
            description: 'Mouse gamer popular com pesos personalizáveis e iluminação RGB. Todos os botões totalmente funcionais. Cabo mostra algum desgaste perto do conector, mas ainda funciona perfeitamente.',
            price: 40,
            category: 'Eletrônicos',
            condition: 'worn',
            images: [
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 10,
            title: 'Ceramic Plant Pot Set',
            description: 'Conjunto de 3 vasos de cerâmica artesanais em diferentes tamanhos. Belo acabamento esmaltado em tons terrosos suaves. Perfeito para suculentas ou plantas pequenas. Novos, nunca usados.',
            price: 45,
            category: 'Casa & Escritório',
            condition: 'excellent',
            images: [
                '/assets/images/items/placeholder.svg',
                '/assets/images/items/placeholder.svg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 11,
            title: 'Vintage Vinyl Records Collection',
            description: 'Coleção de 15 discos de vinil de rock clássico dos anos 70 e 80. Inclui álbuns de Pink Floyd, Led Zeppelin e The Beatles. Maioria em boas condições de reprodução, alguns arranhões superficiais.',
            price: 180,
            category: 'Música',
            condition: 'good',
            images: [
                '/assets/images/items/placeholder.svg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 12,
            title: 'Office Chair - Ergonomic',
            description: 'Cadeira de escritório confortável em mesh com suporte lombar e apoios de braço ajustáveis. Altura regulável. Usada por cerca de um ano, mostra desgaste leve no assento mas ainda muito confortável.',
            price: 95,
            category: 'Móveis',
            condition: 'good',
            images: [
                '/assets/images/items/placeholder.svg',
                '/assets/images/items/placeholder.svg'
            ]
        }
    ];

    getItems(): Item[] {
        return this.items;
    }

    getItemById(id: number): Item | undefined {
        return this.items.find(item => item.id === id);
    }

    getConditionLabel(condition: ItemCondition): string {
        const labels: Record<ItemCondition, string> = {
            'excellent': 'Excelente',
            'good': 'Bom',
            'fair': 'Regular',
            'worn': 'Desgastado'
        };
        return labels[condition];
    }

    getConditionDescription(condition: ItemCondition): string {
        const descriptions: Record<ItemCondition, string> = {
            'excellent': 'Como novo, sinais mínimos de uso',
            'good': 'Usado mas bem conservado',
            'fair': 'Mostra desgaste mas totalmente funcional',
            'worn': 'Desgaste significativo mas ainda utilizável'
        };
        return descriptions[condition];
    }
}
