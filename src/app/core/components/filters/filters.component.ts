import { Component, EventEmitter, Output } from '@angular/core';
import { Sort, SortOrder } from 'src/app/youtube/models/sort';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  @Output() sort: EventEmitter<Sort> = new EventEmitter<Sort>();

  order: SortOrder = 'none';

  public getFilterKey(filterKey: string) {
    this.filter.emit(filterKey);
  }

  public changeSort(sortBy: string) {
    this.order =
      this.order === 'none' || this.order === 'desc' ? 'asc' : 'desc';
    const sortData: Sort = {
      sortBy,
      order: this.order,
    };
    this.sort.emit(sortData);
  }
}
