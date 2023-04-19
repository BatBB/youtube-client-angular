import { Component, Input, OnChanges } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item';
import { SearchResponse } from 'src/app/models/search-response';
import { Sort } from 'src/app/models/sort';
import * as responseData from '../../mock-response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnChanges {
  @Input() searchKey = '';

  @Input() filterKey = '';

  @Input() sort: Sort = { sortBy: '', order: 'none' };

  data: SearchResponse = responseData;

  items: SearchItem[] = [];

  ngOnChanges(): void {
    if (this.searchKey) {
      this.items = this.data.items;
    }
  }
}
