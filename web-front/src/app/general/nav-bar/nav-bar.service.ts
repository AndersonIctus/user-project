import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavBarStatus } from './NavBarStatus';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  private _navBarStatusActual = new NavBarStatus();
  private showNavBarSubject = new BehaviorSubject<NavBarStatus>(this._navBarStatusActual);

  constructor() { }

  public showNavBar(value: boolean) {
    setTimeout(() => {
      this._navBarStatusActual.showBar = value;
      this.showNavBarSubject.next(this._navBarStatusActual);
    }, 1);
  }

  setAdministratorMenu(admin: boolean): any {
    setTimeout(() => {
      this._navBarStatusActual.adminBar = admin;
      this.showNavBarSubject.next(this._navBarStatusActual);
    }, 1);
  }

  isAdminSession(): boolean {
    return this._navBarStatusActual.adminBar;
  }

  public observeShowEvent() {
    return this.showNavBarSubject.asObservable();
  }
}
