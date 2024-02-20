import {Component, DestroyRef, inject, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {MOBILE_VIEW, MONITOR_VIEW, TABLET_VIEW} from "./app.constants";
import {EventStorageService} from "./shared/services/event-storage.service";
import {User} from "./shared/models/user.model";
import {LangService} from "./shared/services/lang.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('leftsidenav') sidenav: MatSidenav;
  authenticated: boolean;

  // private readonly unsubscribe$: Subject<void> = new Subject();
  private readonly destroyRef = inject(DestroyRef);
  private isMobileScreen = false;
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;
  private htmlElement!: HTMLHtmlElement;

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  constructor(private breakpointObserver: BreakpointObserver,
              private eventStorage: EventStorageService,
              private langService: LangService,
              ) {
    this.htmlElement = document.querySelector('html')!;
    this.breakpointObserver
      .observe([MOBILE_VIEW, TABLET_VIEW, MONITOR_VIEW])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((state) => {
        // SidenavOpened must be reset true when layout changes
        this.isMobileScreen = state.breakpoints[MOBILE_VIEW];
        this.isContentWidthFixed = state.breakpoints[MONITOR_VIEW];
      });
  }
  ngOnInit(): void {
    this.langService.init();
    this.getLoggedInUser();
  }

  toggleCollapsed() {
    this.isContentWidthFixed = false;
  }

  onSidenavClosedStart() {
    this.isContentWidthFixed = false;
  }

  onSidenavOpenedChange(isOpened: boolean) {
    this.isCollapsedWidthFixed = !this.isOver;
  }

  private getLoggedInUser() {
    this.eventStorage.isLoggedIn$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result: boolean) => {
        this.authenticated = result;
      });
  }
}
