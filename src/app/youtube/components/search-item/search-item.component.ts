import { Component, Input } from '@angular/core';
import { VideoItem } from '../../models/video-item';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input() cardItem!: VideoItem;
}
