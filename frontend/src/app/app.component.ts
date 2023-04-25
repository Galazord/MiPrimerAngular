import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Mi frontend de Angular';

  handleSearch(value: string){
    console.log("value: ", value)
  }

  constructor(
    private _http: HttpClient
  ){
    // susbcribe activa la petición, sin eso no hace nada
    // después de la url: , {responseType: 'text'} mostrará el resultado en modo texto en vez de un objeto. Y 'json' pues tal cual viene como objeto
    // En el caso de ser un POST puedes incluir para ver el progreso de la petición: reportProgress: true
    /* 
      observe: "body",
      params: {
        name: 'Hola'
      }
    */
    this._http.get('https://jsonplaceholder.typicode.com/users', {
      headers: {'Content-Type': 'application/json'},
      responseType: 'json'
    }).subscribe({
      next: this.resultEndpoint.bind(this),
      error: this.errorEndpoint.bind(this)
    });
  }

  resultEndpoint(data: any){
    console.log("next: ", data);
  }

  errorEndpoint(err: HttpErrorResponse){
    console.error("Error: ", err);
    console.error("Error status: ", err.status);
  }
}
