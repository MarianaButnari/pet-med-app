import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DoctorComponent} from "./doctor.component";

export const DoctorRoutes: Routes = [
  {path: '' , component: DoctorComponent}
]

@NgModule({
  declarations: [DoctorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DoctorRoutes)
  ]
})
export class DoctorModule { }
