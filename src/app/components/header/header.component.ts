import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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