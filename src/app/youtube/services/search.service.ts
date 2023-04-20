import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { SearchItem } from 'src/app/youtube/models/search-item';
import { SearchResponse } from 'src/app/youtube/models/search-response';
import * as responseData from '../../mock-response.json';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private data: SearchResponse = responseData;

  private videos$$ = new BehaviorSubject<SearchItem[]>([]);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public videos$ = this.videos$$.asObservable();

  public setItems(searchKey: string) {
    if (searchKey) this.videos$$.next(this.data.items);
  }

  public getVideo(id: string): Observable<SearchItem> {
    return this.videos$.pipe(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      map((videos: SearchItem[]) => videos.find((video) => video.id === id)!)
    );
  }
}
