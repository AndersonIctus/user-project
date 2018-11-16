import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './services/user.service';
import { RegisterComponent } from './user/register/register.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './general/nav-bar/nav-bar.component';
import { NavBarService } from './general/nav-bar/nav-bar.service';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,

    PageNotFoundComponent,

    RegisterComponent,
    ListUsersComponent,
    DetailUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,

    NgbModule.forRoot()
  ],
  providers: [
    UserService,
    NavBarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
