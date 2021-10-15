import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    LoginComponent,
    EmailVerificationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
