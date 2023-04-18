import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona.model';
import { FormularioService } from 'src/app/service/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  personas: Persona[] = [];
  persona: Persona = new Persona(0,"", "", new Date(), "", 0, "");
 
  
  constructor(private router: Router, private formularioService: FormularioService) { }

  ngOnInit(): void {
    this.formularioService.getPersona().subscribe((data: any[]) => {
      this.personas = data;
    });
  }

  agregarPersona() {
    this.router.navigate(["add"]);
  }
  filtro() {
    this.router.navigate(["filtro"]);
  }

  editar(personas: Persona): void {
    localStorage.setItem("id", personas.id.toString());
    this.router.navigate(["edit"]);

  }

  eliminar(persona: Persona) {
    this.formularioService.eliminar(persona)
      .subscribe(data => {
        this.personas = this.personas.filter(p => p !== persona);
        alert("Usuario eliminado...");
      })
}
}