import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { ForgetPasswordPage } from './forget-password/forget-password.page';
import { SetupPage } from './setup/setup.page';


@NgModule({
  declarations: [
    LoginPage,
    RegisterPage,
    ForgetPasswordPage,
    SetupPage
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
