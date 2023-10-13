import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {SessionStorageService} from "../services/session-storage.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private sessionStorageService: SessionStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
    // const idToken = this.sessionStorageService.get('idToken');
    //
    // if (idToken) {
    //   const authReq = request.clone({
    //     headers: request.headers.set('Content-Type', 'application/json').set('Authorization', idToken)
    //   });
    //   return next.handle(authReq);
    // }
  }
}
