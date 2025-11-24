import { Component, OnInit, inject } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemsService } from '../../services/items.service';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-items-page',
  standalone: true,
  imports: [CardComponent],
  template: `
    <section class="items-page">
      <div class="container">
        <div class="page-header">
          <h1>Itens Disponíveis</h1>
          <p>Navegue por nossa seleção de itens à venda</p>
        </div>
        <div class="items-grid">
          @for (item of items; track item.id) {
            <app-card [item]="item" />
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './items-page.component.scss'
})
export class ItemsPageComponent implements OnInit {
  private itemsService = inject(ItemsService);
  items: Item[] = [];

  ngOnInit(): void {
    this.items = this.itemsService.getItems();
  }
}