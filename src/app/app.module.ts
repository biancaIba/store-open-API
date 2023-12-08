import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: BannerComponent },
      { path: "products/:category", component: ProductsComponent, pathMatch: "full" },
      { path: "login", component: LoginComponent, pathMatch: "full" },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
  ],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule { }