import { Component } from '@angular/core';
import { PrecioService } from '../precio.service';

@Component({
  selector: 'app-administrativo',
  standalone: true,
  imports: [],
  templateUrl: './administrativo.component.html',
  styleUrl: './administrativo.component.css'
})
export class AdministrativoComponent {

  constructor(private precioService: PrecioService) {}

  updatePriceFactor(factor: string): void {
    const numericFactor = Number(factor); // Conversión explícita a número
    if (!isNaN(numericFactor) && numericFactor > 0) {
      this.precioService.setPriceFactor(numericFactor);
      alert(`Factor de precios actualizado a ${numericFactor}`);
    } else {
      alert('Por favor, ingresa un número válido.');
    }
  }
}
