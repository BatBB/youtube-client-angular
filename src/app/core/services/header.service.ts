import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  userName = 'Your Name';

  isDisplayFilters = false;

  search = '';

  public toggleFilters(): void {
    this.isDisplayFilters = !this.isDisplayFilters;
  }

  public onSearchVideo(searchWord: string): void {
    if (searchWord) {
      this.search = searchWord;
    }
  }

  // public onFilterKey(filterKey: string): void {
  //   this.filter.emit(filterKey);
  // }

  // public onSort(sort: Sort): void {
  //   this.sort.emit(sort);
  // }
}
