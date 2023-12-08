import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addProduct(productId: number): void {
    const id = productId.toString();
    const counter = this.getActualCounter(id) + 1;
    sessionStorage.setItem(id, counter.toString());
  }

  minusProduct(productId: number): void {
    const id = productId.toString();
    const counter = this.getActualCounter(id) - 1;
    if (counter < 1) sessionStorage.removeItem(id);
    else sessionStorage.setItem(id, counter.toString());
  }

  cancelCart(): void {
    sessionStorage.clear();
  }

  hasProducts(): boolean {
    return sessionStorage.length > 0;
  }

  private getActualCounter(id: string): number {
    let actualCounter: number = 0;
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key === id) actualCounter = parseFloat(sessionStorage.getItem(key)!);
    }
    return actualCounter;
  }
}
