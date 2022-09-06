import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import {LoginComponent}from './login/login.component';
import {RegisterComponent}from './register/register.component';
import {LogoutComponent}from './logout/logout.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import { canActivate,redirectUnauthorizedTo,redirectLoggedInTo } from '@angular/fire/auth-guard';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'dashboard',component:DashboardComponent,...canActivate(()=>redirectUnauthorizedTo(['/login']))},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppRoutingModule { }
