import { Component } from '@angular/core';
import {sideNavItems} from "./sidebar-nav-data";
import {Router} from "@angular/router";
import {EventStorageService} from "../../shared/services/event-storage.service";
import {SessionStorageService} from "../../shared/services/session-storage.service";

@Component({
  selector: 'app-new-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  navItems = sideNavItems;

  constructor(private router: Router,
              private eventStorageService: EventStorageService,
              private sessionStorageService: SessionStorageService) {
  }

  logout() {
    this.eventStorageService.setIsLoggedIn(false);
    this.sessionStorageService.delete('idToken');
    this.router.navigate(['authentication/login'])
  }
}
