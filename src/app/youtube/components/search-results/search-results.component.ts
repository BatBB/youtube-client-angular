import { Component, DoCheck } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter.service';
import { SearchItem } from '../../models/search-item';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements DoCheck {
  public items: SearchItem[] = [];

  ngDoCheck(): void {
    if (!this.items.length && this.searchService.items.length)
      this.items = this.searchService.items;
  }

  constructor(
    private searchService: SearchService,
    public filterService: FilterService
  ) {}
}
