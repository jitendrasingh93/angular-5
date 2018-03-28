import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    /*
      find all user from the database using cloude api.
    */
    getAll() {
        return this.http.get<User[]>('https://2ayo5w0voh.execute-api.us-west-2.amazonaws.com/prod/users');
    }

    /*
      find user by id form the database.
    */
    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    /*
      for create a new user
    */
    create(user: User) {
        return this.http.post('https://2ayo5w0voh.execute-api.us-west-2.amazonaws.com/prod/reg', user);
    }
    /*
      for updated user details and paased the user object in the api.
    */
    update(user: User) {
        return this.http.put('https://2ayo5w0voh.execute-api.us-west-2.amazonaws.com/prod/user', user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }

    /*
      find the user object by userName when user will edit.
    */
    getByUserName(user:string) {
      return this.http.get('https://2ayo5w0voh.execute-api.us-west-2.amazonaws.com/prod/user/'+user);
    }

  /*
    for add new user by user tenant when user will logged in.
  */
  public addUser(user:string) {
    return this.http.post('https://2ayo5w0voh.execute-api.us-west-2.amazonaws.com/prod/user', user);
  }
}
