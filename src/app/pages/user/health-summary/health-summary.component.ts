import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReusableModule} from "../../../reusable/reusable.module";
import {TablerIconsModule} from "angular-tabler-icons";
import {UserProfileCardComponent} from "../user-profile/user-profile-card/user-profile-card.component";
import {MedNotificationCardComponent} from "../user-profile/med-notification-card/med-notification-card.component";

@Component({
  selector: 'app-health-summary',
  standalone: true,
  imports: [CommonModule, ReusableModule, TablerIconsModule, UserProfileCardComponent, MedNotificationCardComponent],
  templateUrl: './health-summary.component.html',
  styleUrl: './health-summary.component.scss'
})
export class HealthSummaryComponent {
  localDate = new Date();
}
