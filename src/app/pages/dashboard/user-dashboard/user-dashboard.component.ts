import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HealthSummaryComponent} from "../../user/health-summary/health-summary.component";

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [CommonModule, HealthSummaryComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {

}
