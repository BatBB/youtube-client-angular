import { Component } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter.service';
import { Store } from '@ngrx/store';
import { selectYoutubeVideos } from 'src/app/store/selectors/youtube-data.selector';
import { selectGetCustomCards } from 'src/app/store/selectors/custom-cards.selector';
import { CustomCard } from 'src/app/admin/models/custom-card.model';
import { VideoItem } from '../../models/video-item';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  videos$ = this.store.select(selectYoutubeVideos);

  cards$ = this.store.select(selectGetCustomCards);

  constructor(public filterService: FilterService, private store: Store) {}

  // eslint-disable-next-line class-methods-use-this
  public trackByFn(_index: number, item: VideoItem | CustomCard) {
    return item.id;
  }
}
