import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrecioService {
  private priceFactor: number = 1; // Factor inicial

  setPriceFactor(factor: number): void {
    this.priceFactor = factor;
  }

  getPriceFactor(): number {
    return this.priceFactor;
  }
}
