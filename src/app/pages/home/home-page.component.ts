import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section class="home-page">
      <div class="hero-content">
        <h1>Bem-vindo ao DropMyStuff</h1>
        <p class="subtitle">
          Um site que fiz para vender alguns itens pessoais =)
        </p>
        <button class="cta-button" (click)="navigateToItems()">
          Ver Itens Disponíveis
        </button>
      </div>
    </section>
  `,
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private router: Router) { }

  navigateToItems(): void {
    this.router.navigate(['/items']);
  }
}