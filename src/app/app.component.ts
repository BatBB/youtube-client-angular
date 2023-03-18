import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client-app';

  searchWord = '';

  filterKey = '';

  getSearchWord(word: string) {
    this.searchWord = word;
  }

  getFilterKeyAppComponent(filterKey: string) {
    this.filterKey = filterKey;
  }
}
