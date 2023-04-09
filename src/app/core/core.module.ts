import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HeaderService } from './services/header.service';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterService } from './services/filter.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ApiYoutubeInterceptor } from './interceptors/api-youtube.interceptor';
import { youtubeReducers } from '../store/reducers/youtube-data.reduce';
import { YoutubeEffects } from '../store/effects/youtube-data.effect';

@NgModule({
  declarations: [HeaderComponent, FiltersComponent, PageNotFoundComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot(
      {
        youtubeVideos: youtubeReducers,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([YoutubeEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    HeaderService,
    FilterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiYoutubeInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
