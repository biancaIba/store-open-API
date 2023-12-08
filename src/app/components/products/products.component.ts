import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [];
  category: string = '';

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.productService.getProducts(this.category).subscribe({
        next: (data: Product[]) => {
          this.products = data;
        },
        error: (err) => {
          console.error('Error trying to obtain products:', err);
        },
      });
    });
  }

  addProduct(productId: number): void {
    this.cartService.addProduct(productId);
  }

  minusProduct(productId: number): void {
    this.cartService.minusProduct(productId);
  }
}
