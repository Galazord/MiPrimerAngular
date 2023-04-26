import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  constructor(){}

  // pipe > debounceTime aplica un delay de 300 ms para que no aparezcan mensajes nada más escribir
  ngOnInit() {
    this.search.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => this.searchEmitter.emit(value!))
  }

  search = new FormControl('')

  @Output('search') searchEmitter = new EventEmitter<String>();

}
