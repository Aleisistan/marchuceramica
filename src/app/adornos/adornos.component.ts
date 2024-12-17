import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MacetasComponent } from '../macetas/macetas.component';
import { MatesComponent } from '../mates/mates.component';
import { OtrosComponent } from '../otros/otros.component';
import { PlatosComponent } from '../platos/platos.component';
import { RecipientesComponent } from '../recipientes/recipientes.component';
import { TazasComponent } from '../tazas/tazas.component';
import { VasosComponent } from '../vasos/vasos.component';

@Component({
  selector: 'app-adornos',
  standalone: true,
  imports: [RouterModule,  RouterOutlet, TazasComponent, MacetasComponent, MatesComponent, RecipientesComponent, PlatosComponent, OtrosComponent, VasosComponent
  ],
  templateUrl: './adornos.component.html',
  styleUrl: './adornos.component.css'
})
export class AdornosComponent {

}
