import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  constructor() {}

  /**
   * appends the apikey to the end of the call
   * @param req request
   * @param next next
   * @returns the modified request
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add the header to the cloned request
    const authReq = req.clone({
      params: (req.params ? req.params : new HttpParams()).set(
        'api_key',
        environment.api_key
      ),
    });

    return next.handle(authReq);
  }
}
