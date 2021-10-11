import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';



@NgModule({
  declarations: [
    LoginComponent,
    EmailVerificationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
