import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { EditarComponent } from './components/editar/editar.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { MostrarComponent } from './components/mostrar/mostrar.component';
import { PaisComponent } from './components/pais/pais.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    EditarComponent,
    NuevoComponent,
    MostrarComponent,
    PaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
