import { NgModule } from '@angular/core';
import {CommonModule, DatePipe, UpperCasePipe} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {ReusableModule} from "../../reusable/reusable.module";
import {TablerIconsModule} from "angular-tabler-icons";
import {HealthSummaryComponent} from "../user/health-summary/health-summary.component";

export const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    ReusableModule,
    TablerIconsModule,
    HealthSummaryComponent,
  ]
})
export class DashboardModule { }
