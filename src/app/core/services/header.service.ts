import { Injectable } from '@angular/core';
import { SearchService } from 'src/app/youtube/services/search.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  userName = 'Your Name';

  isDisplayFilters = false;

  public toggleFilters(): void {
    this.isDisplayFilters = !this.isDisplayFilters;
  }

  public onSearchVideo(searchWord: string): void {
    if (searchWord) {
      this.searchService.setItems();
    }
  }

  // public onFilterKey(filterKey: string): void {
  //   this.filter.emit(filterKey);
  // }

  // public onSort(sort: Sort): void {
  //   this.sort.emit(sort);
  // }

  constructor(private searchService: SearchService) {}
}
