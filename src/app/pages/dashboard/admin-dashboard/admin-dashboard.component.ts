import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableComponent} from "../../../reusable/data-table/data-table.component";
import {ReusableModule} from "../../../reusable/reusable.module";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, DataTableComponent, ReusableModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

}
