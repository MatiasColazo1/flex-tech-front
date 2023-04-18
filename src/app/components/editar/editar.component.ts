import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona.model';
import { FormularioService } from 'src/app/service/formulario.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  persona: Persona = new Persona(0,"", "", new Date(), "", 0, "");

  constructor(private router: Router, private formularioService: FormularioService) { }

  ngOnInit(): void {
    this.Editar();
  }


   
  Editar() {
    let id = localStorage.getItem("id");
    this.formularioService.getPersonaId(+id)
      .subscribe(data => {
        this.persona = data;
      })
  }

  Actualizar(persona: Persona) {
    this.formularioService.updatePersona(persona)
      .subscribe(data => {
        this.persona = data;
        alert("Se Actualizo con Exito...!!!");
        this.router.navigate(['mostrar']);
      })
  }

}
