import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from './services/header.service';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterService } from './services/filter.service';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, FiltersComponent, PageNotFoundComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, SharedModule],
  providers: [HeaderService, FilterService],
})
export class CoreModule {}
