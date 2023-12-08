import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logged: boolean = false;
  user: any = null;
  categories: string[] = [];

  constructor(
    private authService: AuthService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.authService.getUserData().subscribe((res: any) => {
      if (res) {
        this.logged = true;
        this.user = res;
      }
    });
    this.productService.getCategories().subscribe({
      next: (data: string[]) => {
        this.categories = data;
      },
    });
  }

  logOut(): void {
    this.authService.logOut().then((res: any) => {
      if (res) this.logged = false;
    });
  }
}
