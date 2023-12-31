import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../material.module";
import { RegisterComponent } from './register/register.component';
import {TranslateModule} from "@ngx-translate/core";
import {TablerIconsModule} from "angular-tabler-icons";

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(AuthenticationRoutes),
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule,
        TablerIconsModule,
    ]
})
export class AuthenticationModule { }
