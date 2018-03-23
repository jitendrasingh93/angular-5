import { Injectable } from '@angular/core';

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
