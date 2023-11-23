import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {map, Observable, take} from 'rxjs';
import {SessionStorageService} from "../services/session-storage.service";
import {EventStorageService} from "../services/event-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard  {

  constructor(private router: Router,
              private sessionStorageService: SessionStorageService,
              private eventStorageService: EventStorageService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const idToken = !!this.sessionStorageService.get('idToken');
    const loggedOrSignedInUser = this.eventStorageService.loggedInUser$.pipe(take(1), map(user => !!user));

    if (idToken) {
      this.eventStorageService.setIsLoggedIn(true);
      return true;
    } else {
      this.eventStorageService.setIsLoggedIn(false);
      this.sessionStorageService.delete('idToken');
      return this.router.createUrlTree(['/authentication/login']);
    }
  }
}
