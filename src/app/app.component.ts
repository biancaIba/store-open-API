import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    CartIconComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'project';
}
