import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments /environment";
import {UserLogin} from "../../pages/authentication/models/user-login.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(userLogin: UserLogin): Observable<any> {
    const loginUrl = environment.general.login;
   return this.httpClient.post(loginUrl, {userLogin});
  }

}
