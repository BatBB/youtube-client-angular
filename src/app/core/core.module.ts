import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderService } from './services/header.service';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterService } from './services/filter.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ApiYoutubeInterceptor } from './interceptors/api-youtube.interceptor';

@NgModule({
  declarations: [HeaderComponent, FiltersComponent, PageNotFoundComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, SharedModule, HttpClientModule, RouterModule],
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
