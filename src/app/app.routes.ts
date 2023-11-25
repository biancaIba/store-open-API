import { Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

export const routes: Routes = [
  { path: '', component: BannerComponent },
  {
    path: 'products/:category',
    component: ProductsListComponent,
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
