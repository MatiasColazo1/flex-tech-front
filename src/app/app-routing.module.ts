import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './components/editar/editar.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { PaisComponent } from './components/pais/pais.component';

const routes: Routes = [
  {path:'', component:FormularioComponent},
  {path:'edit', component:EditarComponent},
  {path:'add', component:NuevoComponent},
  {path:'mostrar', component:MostrarComponent},
  {path:'filtro', component:PaisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
