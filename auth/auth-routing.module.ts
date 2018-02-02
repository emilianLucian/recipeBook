import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SignupSuccessComponent } from '../signup-success/signup-success.component';

const authRoutes: Routes = [
  { path: 'register', component: SignupComponent },
  { path: 'login', component: SigninComponent },
  { path: 'registerSuccess', component: SignupSuccessComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}