import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SearchService } from './services/search.service';
import { CardBottomColorDirective } from './directives/card-bottom-color.directive';
import { FilterService } from '../core/services/filter.service';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    CardBottomColorDirective,
    FilterPipe,
    SortPipe,
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
  providers: [SearchService, FilterService],
})
export class YoutubeModule {}
