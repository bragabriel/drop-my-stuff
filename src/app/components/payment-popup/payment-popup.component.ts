import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-payment-popup',
    imports: [CommonModule],
    templateUrl: './payment-popup.component.html',
    styleUrl: './payment-popup.component.scss'
})
export class PaymentPopupComponent {
    isOpen = false;

    togglePopup(): void {
        this.isOpen = !this.isOpen;
    }

    closePopup(): void {
        this.isOpen = false;
    }

    onBackdropClick(event: MouseEvent): void {
        if (event.target === event.currentTarget) {
            this.closePopup();
        }
    }
}
