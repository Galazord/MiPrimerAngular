import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.sass']
})
export class AsyncSubjectComponent {
  constructor() {
    this.numeroAsyncSubject.subscribe(numero => this.numero = numero)
  }

  ngOnInit() {

  }

  public numeroAsyncSubject: AsyncSubject<number> = new AsyncSubject() // cahcear los ultios 3 datos que se hagan

  numero: number = 0

  // Podemos darle varias veces a next pero hasta que no le demos a completar no se verá el resultado
  siguiente() : void {
    const valor = Math.floor((Math.random() * 100) + 1)
    console.log('Siguiente - Replay subject - ', 'Siguiente valor: ', valor)
    this.numeroAsyncSubject.next(valor)
  }
  completar() : void {
    console.log('Completar - Replay Subject')
    this.numeroAsyncSubject.complete()
  }
}
