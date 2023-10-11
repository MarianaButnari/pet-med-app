import {Component, Input} from '@angular/core';
import {NavItem} from "./nav-item";
import {NavService} from "../../../../_theme/services/nav.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html'
})
export class NavItemComponent {
  @Input() item: NavItem | any;
  @Input() depth: any;

  constructor(public navService: NavService, public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnChanges() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
      }
    });
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }

    // scroll
    document.querySelector('.page-wrapper')?.scroll({
      top: 0,
      left: 0,
    });
  }
}
