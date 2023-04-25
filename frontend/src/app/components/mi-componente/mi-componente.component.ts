import { Component, ElementRef, ViewChild } from '@angular/core';
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

  // @ViewChild
  @ViewChild('nombre', { static: true }) nombre!: ElementRef;

  ngOnInit() {
    console.log("Valor del input ViewChild: ", this.nombre.nativeElement.value);
    this.nombre.nativeElement.value = 'Alberto'
    console.log("Cambiar input ViewChild: ", this.nombre.nativeElement.value);
  }

}