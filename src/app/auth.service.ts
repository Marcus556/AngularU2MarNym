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
checkIfLoggedIn() {
  this.loggedUser = localStorage.getItem('user');
   if (this.loggedUser == null) {
     console.log('Inte inloggad!')
   }
   else {
     console.log('inloggad som: ' + this.loggedUser);
   }
}
}


