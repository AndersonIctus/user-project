import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = 'Dev Exam | Register';

  public formUser: FormGroup;
  submitted = false;

  constructor(
    private userService: UserService,

    private router: Router,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.bindFormValidators();

    //If logged && User logged is Admin ... show admin flag !!
  }

  bindFormValidators(): any {
    this.formUser = this.formBuilder.group({
      name: [ '', Validators.required ],
      login: ['', Validators.required],
      password: ['', Validators.required],
      createdDate: [''],
      email: ['', Validators.required],
      admin: [false]
    });
  }

  saveUser(userModel, isValid){
    this.submitted = true;

    // console.log(JSON.stringify(userModel));
    if(isValid) {
      userModel['createdDate'] = Date.now();
      this.userService
          .create(userModel)
          .then( resp => {
              console.log('register ...');
              this.router.navigate(['/home']);
          });

    } else {
      window.alert("Some information are REQUIRED, please infom them!");
    }
  }

}
