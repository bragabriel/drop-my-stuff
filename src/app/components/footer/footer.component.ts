import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    imports: [],
    template: `
    <footer class="footer">
      <div class="container footer-content">
        <p>&copy; {{ currentYear }} DropMyStuff. Todos os direitos reservados.</p>
        <p class="footer-tagline">Encontre o que você precisa, venda o que não usa mais.</p>
      </div>
    </footer>
  `,
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    protected readonly currentYear = new Date().getFullYear();
}
