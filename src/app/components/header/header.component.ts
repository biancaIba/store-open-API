import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {

  categories: string[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe({
      next: (data: string[]) => { this.categories = data; }
    });
  }

}