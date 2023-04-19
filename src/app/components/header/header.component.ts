import { Component, EventEmitter, Output } from '@angular/core';
import { Sort } from 'src/app/models/sort';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  @Output() sort: EventEmitter<Sort> = new EventEmitter<Sort>();

  userName = 'Your Name';

  isDisplayFilters = false;

  public toggleFilters(): void {
    this.isDisplayFilters = !this.isDisplayFilters;
  }

  public onSearchVideo(searchWord: string): void {
    if (searchWord) {
      this.search.emit(searchWord);
    }
  }

  public onFilterKey(filterKey: string): void {
    this.filter.emit(filterKey);
  }

  public onSort(sort: Sort): void {
    this.sort.emit(sort);
  }
}
