import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

  /*for real authentication*/
    login(username: string, password: string) {
      /*var restUrl = 'https://2ayo5w0voh.execute-api.us-west-2.amazonaws.com/prod/auth';
      return this.$http.post(restUrl, JSON.parse({ username: username, password: password }))
        .success(function (response) {
          return response;
        });*/

      var response;
      $http({
        method: 'POST',
        url: 'https://2ayo5w0voh.execute-api.us-west-2.amazonaws.com/prod/auth',
        data: { "userName" : username, "password" : password },
        headers: {'Content-Type': 'application/json'
        }}).then(function(result) {
        console.log(JSON.stringify(result));
        response = result.data;
        if (response.message === 'newPasswordRequired') {
          response = {success: true, message:response.message}
        } else {
          if (null != response.token) {
            response = {success: true};
            alert("Store Token and go to home page");
          } else {
            response = {success: false, message: response.message};
            alert(response.message);
          }
        }
        callback(response);
      }, function(error) {
        console.log(error);
      });

/*dummy authenticatin*/
      /*return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });*/
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
