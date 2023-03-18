import { Component, EventEmitter, Output } from '@angular/core';
import { Sort } from 'src/app/models/sort';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  @Output() sort: EventEmitter<Sort> = new EventEmitter<Sort>();

  getFilterKey(filterKey: string) {
    this.filter.emit(filterKey);
  }

  isAsc = true;

  // eslint-disable-next-line class-methods-use-this
  changeSort(sortBy: string) {
    const sortData: Sort = {
      sortBy,
      isAsc: this.isAsc,
    };
    this.sort.emit(sortData);
    this.isAsc = !this.isAsc;
  }
}
