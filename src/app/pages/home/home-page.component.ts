import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home-page',
    imports: [],
    template: `
    <div class="home-page">
      <div class="hero-content">
        <h1>Bem-vindo ao DropMyStuff</h1>
        <p class="subtitle">
          A melhor plataforma para vender seus itens pessoais de forma rápida e fácil.
          Encontre compradores para tudo que você não usa mais!
        </p>
        <button class="cta-button" (click)="navigateToItems()">
          Ver Itens Disponíveis
        </button>
      </div>
    </div>
  `,
    styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
    constructor(private router: Router) { }

    navigateToItems(): void {
        this.router.navigate(['/items']);
    }
}
