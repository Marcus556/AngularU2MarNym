/* Dashboard component som håller edit-users och userlist */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userListArray = [
    {user: 'Leanne Graham'},
    {user: 'Ervin Howell'},
    {user: 'Clementine Bauch'},
    {user: 'Patricia Lebsack'}
  ]

  constructor() { }

  ngOnInit() {
  }
/* Tar emot output från edit-users och pushar in i arrayen userList */
addUser(inData) {
   this.userListArray.push({user: inData});
}
/* Plockar bort det användare ur arrayen */
removeUser() {
  this.userListArray.pop();
}
}
