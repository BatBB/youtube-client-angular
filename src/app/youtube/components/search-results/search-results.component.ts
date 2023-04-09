import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter.service';
import { Store } from '@ngrx/store';
import { selectYoutubeVideos } from 'src/app/store/selectors/youtube-data.selector';
import { VideoItem } from '../../models/video-item';
import * as YoutubeActions from '../../../store/actions/youtube-data.action';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  videos$ = this.store.select(selectYoutubeVideos);

  ngOnInit(): void {
    this.store.dispatch(YoutubeActions.appLoaded());
  }

  // eslint-disable-next-line class-methods-use-this
  trackByFn(index: number, item: VideoItem) {
    return item.id;
  }

  constructor(public filterService: FilterService, private store: Store) {}
}
