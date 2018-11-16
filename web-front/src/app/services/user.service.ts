import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RestResponse } from './RestResponse';

@Injectable()
export class UserService {

  private _url = environment.SERVER_URL;
  private _actionUrl = 'users';

  constructor(
    private _http: Http
  ){}

  create (model: User): Promise<User> {
    return this._http
                .post(`${this._url}/${this._actionUrl}`, model)
                .toPromise()
                .then( response => {
                  return response.json()
                });
  }

  update (model: User, id: number): Promise<User> {
      return this._http
                  .put(`${this._url}/${this._actionUrl}/${id}`, model)
                  .toPromise()
                  .then(response => {
                      return response.json() as User;
                  });
  }

  delete(id: number): Promise<void>{
      return this._http
              .delete(`${this._url}/${this._actionUrl}/${id}`)
              .toPromise()
              .then(() => null);
  }

  getCustom(relativeUri: string): Observable<any> {
    // console.log('get custom ...');
    return this._http
                .get(`${this._url}/${this._actionUrl}${relativeUri}`);
  }

  getAllWithParameter(parameters: string): Promise<any>{
      return this.getCustom(parameters)
                  .toPromise()
                  .then(response => {
                      return response.json();
                  });
  }

  getAll(): Promise<any>{
      return this.getAllWithParameter("");
  }

  getById(id: number): Promise<User> {
    return this.getCustom(`/${id}`)
                .toPromise()
                .then(response => {
                    const model = response.json() as User;
                    return model;
                });
  }

  findByLoginAndPassword(login: string, password: string): Promise<User> {
    return this.getCustom(`/search/byloginandpassword/?login=${login}&password=${password}`)
                .toPromise()
                .then( (response) => {
                    let model = response.json() as RestResponse<User>;
                    return model;
                }).then( (response: RestResponse<User>) => {
                    let model = response._embedded['users'][0] as User;

                    if(model == undefined || model == null) {
                      throw "Login or Password are invalid.";
                    }

                    model['id'] = User.getId(model);
                    return model;
                })
  }

}
