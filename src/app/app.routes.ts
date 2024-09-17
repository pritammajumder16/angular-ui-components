import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ButtonComponent } from './button/button.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'button', component: ButtonComponent },
  {
    path: 'breadcrumb',
    component: BreadcrumbComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
];
