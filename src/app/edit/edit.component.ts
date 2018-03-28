import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/index';
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user: any;
  model: any = {};
  loading = false;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.fetchUser();
  }

  edit() {
    this.userService.update(this.model).subscribe(response => {
      console.log("user update succefully");
      this.router.navigate(['/users']);
      console.log(response);
    });
  }

  fetchUser() {
    var  userName = this.route.snapshot.params['user'];
      this.userService.getByUserName(userName).subscribe(user => {
        this.model = user;
        //alert("User : "+(JSON.stringify(this.model.userName)));
        console.log("user : "+this.route.snapshot.params['user']);
      });
    }
}
