import { Component } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item';
import { SearchResponse } from 'src/app/models/search-response';
import * as responseData from '../../mock-response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  data: SearchResponse = responseData;

  items: SearchItem[] = this.data.items;
}
