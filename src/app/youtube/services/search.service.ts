import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from 'src/app/youtube/models/search-item';
import { SearchResponse } from 'src/app/youtube/models/search-response';
import * as responseData from '../../mock-response.json';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private data: SearchResponse = responseData;

  private items$$ = new BehaviorSubject<SearchItem[]>([]);

  public items$ = this.items$$.asObservable();

  public setItems(searchKey: string) {
    if (searchKey) this.items$$.next(this.data.items);
  }
}
