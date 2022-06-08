import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

// custom components
import { LoginModule } from "./login/login.module";
import { RegisterModule } from "./register/register.module";
import { AuthSharedModule } from "./auth-shared/auth-shared.module";


const ROUTES: Routes = [
  {
    path: "auth",
    children: [
      { path: "", pathMatch: "full", redirectTo: "login" },
      {
        path: "login",
        loadChildren: () =>
          import("./login/login.module").then((m) => m.LoginModule),
      },
      {
        path: "register",
        loadChildren: () =>
          import("./register/register.module").then((m) => m.RegisterModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginModule, RegisterModule, AuthSharedModule,
  RouterModule.forChild(ROUTES)],
})
export class AuthorizationModule {}
