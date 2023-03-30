import { Component } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter.service';
import { VideoItem } from '../../models/video-item';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  public videos$ = this.searchService.videos$;

  // eslint-disable-next-line class-methods-use-this
  trackByFn(index: number, item: VideoItem) {
    return item.id;
  }

  constructor(
    public searchService: SearchService,
    public filterService: FilterService
  ) {}
}
