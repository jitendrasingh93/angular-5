import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService, private http: HttpClient) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
/*use dummy authentication*/

  /*login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
    .subscribe(
     data => {
     this.router.navigate([this.returnUrl]);
     },
     error => {
     this.loading = false;
     });
  }
*/

  /* Use for real authentication */
  login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
          .subscribe(
            data => {
              if (data.success) {
                alert("success : "+data.success);
                this.router.navigate([this.returnUrl]);
              } else {
                this.alertService.error(data.message);
                this.loading = false;
              }
              console.log("data : " + JSON.stringify(data));
            }
          );
    }

  /*login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password, function (response) {
      if (response.success) {
        //$location.path('/');
        //$location.path('/newRegistration');
        this.router.navigate([this.returnUrl]);
      } else {
        this.alertService.error(error);
        this.loading = false;
      }
    });
  };
  */
}
