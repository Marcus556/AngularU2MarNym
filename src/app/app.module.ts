import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUsersComponent } from './dashboard/edit-users/edit-users.component';
import { UserListComponent } from './dashboard/user-list/user-list.component';
import { UserListItemComponent } from './dashboard/user-list/user-list-item/user-list-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditUsersComponent,
    UserListComponent,
    UserListItemComponent,
    NavBarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
