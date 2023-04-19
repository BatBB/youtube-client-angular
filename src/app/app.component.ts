import { Component } from '@angular/core';
import { Sort } from './models/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client-app';

  searchKey = '';

  filterKey = '';

  sort: Sort = { sortBy: '', order: 'none' };

  public getSearchWord(searchKey: string) {
    this.searchKey = searchKey;
  }

  public getFilterKeyAppComponent(filterKey: string) {
    this.filterKey = filterKey;
  }

  public getSortAppComponent(sort: Sort) {
    this.sort = sort;
  }
}
