import { NgModule } from '@angular/core';
import {CommonModule, DatePipe, UpperCasePipe} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {ReusableModule} from "../../reusable/reusable.module";
import {TablerIconsModule} from "angular-tabler-icons";
import {HealthSummaryComponent} from "../user/health-summary/health-summary.component";
import {MatButtonModule} from "@angular/material/button";
import {DynamicDashboardComponentDirective} from "../../shared/directives/dynamic-dashboard-component.directive";

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
    MatButtonModule,
    DynamicDashboardComponentDirective,
  ]
})
export class DashboardModule { }
