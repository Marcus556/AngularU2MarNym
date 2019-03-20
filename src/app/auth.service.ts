import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser: string;


  constructor() { }

login(a, b) {
  localStorage.setItem(a, b);
  this.loggedUser = b;
}
logout() {
  localStorage.removeItem('user');
}
}


