import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { CartService } from '../../services/cart.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart-storage',
  templateUrl: './cart-storage.component.html',
  styleUrls: ['./cart-storage.component.css'],
})
export class CartStorageComponent implements OnInit {
  products: Product[] = [];
  quantities: number[] = [];
  logged: boolean = false;
  message: string = '';

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.products = this.cartService.getProductsFromStorage();
    this.quantities = this.cartService.getQuantitysFromStorage();
    this.authService.getUserData().subscribe((res: any) => {
      if (res) this.logged = true;
    });
  }

  pay(): void {
    if (this.logged) this.message = 'Thanks for buying with us!';
    else this.message = 'You must login to buy';
  }
}
