import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/products.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-storage',
  templateUrl: './cart-storage.component.html',
  styleUrls: ['./cart-storage.component.css']
})
export class CartStorageComponent implements OnInit{

  products: Product[] = [];
  quantities: number[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getProductsFromStorage();
    this.quantities = this.cartService.getQuantitysFromStorage();
  }
}
