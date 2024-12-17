import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdornosComponent } from '../adornos/adornos.component';
import { MacetasComponent } from '../macetas/macetas.component';
import { MatesComponent } from '../mates/mates.component';
import { OtrosComponent } from '../otros/otros.component';
import { PlatosComponent } from '../platos/platos.component';
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
export class TazasComponent {

}
