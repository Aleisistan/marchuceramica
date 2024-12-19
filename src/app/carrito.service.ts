
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private cart: { name: string; price: number; quantity: number }[] = [];

  addToCart(product: { name: string; price: number; quantity: number }): void {
    this.cart.push(product);
  }

  getCart(): { name: string; price: number; quantity: number }[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
  }
}
