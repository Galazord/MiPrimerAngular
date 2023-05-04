import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent {

  constructor(
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._router.events.subscribe(event => {
      
      //this.show = event instanceof NavigationStart

      if(event instanceof NavigationStart) {
        this.show = true
      }
      else if(event instanceof NavigationEnd) {
        this.show = false
      }
    })
  }

  show = false

}
