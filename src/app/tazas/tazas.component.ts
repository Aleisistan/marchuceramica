import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdornosComponent } from '../adornos/adornos.component';
import { CarritoService } from '../carrito.service';
import { MacetasComponent } from '../macetas/macetas.component';
import { MatesComponent } from '../mates/mates.component';
import { OtrosComponent } from '../otros/otros.component';
import { PlatosComponent } from '../platos/platos.component';
import { PrecioService } from '../precio.service';
import { RecipientesComponent } from '../recipientes/recipientes.component';
import { VasosComponent } from '../vasos/vasos.component';
@Component({
  selector: 'app-tazas',
  standalone: true,
  imports: [RouterModule,  RouterOutlet, MacetasComponent, MatesComponent, RecipientesComponent, AdornosComponent, PlatosComponent, OtrosComponent, VasosComponent
  ],
  templateUrl: './tazas.component.html',
  styleUrl: './tazas.component.css'
})
export class TazasComponent implements OnInit{
  
  
    precioBase = 100; // Precio base de las tazas
    currentPrice: number = 0;
  
    constructor(
      private precioService: PrecioService,
      private carritoService: CarritoService
    ) {
      this.currentPrice = this.precioBase * this.precioService.getPriceFactor();
    }
  
    ngOnInit(): void {
      this.updatePrice();
    }
  
    updatePrice(): void {
      
    }
  
   addToCart(): void {
    const product = {
      name: 'Taza 1',
      price: this.currentPrice,
      quantity: 1, // Por defecto
    };
    this.carritoService.addToCart(product);
    alert('Producto agregado al carrito');
  }

}

