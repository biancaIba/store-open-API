import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  hasProducts: boolean = false;
  private subscription: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.hasProducts = this.cartService.hasProducts();

    this.subscription = this.cartService.obtainCartChanges().subscribe(() => {
      this.hasProducts = this.cartService.hasProducts();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showCart(): void {
    
  }
}
