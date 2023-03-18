import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  getFilterKey(filterKey: string) {
    if (filterKey) this.filter.emit(filterKey);
  }
}
