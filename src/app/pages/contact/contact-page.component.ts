import { Component } from '@angular/core';

@Component({
    selector: 'app-contact-page',
    imports: [],
    template: `
    <div class="contact-page">
      <div class="container">
        <div class="contact-content">
          <h1>Entre em Contato</h1>
          <p class="intro">Tem alguma dúvida ou interesse em algum item? Fale conosco!</p>
          
          <div class="contact-methods">
            <div class="contact-item">
              <div class="icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:contato@dropmystuff.com">contato&#64;dropmystuff.com</a>
            </div>

            <div class="contact-item">
              <div class="icon">📱</div>
              <h3>Telefone</h3>
              <a href="tel:+5511999999999">+55 (11) 99999-9999</a>
            </div>

            <div class="contact-item">
              <div class="icon">💬</div>
              <h3>WhatsApp</h3>
              <a href="https://wa.me/5511999999999" target="_blank">Enviar mensagem</a>
            </div>
          </div>

          <div class="social-links">
            <h3>Nos siga nas redes sociais</h3>
            <div class="social-icons">
              <a href="#" class="social-link">Instagram</a>
              <a href="#" class="social-link">Facebook</a>
              <a href="#" class="social-link">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
    styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent { }
