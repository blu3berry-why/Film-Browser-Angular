import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  /**
   * if something goes wrong goes back to the main page
   * @param req request
   * @param next next
   * @returns nothing
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(0),
      catchError((err: HttpErrorResponse) => {
        console.log(err);

        let errorMessage = 'Something went wrong!';
        this.router.navigate(['']);
        /*window.alert(errorMessage);*/

        return EMPTY;
      })
    );
  }
}
