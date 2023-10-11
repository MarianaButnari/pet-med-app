import { Component } from '@angular/core';
import {sideNavItems} from "./sidebar-nav-data";

@Component({
  selector: 'app-new-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  navItems = sideNavItems;
}
