import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor  implements HttpInterceptor {
  options;
  constructor(
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
        tap(event => {
            if (event instanceof HttpResponse) {
              // do nothing aon
            }
          },
          error => {
            if (error instanceof HttpErrorResponse) {
              if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', error.error.message);
              } else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error(
                  `Backend returned code ${error.status}, ` +
                  `body was: ${error.error}`);
              }
              // switch (error.status) {
              //   case 500:
              //     this.messageViewState.set('error500');
              //     break;
              //   case 404:
              //   case 400:
              //     this.messageViewState.set('error');
              //     break;
              //   case 501:
              //     this.messageViewState.set('not_developed');
              // }
            }
          }
        )
    );
  }
}
