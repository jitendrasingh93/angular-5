import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('https://2ayo5w0voh.execute-api.us-west-2.amazonaws.com/prod/users');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        return this.http.post('https://2ayo5w0voh.execute-api.us-west-2.amazonaws.com/prod/reg', user);
    }

    update(user: User) {
        return this.http.put('https://2ayo5w0voh.execute-api.us-west-2.amazonaws.com/prod/user', user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }

    getByUserName(user:string) {
      return this.http.get('https://2ayo5w0voh.execute-api.us-west-2.amazonaws.com/prod/user/'+user)
    }
}
