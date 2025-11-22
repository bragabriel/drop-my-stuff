import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaymentPopupComponent } from './components/payment-popup/payment-popup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PaymentPopupComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }
