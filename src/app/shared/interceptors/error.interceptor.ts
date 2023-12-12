import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
import {HotToastService} from "@ngneat/hot-toast";
import {ErrorConstants, ErrorMessage} from "../constants/error.constants";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toast: HotToastService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let clonedRequest = request.clone();
    return next.handle(clonedRequest).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          return event;
        }
        return event;
      }),
      catchError((error: any) => {
        const errorMessage = this.handleErrorMessage(error.error.error.message)
          this.toast.error(errorMessage, {
            autoClose: false,
            dismissible: true,
            position: 'bottom-right'
          });
          return of(error)
        }
      ));
  }

  private handleErrorMessage(message: ErrorMessage) {
    switch (message) {
      case  "EMAIL_EXISTS" :
        return ErrorConstants.EMAIL_EXISTS;
      case "OPERATION_NOT_ALLOWED" :
        return ErrorConstants.OPERATION_NOT_ALLOWED;
      case "TOO_MANY_ATTEMPTS_TRY_LATER" :
        return ErrorConstants.TOO_MANY_ATTEMPTS_TRY_LATER;
      case "INVALID_LOGIN_CREDENTIALS" :
        return ErrorConstants.INVALID_LOGIN_CREDENTIALS;
      case "EMAIL_NOT_FOUND" :
        return ErrorConstants.EMAIL_NOT_FOUND;
      case "INVALID_PASSWORD" :
        return ErrorConstants.INVALID_PASSWORD;
      case "USER_DISABLED" :
        return ErrorConstants.USER_DISABLED;
      default:
        return 'An error occurred';
    }
  }

}
