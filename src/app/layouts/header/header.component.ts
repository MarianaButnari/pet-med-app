import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {EventStorageService} from "../../shared/services/event-storage.service";
import {SessionStorageService} from "../../shared/services/session-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(public dialog: MatDialog,
              private router: Router,
              private eventStorageService: EventStorageService,
              private sessionStorageService: SessionStorageService) {}

  logout() {
    this.eventStorageService.setIsLoggedIn(false);
    this.sessionStorageService.delete('idToken');
    this.router.navigate(['authentication/login'])
  }
}
