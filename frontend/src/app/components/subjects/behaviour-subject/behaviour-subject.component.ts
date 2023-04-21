import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.sass']
})
export class BehaviourSubjectComponent {

  constructor() {
    this.numeroBehaviourSubject.subscribe(numero => {
      if(numero == null){
        console.log('BehaviorSubject - Valor inicial: ', numero);
      }
      else{
        this.numero = numero
      }
    })
  }

  ngOnInit() {

  }

  public numeroBehaviourSubject: BehaviorSubject<number> = new BehaviorSubject(0)

  numero: number = 0

  siguiente() : void {
    const valor = Math.floor((Math.random() * 100) + 1)
    console.log('Siguiente - Behavior Subject - Siguiente valor: ', valor)
    this.numeroBehaviourSubject.next(valor)
    this.numeroBehaviourSubject.getValue() // Almacena el último valor que le hayamos pasado
  }
  completar() : void {
    console.log('Completar - Behavior Subject')
    this.numeroBehaviourSubject.complete()
  }
}
