import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ExclusivosComponent } from './exclusivos/exclusivos.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CarritoComponent, CatalogoComponent, ClientesComponent, ConsultasComponent, ExclusivosComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'marchuceramica';
}
