import { Injectable } from '@angular/core';
import { SearchItem } from 'src/app/youtube/models/search-item';
import { SearchResponse } from 'src/app/youtube/models/search-response';
import * as responseData from '../../mock-response.json';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private data: SearchResponse = responseData;

  public items: SearchItem[] = [];

  public setItems() {
    this.items = this.data.items;
  }
}
