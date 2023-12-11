import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReusableModule} from "../../../../reusable/reusable.module";
import {TablerIconsModule} from "angular-tabler-icons";

@Component({
  selector: 'app-med-notification-card',
  standalone: true,
    imports: [CommonModule, ReusableModule, TablerIconsModule],
  templateUrl: './med-notification-card.component.html',
  styleUrl: './med-notification-card.component.scss'
})
export class MedNotificationCardComponent {

}
