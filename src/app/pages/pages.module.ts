import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import {ReusableModule} from "../reusable/reusable.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NgApexchartsModule} from "ng-apexcharts";
import {TablerIconsModule} from "angular-tabler-icons";
import {LoggedInGuard} from "../shared/guards/logged-in.guard";


export const NewPagesRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [LoggedInGuard],
    data: {
      title: 'Starter Page',
    },
  },
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(NewPagesRoutes),
    ReusableModule,
    MatButtonModule,
    MatCardModule,
    NgApexchartsModule,
    TablerIconsModule,
  ]
})
export class PagesModule { }
