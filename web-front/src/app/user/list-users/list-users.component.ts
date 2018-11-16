import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { User } from './../../models/User';
import { UserService } from './../../services/user.service';
import { RestResponse } from 'src/app/services/RestResponse';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  usersList: User[] = [];
  search_value: string = '';

  constructor(
    private userService: UserService,

    private router: Router
  ) { }

  ngOnInit() {
    // console.log('listando usuarios ...');
    this.doSearch();
  }

  public deleteUser(user: User, event: MouseEvent) {
    console.log('delete ....');
    event.preventDefault();

    this.userService
        .delete(user.id)
        .then( (resp) => {
          this.usersList = this.usersList.filter( u => u.id != user.id );
        }).catch( err => {
          console.log( JSON.stringify(err) );
        });
  }

  // ------------------- FUNCOES DE SEARCH
  keySearch(event:any) {
    if(event['keyCode'] === 13)
      this.doSearch();
  }

  doSearch() {
    let parameters = '';
    if(this.search_value != ''){
      // let retParam: string[] = this.search_value.replace('\?', '').split('\&');

      // for(let i = 0; i < retParam.length; i++){
      //   parameters += '/search/bylogin?login='+retParam+'%'
      // }
      parameters += '/search/byloginorname?login='+this.search_value+'&name='+this.search_value;
    }

    this.userService
        .getAllWithParameter(parameters)
        .then( (resp: RestResponse<User>) => {
            resp._embedded['users'].forEach(user => {
              user['id'] = User.getId(user);
            });

            this.usersList = resp._embedded['users'];
        }).catch( err => {
          console.log( JSON.stringify(err) );
        });
  }
}
