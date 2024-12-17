import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdornosComponent } from '../adornos/adornos.component';
import { MacetasComponent } from '../macetas/macetas.component';
import { MatesComponent } from '../mates/mates.component';
import { OtrosComponent } from '../otros/otros.component';
import { RecipientesComponent } from '../recipientes/recipientes.component';
import { TazasComponent } from '../tazas/tazas.component';
import { VasosComponent } from '../vasos/vasos.component';

@Component({
  selector: 'app-platos',
  standalone: true,
  imports: [RouterModule,  RouterOutlet, TazasComponent, MacetasComponent, MatesComponent, RecipientesComponent, AdornosComponent, OtrosComponent, VasosComponent
    ],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})
export class PlatosComponent {

}
