import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of} from "rxjs";
import {environment} from "../../../environments /environment";
import {UserAuth} from "../../pages/authentication/models/user-auth.model";
import {AuthResponse} from "../../pages/authentication/models/auth-response.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {
  }

  signup(userAuth: UserAuth): Observable<AuthResponse> {
    // TODO map response and catch errors;
    const authUrl = environment.general.auth;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.httpClient.post<AuthResponse>(authUrl, {
      email: userAuth.email,
      password: userAuth.password,
      returnSecureToken: userAuth.returnSecureToken
    }, {headers});
  }
}
