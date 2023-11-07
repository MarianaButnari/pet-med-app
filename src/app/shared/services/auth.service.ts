import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {environment} from "../../../environments /environment";
import {UserAuth} from "../../pages/authentication/models/user-auth.model";
import {AuthResponse} from "../../pages/authentication/models/auth-response.model";
import {UserLogin} from "../../pages/authentication/models/user-login.model";
import {Router} from "@angular/router";
import {EventStorageService} from "./event-storage.service";
import {SessionStorageService} from "./session-storage.service";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient,
              private router: Router,
              private eventStorageService: EventStorageService,
              private sessionStorageService: SessionStorageService) {
  }

  signup(userAuth: UserAuth): Observable<AuthResponse> {
    // TODO map response and catch errors;
    const authUrl = environment.general.auth;
    return this.httpClient.post<AuthResponse>(authUrl, {
      email: userAuth.email,
      password: userAuth.password,
      returnSecureToken: userAuth.returnSecureToken
    });
  }

  login(userLogin: UserLogin): Observable<AuthResponse> {
    const loginUrl = environment.general.login;
    return this.httpClient.post<AuthResponse>(loginUrl, {
      email: userLogin.email,
      password: userLogin.password,
      returnSecureToken: userLogin.returnSecureToken
    });
  }


  logout() {
    this.eventStorageService.setIsLoggedIn(false);
    this.sessionStorageService.delete('idToken');
    this.router.navigate(['authentication/login'])
  }

  createUserProfile(user: User): Observable<any> {
    const userProfileUrl = environment.user.profile;
    return this.httpClient.post<any>(userProfileUrl , user)

  }
}
