import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {DialogComponent} from "../shared/dialog/dialog.component";
import {MatDialog} from "@angular/material";




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  //dialog:DialogComponent;

  constructor(private userService: UserService, public dialog : MatDialog) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //this.dialog = new DialogComponent(this.dialog);
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(userName: string) {
    this.showError("Invalid credentials");
    //this.userService.delete('').subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

  private updateUser() {
    this.userService.update(this.currentUser).subscribe(user => {
    })
  }

  showError(error : string) : void {
    this.dialog.open(DialogComponent, {
      data: {errorMsg: error} ,width : '350px'
    });
  }
}
