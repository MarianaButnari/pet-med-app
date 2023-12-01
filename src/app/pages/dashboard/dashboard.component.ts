import {Component, inject, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  private userService = inject(UserService);
  ngOnInit(): void {
  }
  addUser() {
    this.userService.addUser().subscribe(result => console.error(result))
  }
}
