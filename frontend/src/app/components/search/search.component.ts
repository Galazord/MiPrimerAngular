import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  constructor(){}

  ngOnInit() {
    this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value!))
  }

  search = new FormControl('')

  @Output('search') searchEmitter = new EventEmitter<String>();

}
