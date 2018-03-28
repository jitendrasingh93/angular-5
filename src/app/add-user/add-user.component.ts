import { Component, OnInit } from '@angular/core';
import {User} from "../_models/user";
import {UserService} from "../_services/user.service";
import {Router} from '@angular/router'


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: any;
  currentUser: User;
  model: any = {};
  loading = false;

  constructor(
    private userService:UserService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  add() {
    this.userService.addUser(this.model).subscribe(response => {
      this.router.navigate(['/users']);
      console.log("User successfully added");
    });
  }
}
