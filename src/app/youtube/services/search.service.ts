import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable, retry, switchMap } from 'rxjs';
import { SearchResponse } from 'src/app/youtube/models/search-response';
import { Store } from '@ngrx/store';
import { VideosResponse } from '../models/videos-response';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient, private store: Store) {}

  public getVideos(searchKey: string): Observable<VideosResponse> {
    return this.getVideosResponse(searchKey).pipe(
      map(({ items }) => items.map(({ id }) => id.videoId).join(',')),
      switchMap((ids) => this.getVideoByIdResponse(ids))
    );
  }

  private getVideosResponse(searchKey: string): Observable<SearchResponse> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', 15)
      .set('q', searchKey);

    return this.http.get<SearchResponse>('search', { params }).pipe(
      retry(4),
      catchError((err) => {
        // eslint-disable-next-line no-console
        console.log('Error:', err);
        return EMPTY;
      })
    );
  }

  private getVideoByIdResponse(ids: string): Observable<VideosResponse> {
    const params = new HttpParams()
      .set('id', ids)
      .set('part', 'snippet,statistics');

    return this.http.get<VideosResponse>('videos', { params }).pipe(
      retry(4),
      catchError((err) => {
        // eslint-disable-next-line no-console
        console.log('Error:', err);
        return EMPTY;
      })
    );
  }
}
