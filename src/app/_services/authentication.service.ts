import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  public token: string;

  constructor(private http: HttpClient) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  /*for real authentication*/
  login(username:string, password:string) {

    var response;
    return this.http.post('https://2ayo5w0voh.execute-api.us-west-2.amazonaws.com/prod/auth',{ "userName" : username, "password" : password },
      {headers:{'Content-Type': 'application/json; charset=utf-8'}}).map((result: Response) => {
      response = result;
      if (response.message === 'newPasswordRequired') {
        response = {success: true, message: response.message}
      } else {
        if (null != response.token) {
          this.token = response.token;
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: response.token }));
          response = {success: true};
          alert("Store Token and go to home page");
        } else {
          response = {success: false, message: response.message};
          alert(response.message);
        }
        return response;
      }
    });
  }


    /*dummy authenticatin*/
    /*login(username: string, password: string) {
     return this.http.post<any>('/api/authenticate', { username: username, password: password })
     .map(user => {
     // login successful if there's a jwt token in the response
     if (user && user.token) {
     // store user details and jwt token in local storage to keep user logged in between page refreshes
     localStorage.setItem('currentUser', JSON.stringify(user));
     }

     return user;
     });*/


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

}
