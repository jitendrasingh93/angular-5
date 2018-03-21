import { Component, OnInit } from '@angular/core';
import { User } from '/_models/index';
import {HeaderService} from "../../_services/header.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  public headerStyle;
  user: any;
  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  logoutUser() {
    if (this.currentUser.username != null) {
      localStorage.removeItem('currentUser');
      window.location.reload();
      //this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
    }
  }
}
