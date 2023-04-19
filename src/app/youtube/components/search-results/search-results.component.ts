import { Component } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter.service';
import { SearchItem } from '../../models/search-item';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  public videos$ = this.searchService.videos$;

  constructor(
    public searchService: SearchService,
    public filterService: FilterService
  ) {}

  // eslint-disable-next-line class-methods-use-this
  public trackByFn(index: number, item: SearchItem) {
    return item.id;
  }
}
