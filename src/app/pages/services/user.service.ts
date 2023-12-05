import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {environment} from "../../../environments /environment";
import {SessionStorageService} from "../../shared/services/session-storage.service";
import {User} from "../../shared/models/user.model";
import {FirebaseResponseModel} from "../../shared/models/firebase-response.model";
import {UserProfile} from "../../shared/models/user-profile.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpClient = inject(HttpClient);
  private sessionStorageService = inject(SessionStorageService);


  getUserProfile(): Observable<UserProfile> {
    const apiUrl = `${environment.user.profile}`;
    return this.httpClient.get<UserProfile>(apiUrl).pipe(
      tap(data => console.error('API RESPONSE:', data)),
      map((data: UserProfile) => {
        const users: UserProfile[] = Object.values(data)
        const [userProfile] = users;
        return userProfile
      }))
  }

  getUserRole(userEmail: string) {

  }
}
