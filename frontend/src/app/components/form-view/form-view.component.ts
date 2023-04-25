import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.sass']
})
export class FormView {

  signupForm: FormGroup

  constructor(
    private _builder: FormBuilder,
    private _http: HttpClient
  ){
    this.signupForm = this._builder.group({
      name: [""],
      user: ["", Validators.required],
      email: ["", Validators.compose([Validators.email, Validators.required])],
      passw: ["", Validators.required]
    })
  }
  
  sendForm(values: any) {
    console.log("sendForm: ", values);

    let formBody = new FormData();
    formBody.append('name', values.name)
    formBody.append('user', values.user)
    formBody.append('email', values.email)
    formBody.append('passw', values.passw)

    this._http.post('https://jsonplaceholder.typicode.com/users', formBody, 
    {
      headers: {'Content-Type': 'multipart/form-data'}
    }).subscribe({
      next: this.resultPostForm.bind(this),
      error: this.errorPostForm.bind(this)
    });
  }

  resultPostForm(data: any){
    console.log("next: ", data);
  }

  errorPostForm(err: HttpErrorResponse){
    console.error("Error: ", err);
  }

  deleteForm(data: number){
    this._http.delete('https://jsonplaceholder.typicode.com/users', {
      params: {
        id: data
      }
    })
  }

  patchForm(data: number){
    this._http.patch('https://jsonplaceholder.typicode.com/users', {
      nuevo_nombre: 'Paco'
    }, {
      params: {
        id: data
      }
    })
  }
}
