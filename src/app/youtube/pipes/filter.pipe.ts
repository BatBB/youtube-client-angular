import { Pipe, PipeTransform } from '@angular/core';
import { VideoItem } from '../models/video-item';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(arr: VideoItem[], filterKey: string): VideoItem[] {
    if (!arr.length || !filterKey.trim()) return arr;

    return arr.filter(
      (item) =>
        item.snippet.tags?.some((tag) =>
          tag.toLowerCase().includes(filterKey.toLowerCase())
        ) || item.snippet.title.toLowerCase().includes(filterKey.toLowerCase())
    );
  }
}
