import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { VideoInfoPageComponent } from './pages/video-info-page/video-info-page.component';
import { CardInfoComponent } from './pages/card-info/card-info.component';

const youtubeRoutes: Routes = [
  { path: '', component: SearchResultsComponent },
  { path: 'video/:id', component: VideoInfoPageComponent },
  { path: 'card/:id', component: CardInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(youtubeRoutes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
