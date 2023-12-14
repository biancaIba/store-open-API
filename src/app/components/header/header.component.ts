import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logged: boolean = false;
  username: string = null;
  categories: string[] = [];

  constructor(
    private authService: AuthService,
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService.getUserData().subscribe((res: any) => {
      if (res) {
        this.logged = true;
        this.username = res._delegate.displayName;
      }
    });
    this.productService.getCategories().subscribe({
      next: (data: string[]) => {
        this.categories = data;
      },
    });
  }

  logOut(): void {
    this.authService.logOut();
  }
}
