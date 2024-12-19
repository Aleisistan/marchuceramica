import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { AdornosComponent } from './adornos/adornos.component';
import { AppComponent } from './app.component';
import { AdminGuard } from './auth/admin.guard';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { ExclusivosComponent } from './exclusivos/exclusivos.component';
import { HomeComponent } from './home/home.component';
import { MacetasComponent } from './macetas/macetas.component';
import { MatesComponent } from './mates/mates.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { OtrosComponent } from './otros/otros.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PlatosComponent } from './platos/platos.component';
import { RecipientesComponent } from './recipientes/recipientes.component';
import { TazasComponent } from './tazas/tazas.component';
import { TrabajosPersonalizadosComponent } from './trabajos-personalizados/trabajos-personalizados.component';
import { VasosComponent } from './vasos/vasos.component';

export const routes: Routes = [
    { path: '',redirectTo: '/home',pathMatch: 'full' },
    { path: 'Catálogo', component: CatalogoComponent },
    { path: 'Clientes', component: ClientesComponent },
    { path: 'Consultas', component: ConsultasComponent},
    { path: 'Exclusivos', component: ExclusivosComponent},
    { path: 'Home', component: HomeComponent},
    { path: 'Nosotros', component: NosotrosComponent},
    { path: 'Trabajos Personalizados', component: TrabajosPersonalizadosComponent},
    { path: 'Pedido', component: PedidoComponent}, 
    { path: 'Administrativo', component: AdministrativoComponent, canActivate: [AdminGuard]}, 
    { path: 'Catálogo/Tazas', component: TazasComponent },
    { path: 'Catálogo/Mates', component: MatesComponent },
    { path: 'Catálogo/Macetas', component: MacetasComponent},
    { path: 'Catálogo/Platos', component: PlatosComponent},
    { path: 'Catálogo/Adornos', component: AdornosComponent},
    { path: 'Catálogo/Recipientes', component: RecipientesComponent},
    { path: 'Catálogo/Vasos', component: VasosComponent},
    { path: 'Catálogo/Otros', component: OtrosComponent}
    
    
    
    
];
NgModule({
    declarations: [
        AppComponent, NosotrosComponent, CatalogoComponent, ClientesComponent, ConsultasComponent, ExclusivosComponent, TrabajosPersonalizadosComponent, HomeComponent
        ],
    imports: [RouterModule.forRoot(routes), AppComponent, BrowserModule, NosotrosComponent, CatalogoComponent, ClientesComponent, ExclusivosComponent, TrabajosPersonalizadosComponent, HomeComponent],
    exports: [RouterModule],
    
    bootstrap: [AppComponent]
})


export class AppRoutingModule {}