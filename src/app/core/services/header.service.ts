import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  isDisplayFilters = false;

  public toggleFilters(): void {
    this.isDisplayFilters = !this.isDisplayFilters;
  }
}
