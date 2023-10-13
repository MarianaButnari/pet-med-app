import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments /environment";
import {UserLogin} from "../../pages/authentication/models/user-login.model";
import {Observable} from "rxjs";
import {AuthResponse} from "../../pages/authentication/models/auth-response.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(userLogin: UserLogin): Observable<AuthResponse> {
    const loginUrl = environment.general.login;
    return this.httpClient.post<AuthResponse>(loginUrl, {
      email: userLogin.email,
      password: userLogin.password,
      returnSecureToken: userLogin.returnSecureToken
    });
  }

}
