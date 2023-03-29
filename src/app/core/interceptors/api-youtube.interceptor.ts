import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiYoutubeInterceptor implements HttpInterceptor {
  private readonly API_KEY = 'AIzaSyA_BcM-eD3axOKMheFGOWI-YwE97ClGdhA';

  private readonly URL_BASE = 'https://www.googleapis.com/youtube/v3/';

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({
        url: this.URL_BASE + request.url,
        params: request.params.set('key', this.API_KEY),
      })
    );
  }
}
