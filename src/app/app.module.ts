import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FiltersComponent } from './youtube/components/filters/filters.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { SearchItemComponent } from './youtube/components/search-item/search-item.component';
import { CardBottomColorDirective } from './youtube/directives/card-bottom-color.directive';
import { FilterPipe } from './youtube/pipes/filter.pipe';
import { SortPipe } from './youtube/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    SearchResultsComponent,
    SearchItemComponent,
    CardBottomColorDirective,
    FilterPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
