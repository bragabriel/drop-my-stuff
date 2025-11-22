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
            description: 'Classic brown leather jacket from the 90s. High-quality leather with minimal wear. Perfect for casual or semi-formal occasions. Features include inner pockets, metal zipper, and adjustable cuffs.',
            price: 150,
            category: 'Clothing',
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
            description: 'MacBook Pro 13-inch, 2019 model. Intel Core i5, 8GB RAM, 256GB SSD. Battery cycle count under 200. Comes with original charger and box. Minor cosmetic scratches on the bottom case, screen is pristine.',
            price: 800,
            category: 'Electronics',
            condition: 'excellent',
            images: [
                '/assets/images/items/macbook-1.jpg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 3,
            title: 'Wooden Coffee Table',
            description: 'Solid oak coffee table with a rustic finish. Dimensions: 120cm x 60cm x 45cm. Has some visible scratches and minor water stains on the surface, but structurally sound and sturdy.',
            price: 75,
            category: 'Furniture',
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
            description: 'Nike Air Max 270 in black and white colorway. Size US 10. Worn a few times, practically brand new. Original box included. No signs of wear on the sole or upper.',
            price: 90,
            category: 'Footwear',
            condition: 'excellent',
            images: [
                '/assets/images/items/sneakers-1.jpg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 5,
            title: 'Acoustic Guitar - Yamaha F310',
            description: 'Beginner-friendly acoustic guitar. Well-maintained, plays beautifully. Includes soft case and extra strings. Some finish wear on the back from regular use.',
            price: 120,
            category: 'Music',
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
            description: 'Modern LED desk lamp with adjustable brightness and color temperature. Touch control panel. USB charging port included. Has been used daily for about 2 years, minor scuffs on the base.',
            price: 35,
            category: 'Home & Office',
            condition: 'good',
            images: [
                '/assets/images/items/lamp-1.jpg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 7,
            title: 'Vintage Polaroid Camera',
            description: 'Polaroid OneStep+ instant camera. Tested and working perfectly. Captures amazing vintage-style photos. Does not include film packs. Some cosmetic wear on the exterior casing.',
            price: 110,
            category: 'Electronics',
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
            description: 'Elegant black leather handbag from a premium brand. Spacious interior with multiple compartments. Gold-tone hardware. Shows minimal signs of use, handles in excellent condition.',
            price: 200,
            category: 'Accessories',
            condition: 'excellent',
            images: [
                '/assets/images/items/placeholder.svg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 9,
            title: 'Gaming Mouse - Logitech G502',
            description: 'Popular gaming mouse with customizable weights and RGB lighting. All buttons fully functional. Cable shows some fraying near the connector but still works perfectly.',
            price: 40,
            category: 'Electronics',
            condition: 'worn',
            images: [
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 10,
            title: 'Ceramic Plant Pot Set',
            description: 'Set of 3 handmade ceramic plant pots in different sizes. Beautiful glazed finish in muted earth tones. Perfect for succulents or small plants. Brand new, never used.',
            price: 45,
            category: 'Home & Office',
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
            description: 'Collection of 15 classic rock vinyl records from the 70s and 80s. Includes albums from Pink Floyd, Led Zeppelin, and The Beatles. Most in good playing condition, some surface scratches.',
            price: 180,
            category: 'Music',
            condition: 'good',
            images: [
                '/assets/images/items/placeholder.svg',
                '/assets/images/items/placeholder.svg'
            ]
        },
        {
            id: 12,
            title: 'Office Chair - Ergonomic',
            description: 'Comfortable mesh office chair with lumbar support and adjustable armrests. Height adjustable. Used for about a year, shows minor wear on the seat cushion but still very comfortable.',
            price: 95,
            category: 'Furniture',
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
            'excellent': 'Excellent',
            'good': 'Good',
            'fair': 'Fair',
            'worn': 'Worn'
        };
        return labels[condition];
    }

    getConditionDescription(condition: ItemCondition): string {
        const descriptions: Record<ItemCondition, string> = {
            'excellent': 'Like new, minimal signs of use',
            'good': 'Used but well maintained',
            'fair': 'Shows wear but fully functional',
            'worn': 'Significant wear but still usable'
        };
        return descriptions[condition];
    }
}
