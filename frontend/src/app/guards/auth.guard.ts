import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../components/services/data.service';
import { ProfileComponent } from '../components/profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanDeactivate<ProfileComponent> {

  constructor(
    private _data: DataService,
    private _router: Router
  ) {}
  
  canDeactivate(
    component: ProfileComponent, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(component)
    console.log(currentRoute)
    console.log(currentState)
    console.log(nextState)
    if(this._data.hasBeenModified){
      return(confirm('Hay datos sin guardar, ¿seguro que deseas salir?'))
    }
    else {
      return true
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this._data.logueado){
        console.log("this._data.logueado: ", this._data.logueado)
        alert('No tienes acceso!')
        this._router.navigate(['/iniciar-sesion'])
      } 

    return this._data.logueado;
  }
  
}

