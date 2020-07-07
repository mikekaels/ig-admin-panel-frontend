import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from '../auth/auth.component';
import { LoginComponent } from '../auth/login/login.component';
import { ForgetComponent } from '../auth/forget/forget.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'forget',
      component: ForgetComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
