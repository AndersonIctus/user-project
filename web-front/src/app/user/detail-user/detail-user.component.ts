import { NavBarService } from './../../general/nav-bar/nav-bar.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from 'src/app/models/User';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit, OnDestroy {

  actParam: Subscription;

  formUser: FormGroup;
  submitted = false;
  idUser:number;

  constructor(
    private userService: UserService,
    private navBarService: NavBarService,

    private router: Router,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.bindFormValidators();

    this.actParam = this.activeRoute.params.subscribe( params => {
        this.idUser = params.id;
        this.userService
            .getById( this.idUser )
            .then( (user: User) => {
                this.setUserValues(user);
            });
    });
  }

  isAdminSession() {
    return this.navBarService.isAdminSession();
  }

  ngOnDestroy(): void {
    this.actParam.unsubscribe();
  }

  bindFormValidators(): any {
    this.formUser = this.formBuilder.group({
      name: [ '', Validators.required ],
      login: ['', Validators.required],
      password: ['', Validators.required],
      createdDate: [''],
      updatedDate: [''],
      email: ['', Validators.required],
      admin: [false]
    });
  }

  setUserValues(user: User) {
    this.formUser.get('name').setValue(user.name);
    this.formUser.get('login').setValue(user.login);
    this.formUser.get('password').setValue(user.password);
    this.formUser.get('createdDate').setValue(user.createdDate);
    this.formUser.get('updatedDate').setValue(user.updatedDate);
    this.formUser.get('email').setValue(user.email);
    this.formUser.get('admin').setValue(user.admin);
  }

  saveUser(userModel, isValid){
    this.submitted = true;

    // console.log(JSON.stringify(userModel));
    if(isValid) {
      userModel['updatedDate'] = Date.now();
      this.userService
          .update(userModel, this.idUser)
          .then( resp => {
              // console.log('register ...');
              this.navBarService.setAdministratorMenu(false);
              this.router.navigate(['/home']);
          });

    } else {
      window.alert("Some information are REQUIRED, please infom them!");
    }
  }
}
