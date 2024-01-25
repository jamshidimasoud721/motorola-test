import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./components/login/login.component";
import {AuthModule} from "../data/auth/auth.module";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    AuthModule
  ],
})
export class LoginModule { }
