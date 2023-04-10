import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { CardBottomColorDirective } from './directives/card-bottom-color.directive';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { VideoInfoPageComponent } from './pages/video-info-page/video-info-page.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    VideoInfoPageComponent,
    CardBottomColorDirective,
    FilterPipe,
    SortPipe,
    CustomCardComponent,
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
  providers: [],
})
export class YoutubeModule {}
