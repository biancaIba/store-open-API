import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  title: string = 'Final Project';
  hasCart: boolean = null;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.hasCart = this.cartService.hasProducts();
  }

}