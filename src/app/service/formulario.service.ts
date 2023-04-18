import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/Persona.model';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor(private http: HttpClient) { }
  URL = "https://flex-tech-production-b8c1.up.railway.app/";


 /* public getPersona(id:number): Observable<Persona>{
    return this.http.get<Persona>(this.URL+ `traer/perfil/${id}`);
  }*/

  getPersona(){
    return this.http.get<Persona[]>(this.URL+ `persona/traer`);
  }

  /*public editar(id:number, pers: Persona): Observable<any>{
    return this.http.put<any>(this.URL + `personas/editar/${id}`, pers);
  }*/

  getPersonaId(id:number){
    return this.http.get<Persona>(this.URL+"/"+id);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.URL+"editar/"+persona.id,persona);
  }

  eliminar(persona:Persona){
    return this.http.delete<Persona>(this.URL+"personas/borrar/"+persona.id);
  }
}
