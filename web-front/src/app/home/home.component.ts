import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../general/nav-bar/nav-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private navBarService: NavBarService
  ) { }

  ngOnInit() {
    this.navBarService.setAdministratorMenu(false);
  }
}
