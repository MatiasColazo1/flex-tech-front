import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona.model';
import { FormularioService } from 'src/app/service/formulario.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private router: Router, private formularioService: FormularioService) { }
 
  persona: Persona = new Persona(0,"", "", new Date(), "", 0, "");
  
  ngOnInit(): void {

  }

  Guardar() {
    this.formularioService.createPersona(this.persona)
      .subscribe(data => {
        this.persona=data;
        // alert("Se Agrego con Exito...!!!");
        // window.location.reload();
        this.router.navigate(["mostrar"]);
      })
  }
  }

