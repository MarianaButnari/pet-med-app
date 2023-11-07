import { Component } from '@angular/core';
import {sideNavItems} from "./sidebar-nav-data";
import {AuthService} from "../../shared/services/auth.service";


@Component({
  selector: 'app-new-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  navItems = sideNavItems;

  constructor(private authService: AuthService) {
  }

  logout() {
   this.authService.logout();
  }
}
