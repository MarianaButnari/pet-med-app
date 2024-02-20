import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableComponent} from "../../../reusable/data-table/data-table.component";
import {ReusableModule} from "../../../reusable/reusable.module";
import {DataTableConfiguration} from "../../../reusable/data-table/models/data-table-configuration";
import {doctorsTabConfiguration} from "./doctors-tab-configuration";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, DataTableComponent, ReusableModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
  animations: [
    // trigger('divColor', [
    //   state('normal', style({
    //     'background-color': 'red',
    //   })),
    //   state('highlighted', style({
    //     'background-color': 'blue',
    //     transform: 'skew(30deg, 20deg);'
    //   }))
    // ])
    trigger('divRotation', [
      transition(':enter',[
        // style({
        //   opacity: 0,
        //   transform: 'skew(30deg, 20deg)'
        // }),
        animate('500ms', style({ opacity: 0, transform: 'skew(30deg, 20deg)'})),
      ])
    ])
  ]
})
export class AdminDashboardComponent {
  state = 'normal'
  docsTabConfig: DataTableConfiguration = new DataTableConfiguration(doctorsTabConfiguration);
}
