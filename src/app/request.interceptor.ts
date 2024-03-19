import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Request Interceptor', request);

    if(request.method === 'GET'){
      const newRequest = request.clone({
        headers: request.headers.append('token', 'myEnCrYpTeDToKeN1@3$')
      });
  
      return next.handle(newRequest);
    }
    
    return next.handle(request);
  }
}
