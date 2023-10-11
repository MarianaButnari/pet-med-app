import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {Subject, Subscription, take, takeUntil} from "rxjs";
import {BreakpointObserver} from "@angular/cdk/layout";
import {MOBILE_VIEW, MONITOR_VIEW, TABLET_VIEW} from "./app.constants";
import {EventStorageService} from "./shared/services/event-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('leftsidenav') sidenav: MatSidenav;
  authenticated: boolean;

  private readonly unsubscribe$: Subject<void> = new Subject();
  private isMobileScreen = false;
  private isContentWidthFixed = true;
  private isCollapsedWidthFixed = false;
  private htmlElement!: HTMLHtmlElement;

  get isOver(): boolean {
    return this.isMobileScreen;
  }

  constructor(private breakpointObserver: BreakpointObserver,
              private eventStorage: EventStorageService) {
    this.htmlElement = document.querySelector('html')!;
    this.breakpointObserver
      .observe([MOBILE_VIEW, TABLET_VIEW, MONITOR_VIEW])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((state) => {
        // SidenavOpened must be reset true when layout changes
        this.isMobileScreen = state.breakpoints[MOBILE_VIEW];
        this.isContentWidthFixed = state.breakpoints[MONITOR_VIEW];
      });
  }
  ngOnInit(): void {
    this.getLoggedInUser();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(result => {
        this.authenticated = result;
      });
  }
}
