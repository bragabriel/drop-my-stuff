import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item.model';
import { ItemsService } from '../../services/items.service';

@Component({
    selector: 'app-card',
    imports: [CommonModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
    private itemsService = inject(ItemsService);
    @Input({ required: true }) item!: Item;

    currentImageIndex = 0;

    get currentImage(): string {
        return this.item.images[this.currentImageIndex];
    }

    get hasMultipleImages(): boolean {
        return this.item.images.length > 1;
    }

    get conditionLabel(): string {
        return this.itemsService.getConditionLabel(this.item.condition);
    }

    get conditionClass(): string {
        return `condition-${this.item.condition}`;
    }

    nextImage(): void {
        if (this.currentImageIndex < this.item.images.length - 1) {
            this.currentImageIndex++;
        } else {
            this.currentImageIndex = 0; // Loop back to first image
        }
    }

    previousImage(): void {
        if (this.currentImageIndex > 0) {
            this.currentImageIndex--;
        } else {
            this.currentImageIndex = this.item.images.length - 1; // Loop to last image
        }
    }

    formatPrice(price: number): string {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}
