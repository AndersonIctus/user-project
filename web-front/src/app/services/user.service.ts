import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable()
export class UsuarioService {

  private users: User[] = [
    {id:0, name: 'admin', login:'admin', password: 'admin', createdDate: new Date(), updatedDate: null, email: 'admin@devexam.com', admin: true},
    {id:1, name: 'Support Exam', login:'support', password: '123456', createdDate: new Date(), updatedDate: null, email: 'support@devexam.com', admin: false},
    {id:1, name: 'Anderson Dourado', login:'andy', password: 'andy', createdDate: new Date(), updatedDate: null, email: 'anderson@devexam.com', admin: false}
  ];

  listUsers(): User[] {
    return this.users;
  }

  findById(id: number): User {
    return this.users.filter( u=> u.id === id)[0];
  }

  create(user: User) {
    this.users.push(user);
  }

  update(id: number, model: User){
    let user = this.users.filter( u=> u.id === id)[0];
    if(user != null){
        user.name = model.name;
        user.login = model.login
        user.password = model.password
        user.updatedDate = new Date();
        user.email = model.email;
        user.admin = model.admin;
    }
  }

  remove(id: number) {
    this.users = this.users.filter(u => u.id != id);
  }
}
