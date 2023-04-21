import { Component } from '@angular/core';
import { Subject } from 'rxjs';
//import { LogService } from '../../log.service';

@Component({
  selector: 'subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent {

  constructor(
    //private _log: LogService
  ){
    this.numeroSubject.subscribe(numb => this.numero = numb)
  }

  public numeroSubject: Subject<number> = new Subject()
  numero: number = 0

  siguiente() : void {
    const value = Math.floor((Math.random() * 100) + 1)
    console.log('Subject - Siguiente valor: ', value)
    this.numeroSubject.next(value)
  }
  completar() : void {
    console.log('Subject')
    this.numeroSubject.complete()
  }
}
