import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userName = 'Your Name';

  isDisplayFilters = false;

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  public toggleFilters(): void {
    this.isDisplayFilters = !this.isDisplayFilters;
  }

  public onSearchVideo(searchWord: string): void {
    if (searchWord) {
      this.search.emit(searchWord);
    }
  }
}
