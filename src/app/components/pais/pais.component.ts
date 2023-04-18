import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/Persona.model';
import { FormularioService } from 'src/app/service/formulario.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  personas : Persona[] = [];
  pais: string;
  numPersonas: number = 0;

  searchQuery: string;
  searchResult: number;

  constructor(private http: HttpClient, private router: Router, private formularioService: FormularioService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.pais = params.get('pais');
      this.getPersonasByPais(this.pais);
    });
  }

  getPersonasByPais(pais: string): void {
    this.formularioService.getPersonasByPais(pais)
      .subscribe(personas => {
        this.personas = personas;
        this.numPersonas = personas.length;
      });
  }

  editar(personas: Persona): void {
    localStorage.setItem("pais", personas.pais);
    this.router.navigate(["edit"]);

  }

  getPersonas(): void {
    this.formularioService.getPersonasByPais(this.pais)
      .subscribe(personas => this.personas = personas);
  }



  search() {
    if (this.searchQuery) {
      this.http.get<any>(`https://flex-tech-production-b8c1.up.railway.app/traer/personas/porPaises/${this.searchQuery}`).subscribe(
        data => {
          this.searchResult = data;
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}

