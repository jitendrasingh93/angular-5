import { Injectable } from '@angular/core';
import { User } from '/_models/index';

@Injectable()
export class HeaderService {
  currentUser: string;

  constructor() {
  }

  setCurrentUser(userName:string) {
    this.currentUser = userName;
  }

  cheackUser() {
    return this.currentUser;
  }
}
