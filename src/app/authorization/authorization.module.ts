import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    SharedModule
  ]
})
export class AuthorizationModule { }
