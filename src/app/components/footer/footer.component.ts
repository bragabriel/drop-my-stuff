import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="footer">
      <div class="container footer-content">
        <p>&copy; {{ currentYear }} DropMyStuff. Todos os direitos reservados.</p>
        <p class="footer-tagline">Itens usados / Em boas condições / Aproveite!</p>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly currentYear = new Date().getFullYear();
}
