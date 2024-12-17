import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdornosComponent } from '../adornos/adornos.component';
import { MacetasComponent } from '../macetas/macetas.component';
import { MatesComponent } from '../mates/mates.component';
import { OtrosComponent } from '../otros/otros.component';
import { PlatosComponent } from '../platos/platos.component';
import { TazasComponent } from '../tazas/tazas.component';
import { VasosComponent } from '../vasos/vasos.component';


@Component({
  selector: 'app-recipientes',
  standalone: true,
  imports: [RouterModule, RouterOutlet, TazasComponent, MacetasComponent, MatesComponent, AdornosComponent, PlatosComponent, OtrosComponent, VasosComponent
],
  templateUrl: './recipientes.component.html',
  styleUrl: './recipientes.component.css'
})
export class RecipientesComponent {

}
