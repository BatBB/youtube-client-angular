import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  EMPTY,
  map,
  Observable,
  retry,
  switchMap,
  tap,
} from 'rxjs';
import { SearchResponse } from 'src/app/youtube/models/search-response';
import { VideoItem } from '../models/video-item';
import { VideosResponse } from '../models/videos-response';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private videos$$ = new BehaviorSubject<VideoItem[]>([]);

  public videos$ = this.videos$$.asObservable();

  getVideos(searchKey: string): void {
    this.getVideosResponse(searchKey)
      .pipe(
        map((resp) => resp.items.map((video) => video.id.videoId).join(',')),
        switchMap((ids) => this.getVideoResponse(ids)),
        tap((resp) => this.videos$$.next(resp.items))
      )
      .subscribe();
  }

  getVideosResponse(searchKey: string): Observable<SearchResponse> {
    const params = new HttpParams()
      .set('type', 'video')
      .set('part', 'snippet')
      .set('maxResults', 15)
      .set('q', searchKey);

    return this.http.get<SearchResponse>('search', { params }).pipe(
      retry(4),
      catchError((err) => {
        console.log('Error:', err);
        return EMPTY;
      })
    );
  }

  getVideoResponse(ids: string): Observable<VideosResponse> {
    const params = new HttpParams()
      .set('id', ids)
      .set('part', 'snippet,statistics');

    return this.http.get<VideosResponse>('videos', { params }).pipe(
      retry(4),
      catchError((err) => {
        console.log('Error:', err);
        return EMPTY;
      })
    );
  }

  constructor(private http: HttpClient) {}
}
