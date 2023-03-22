import { Injectable } from '@angular/core';
import { SearchService } from 'src/app/youtube/services/search.service';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  isDisplayFilters = false;

  public toggleFilters(): void {
    this.isDisplayFilters = !this.isDisplayFilters;
  }

  public onSearchVideo(searchWord: string): void {
    if (searchWord) {
      this.searchService.setItems();
    }
  }

  constructor(private searchService: SearchService) {}
}
