import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
})
export class PedidoComponent implements OnInit {
  cartItems: { name: string; price: number; quantity: number }[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.cartItems = this.carritoService.getCart();
  }

  clearCart(): void {
    this.carritoService.clearCart();
    alert('Carrito vaciado');
  }
}
