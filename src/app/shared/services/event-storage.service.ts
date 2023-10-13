import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class EventStorageService {
  // @ts-ignore
  private loggedInUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loggedInUser$ = this.loggedInUserSubject.asObservable();
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  setLoggedInUser(user: User): void {
    this.loggedInUserSubject.next(user);
  }

  setIsLoggedIn(loggedIn: boolean): void {
    this.isLoggedInSubject.next(loggedIn);
  }
}
