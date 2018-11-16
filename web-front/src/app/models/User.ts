import { ModelBase } from './ModelBase';

export class User extends ModelBase {

  id: number;
  name: string;
  login: string;
  password: string;
  createdDate: Date;
  updatedDate: Date;
  email: string;
  admin: boolean = false;

  public static getId(user: User): any {
    let httpRef: string = user._links['user'].href;
    let id = httpRef.substr(  httpRef.lastIndexOf('/users/') + 7);
    return id;
  }
}
