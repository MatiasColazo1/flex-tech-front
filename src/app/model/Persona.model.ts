export class Persona {
    id:number;
    nombre:string;
    apellido:string;
    fecha:Date;
    direccion:string;
    telefono:number;
    pais:string;

    constructor(id:number, nombre:string, apellido:string, fecha:Date, direccion:string, telefono:number, pais:string){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha = fecha;
        this.direccion = direccion;
        this.telefono = telefono;
        this.pais = pais;
    }
}