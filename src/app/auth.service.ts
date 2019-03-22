import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
/* skapar variabler loggeduser och loggedon */
export class AuthService {
  loggedUser: string;
  loggedOn: boolean;


  constructor() { }
/* tar emot variabler från logn comp och läggar i localStorage och sätter loggeduser efter variabel b, dvs loginnamn. */
login(a, b) {
  localStorage.setItem(a, b);
  this.loggedUser = b;
}
/* Plockar bort "user" från local storage */
logout() {
  localStorage.removeItem('user');
  
}
/* kollar om det finns någon user loggad i local storage, om det gör det sätts loggedOn till true, annars till false */
checkIfLoggedIn() {
  this.loggedUser = localStorage.getItem('user');
   if (this.loggedUser == null) {
    this.loggedOn = false;
   }
   else {
     this.loggedOn = true;
   }
}
}


