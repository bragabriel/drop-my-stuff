import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { ItemsPageComponent } from './pages/items/items-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'items', component: ItemsPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: '**', redirectTo: '' }
];
