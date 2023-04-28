import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
  perfilForm: FormGroup

  constructor(
    private _data: DataService,
    private _fb: FormBuilder
  ){
    this.perfilForm = this._fb.group({
      user: ['Alberto', Validators.compose([Validators.required, Validators.maxLength(20)])],
      nombre: ['Alber', Validators.compose([Validators.required, Validators.maxLength(20)])],
      email: ['alberto@gmail.com', Validators.compose([Validators.required, Validators.maxLength(30)])]
    })

    this.perfilForm.valueChanges.subscribe(_ => this._data.hasBeenModified = true)
  }

  guardar({ user, name, email }: {user: string, name: string, email: string}): void {
    alert("Guardado")
  }
}
