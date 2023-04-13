import { Component } from '@angular/core';
import { Usuario, UserType } from '../../common/interfaces';

// Añadir el decorador (no poner ; al final)
@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html'
})

export class MiComponente {

  public titulo: string;
  public comentario: string;
  public year: number;

  user:Usuario = <Usuario> {
    id: 1,
    name: "Pedro",
    lastname: "García",
    nick: "Peter",
    email: "peter@gmail.com",
    password: "12345678",
    type: UserType.USER
  }

  constructor(){
    this.titulo = "Hola mundo, soy MI COMPONENTE";
    this.comentario = "Este es mi primer componente";
    this.year = 2023;

    console.log("Mi componente cargado !!", this.user);
  }
}