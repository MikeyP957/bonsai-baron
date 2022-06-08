import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthSharedModule } from '../auth-shared/auth-shared.module';
import { RegisterComponent } from './register/register.component';


export const ROUTES: Routes = [
  {path:'', component: RegisterComponent}
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AuthSharedModule
  ]
})
export class RegisterModule { }
