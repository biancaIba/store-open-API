import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/interfaces/products.interface';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {

  userLogged: User = null;
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
        next: (data: Product[]) => { this.products = data; }
      });
    });
  }


}
