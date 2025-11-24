import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  template: `
    <section class="contact-page">
      <div class="container">
        <h1>Entre em Contato</h1>
        <p class="intro">Tem alguma dúvida ou interesse em algum item? Fale comigo!</p>
        
        <div class="contact-methods">
          <div class="contact-item">
            <div class="icon">📱</div>
            <h3>Telefone</h3>
            <a href="tel:+5519982930667">+55 (19) 98293-0667</a>
          </div>

          <div class="contact-item">
            <div class="icon">💬</div>
            <h3>WhatsApp</h3>
            <a href="https://wa.me/5511999999999" target="_blank">Enviar mensagem</a>
          </div>

           <div class="contact-item">
            <div class="icon">💬</div>
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/gabriel-braga-da-silva/" target="_blank">Enviar mensagem</a>
          </div>
        </div>

        <div class="social-links">
          <h3>Nos siga nas redes sociais</h3>
          <div class="social-icons">
            <a href="https://www.instagram.com/gabrielbraga.gbs/" class="social-link">Instagram</a>
            <a href="https://x.com/gbraga_dev" class="social-link">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent { }