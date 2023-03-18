import { Component, Input, OnChanges } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item';
import { SearchResponse } from 'src/app/models/search-response';
import * as responseData from '../../mock-response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnChanges {
  @Input() searchWord = '';

  @Input() filterKey = '';

  data: SearchResponse = responseData;

  items: SearchItem[] = [];

  ngOnChanges(): void {
    if (this.searchWord) {
      this.items = this.data.items;
    }
  }
}
