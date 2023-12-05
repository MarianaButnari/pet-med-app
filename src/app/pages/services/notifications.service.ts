import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments /environment";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private httpClient = inject(HttpClient);

  getUserNotifications(): Observable<any> {
    const apiUrl = `${environment.user.notifications}`;
    return this.httpClient.get<any>(apiUrl)
  }
}
