import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() cardItem!: SearchItem;
}