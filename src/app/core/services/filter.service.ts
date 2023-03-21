import { Injectable } from '@angular/core';
import { Sort } from 'src/app/youtube/models/sort';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filterKey = '';

  sortBy: Sort = { sortBy: '', isAsc: true };

  public onFilterKey(filterKey: string): void {
    this.filterKey = filterKey;
  }

  public onSort(sort: Sort): void {
    this.sortBy = sort;
  }
}