import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './user/register/register.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: PageNotFoundComponent},

  { path: 'register', component: RegisterComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'users/:id', component: DetailUserComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
