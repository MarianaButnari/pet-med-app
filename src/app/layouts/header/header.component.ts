import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "../../shared/services/auth.service";
import {LangService} from "../../shared/services/lang.service";
import supportedLanguages from "../../shared/constants/lang.constants";
import {Language} from "../../shared/models/language.model";
import {profileMenuItems} from "./profile-menu-data";

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

  supportedLanguages: Language[] = supportedLanguages;
  profileMenuItems = profileMenuItems;
  showFiller = false;

  constructor(public dialog: MatDialog,
              private authService: AuthService,
              private langService: LangService) {}

  setLanguage(lang: Language) {
    this.langService.language = lang.shorthand;
  }
  logout() {
   this.authService.logout();
  }
}
