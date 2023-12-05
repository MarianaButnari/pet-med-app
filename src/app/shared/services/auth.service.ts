import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {environment} from "../../../environments /environment";
import {UserAuth} from "../../pages/authentication/models/user-auth.model";
import {AuthResponse} from "../../pages/authentication/models/auth-response.model";
import {UserLogin} from "../../pages/authentication/models/user-login.model";
import {Router} from "@angular/router";
import {EventStorageService} from "./event-storage.service";
import {SessionStorageService} from "./session-storage.service";
import {User} from "../models/user.model";
import {UserProfile} from "../models/user-profile.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpClient = inject(HttpClient);
  private router = inject(Router);
  private eventStorageService = inject(EventStorageService);
  private sessionStorageService = inject(SessionStorageService);
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

  // TODO this is a dummy createUserProfile method
  createUserProfile(): Observable<UserProfile> {
    const apiUrl = `${environment.user.profile}`;
    const userProfile = {
      id: null,
      firstName: 'Mariana',
      lastName: 'Malic',
      birthDate: '10.05.2005',
      about: 'something about me',
      userImg: 'src/assets/images/profile/user-2.jpg',
      blood: 'AB-',
      height: '175',
      weight: '55',

    }
    return this.httpClient.post<any>(apiUrl, userProfile).pipe(
    )
  }
}
