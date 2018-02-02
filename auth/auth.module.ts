import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { SignupSuccessComponent } from '../signup-success/signup-success.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    SignupSuccessComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
