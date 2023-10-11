import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventStorageService {
  private isLoggedInUserSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInUserSubject.asObservable();
  setIsLoggedInUser(loggedIn: boolean): void {
    this.isLoggedInUserSubject.next(loggedIn);
  }
}
