import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {ReusableModule} from "../../reusable/reusable.module";

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(DashboardRoutes),
    ReusableModule,
    DatePipe
  ]
})
export class DashboardModule { }
