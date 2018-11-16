import { NavBarService } from './../general/nav-bar/nav-bar.service';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  submitted = false;

  constructor(
    public userService: UserService,
    private navBarService: NavBarService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { }

  ngOnInit() {
    this.bindFormValidators();
  }

  bindFormValidators(): any {
    this.formLogin = this.formBuilder.group({
      login: [ '', Validators.required ],
      password: ['', Validators.required]
    });
  }

  validateLogin(loginModel, isValid: boolean) {
    this.submitted = true;

    if(isValid) {
        // 1 - Envia o formulario via POST para tentar LOGAR !!
        this.userService
            .findByLoginAndPassword(loginModel.login, loginModel.password)
            .then( (user: User) => {
                this.navBarService.setAdministratorMenu(user.admin);
                this.router.navigate([`/users/${user.id}`]);
            }).catch( err=> {
              window.alert(err);
              // this.formLogin.get('login').setValue('');
              this.formLogin.get('password').setValue('');
            });

    } else {
      window.alert("Login or Password are invalid! ");
    }
  }
}
