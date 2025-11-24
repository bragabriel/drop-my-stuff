import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  template: `
    <section class="contact-page">
      <div class="container">
        <h1>Entre em Contato</h1>
        <p class="intro">Escolha a melhor forma de entrar em contato comigo!</p>
        
        <div class="primary-contacts">
          <a href="https://wa.me/5519982930667" target="_blank" class="primary-card whatsapp">
            <span class="material-icons icon">chat</span>
            <div class="content">
              <h3>WhatsApp</h3>
              <p>Conversar agora</p>
            </div>
          </a>

          <a href="https://www.instagram.com/gabrielbraga.gbs/" target="_blank" class="primary-card instagram">
            <span class="material-icons icon">photo_camera</span>
            <div class="content">
              <h3>Instagram</h3>
              <p>Enviar mensagem</p>
            </div>
          </a>
        </div>

        <div class="divider">
          <span class="divider-text">Outros</span>
        </div>

        <div class="secondary-contacts">
          <a href="https://www.linkedin.com/in/gabriel-braga-da-silva/" target="_blank" class="secondary-link linkedin">
            <span class="material-icons">work</span>
            <span class="text">LinkedIn</span>
          </a>

          <a href="https://github.com/bragabriel" target="_blank" class="secondary-link github">
            <span class="material-icons">code</span>
            <span class="text">GitHub</span>
          </a>

          <a href="https://x.com/gbraga_dev" target="_blank" class="secondary-link twitter">
            <span class="material-icons">tag</span>
            <span class="text">Twitter</span>
          </a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent { }