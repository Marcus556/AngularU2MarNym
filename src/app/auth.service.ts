import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser: string;
  loggedOn: boolean;


  constructor() { }

login(a, b) {
  localStorage.setItem(a, b);
  this.loggedUser = b;
}
logout() {
  localStorage.removeItem('user');
}
checkIfLoggedIn() {
  this.loggedUser = localStorage.getItem('user');
   if (this.loggedUser == null) {
     this.loggedOn = false;
     console.log('Inte inloggad!')
   }
   else {
     this.loggedOn = true;
     console.log('inloggad som: ' + this.loggedUser);
   }
}
}


