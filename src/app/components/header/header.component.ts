import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    template: `
    <header class="header">
      <div class="container header-content">
        <div class="logo">
          <a routerLink="/">DropMyStuff</a>
        </div>
        <nav class="nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/items" routerLinkActive="active">Ver Itens</a>
          <a routerLink="/contact" routerLinkActive="active">Contato</a>
        </nav>
      </div>
    </header>
  `,
    styleUrl: './header.component.scss'
})
export class HeaderComponent { }
