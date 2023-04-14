import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.sass']
})
export class FormView {

  signupForm: FormGroup

  constructor(
    private _builder: FormBuilder
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
  }
}
