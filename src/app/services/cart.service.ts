import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private readonly cartKey = 'cart';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  getCart() {
      if (this.isBrowser) {
        const savedCart = localStorage.getItem(this.cartKey);
        this.cart = savedCart ? JSON.parse(savedCart) : [];
      }
      return this.cart;
  }

  private save() {
    if (this.isBrowser) {
      localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
    }
  }

  addToCart(product: any) {
    const existing = this.cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({...product, quantity: 1});
    }
    this.save();
    alert('Product added to cart successfully!');
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cart.find(p => p.id === productId);
    if (item) {
      item.quantity = quantity;
      this.save(); //save updated cart to localStorage
    }
  }

  removeFromCartProductById(productId: number) {
    this.cart = this.cart.filter(p => p.id !== productId);
    this.save();
  }

  getTotalCount(): number {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  clearCart() {
    this.cart = [];
    this.save();
  }
}