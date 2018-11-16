import { Component, OnInit } from '@angular/core';
import { NavBarService } from './nav-bar.service';
import { Subscription, Observable } from 'rxjs';
import { NavBarStatus } from './NavBarStatus';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  shouldShowNavBar$: Observable<NavBarStatus>;

  constructor(
    private navBarService: NavBarService
  ) { }

  ngOnInit() {
    this.shouldShowNavBar$ = this.navBarService.observeShowEvent();
    // this.navBarService.showNavBar(true);
    // this.navBarService.setAdministratorMenu(false);
  }
}
