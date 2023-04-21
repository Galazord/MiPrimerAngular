import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.sass']
})
export class ReplaySubjectComponent {
  constructor() {
    this.numeroReplaySubject.subscribe(numero => this.numero = numero)
  }

  ngOnInit() {

  }

  public numeroReplaySubject: ReplaySubject<number> = new ReplaySubject(3) // cahcear los ultios 3 datos que se hagan

  numero: number = 0

  siguiente() : void {
    const valor = Math.floor((Math.random() * 100) + 1)
    console.log('Siguiente - Replay subject - ', 'Siguiente valor: ', valor)
    this.numeroReplaySubject.next(valor)
  }
  completar() : void {
    console.log('Completar - Replay Subject')
    this.numeroReplaySubject.complete()
  }
}
