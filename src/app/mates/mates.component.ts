import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdornosComponent } from '../adornos/adornos.component';
import { MacetasComponent } from '../macetas/macetas.component';
import { OtrosComponent } from '../otros/otros.component';
import { PlatosComponent } from '../platos/platos.component';
import { RecipientesComponent } from '../recipientes/recipientes.component';
import { TazasComponent } from '../tazas/tazas.component';
import { VasosComponent } from '../vasos/vasos.component';

@Component({
  selector: 'app-mates',
  standalone: true,
  imports: [RouterModule,  RouterOutlet, TazasComponent, MacetasComponent, RecipientesComponent, AdornosComponent, PlatosComponent, OtrosComponent, VasosComponent
    ],
  templateUrl: './mates.component.html',
  styleUrl: './mates.component.css'
})
export class MatesComponent {

}
