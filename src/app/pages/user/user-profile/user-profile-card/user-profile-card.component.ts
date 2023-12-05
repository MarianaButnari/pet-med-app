import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {UserService} from "../../../services/user.service";
import {Observable} from "rxjs";
import {UserProfile} from "../../../../shared/models/user-profile.model";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-user-profile-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgOptimizedImage, TranslateModule],
  templateUrl: './user-profile-card.component.html'
})
export class UserProfileCardComponent implements OnInit{
  private userService = inject(UserService);
  userProfile$: Observable<UserProfile>;

  ngOnInit(): void {
   this.userProfile$ = this.userService.getUserProfile();
  }
}
