import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { env } from 'src/environments';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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
    CartComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: BannerComponent },
      {
        path: 'products/:category',
        component: ProductsComponent,
        pathMatch: 'full',
      },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
