import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      
    })
  }
}
