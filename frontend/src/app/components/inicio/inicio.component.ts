import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent {

  constructor(
    public _data: DataService
  ) {}
  
  cerrarSesion(){
    this._data.logueado = false;
  }
}
