import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-profile-card',
  standalone: true,
    imports: [CommonModule, MatCardModule],
  templateUrl: './user-profile-card.component.html'
})
export class UserProfileCardComponent implements OnInit{
  private userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getUser().subscribe(result =>console.error(result))
  }
}
