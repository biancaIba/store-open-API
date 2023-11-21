import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../interfaces/products.interface';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})

export class ProductsListComponent {

  products: Product[] = [];
  category: string = '';

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.productService.getProducts(this.category).subscribe({
        next: (data: Product[]) => { this.products = data },
        error: (err) => { console.error('Error trying to obtain products:', err); }
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
