import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userName = 'Your Name';

  isDisplayFilters = false;

  toggleFilters(): void {
    this.isDisplayFilters = !this.isDisplayFilters;
  }
}
