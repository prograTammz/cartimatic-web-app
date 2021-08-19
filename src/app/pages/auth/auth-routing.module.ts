import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordPage } from './forget-password/forget-password.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { SetupPage } from './setup/setup.page';

const routes: Routes = [
  { path: 'login', component: LoginPage, data: { animation: 0 } },
  { path: 'logout', component: LoginPage, data: { animation: 0 } },
  { path: 'register', component: RegisterPage, data: { animation: 1 } },
  {
    path: 'forgot-password',
    component: ForgetPasswordPage,
    data: { animation: 2 },
  },
  { path: 'setup', component: SetupPage, data: { animation: 2 } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
