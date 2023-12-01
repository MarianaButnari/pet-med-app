import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {environment} from "../../../environments /environment";
import {SessionStorageService} from "../../shared/services/session-storage.service";
import {User} from "../../shared/models/user.model";
import {FirebaseResponseModel} from "../../shared/models/firebase-response.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private httpClient = inject(HttpClient);
  private sessionStorageService = inject(SessionStorageService);
  addUser(): Observable<any> {
    const apiUrl = `${environment.user.profile}`;
    const user = {
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
    return this.httpClient.post<any>(apiUrl, user).pipe(
      tap(data => console.error(data))
    )
  }

  getUser(): Observable<FirebaseResponseModel<User>> {
    const apiUrl = `${environment.user.profile}`;
    return this.httpClient.get<FirebaseResponseModel<User>>(apiUrl).pipe(
      tap(data => console.error(Object.values(data))),
      tap(data => {
        for (const [key, value] of Object.entries(data)) {
          console.error(`${key}: ${value}`);
          console.error(`${value}`);
        }
      })
    )
  }
}
