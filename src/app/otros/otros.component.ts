import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdornosComponent } from '../adornos/adornos.component';
import { MacetasComponent } from '../macetas/macetas.component';
import { MatesComponent } from '../mates/mates.component';
import { PlatosComponent } from '../platos/platos.component';
import { RecipientesComponent } from '../recipientes/recipientes.component';
import { TazasComponent } from '../tazas/tazas.component';
import { VasosComponent } from '../vasos/vasos.component';

@Component({
  selector: 'app-otros',
  standalone: true,
  imports: [RouterModule,  RouterOutlet, TazasComponent, MacetasComponent, MatesComponent, RecipientesComponent, AdornosComponent, PlatosComponent, OtrosComponent, VasosComponent
    ],
  templateUrl: './otros.component.html',
  styleUrl: './otros.component.css'
})
export class OtrosComponent {

}
