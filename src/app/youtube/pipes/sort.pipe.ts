import { Pipe, PipeTransform } from '@angular/core';
import { VideoItem } from '../models/video-item';
import { SortOrder } from '../models/sort';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(arr: VideoItem[], sortBy: string, order: SortOrder): VideoItem[] {
    if (sortBy === '' || order === 'none') return arr;

    const tempArr = [...arr];

    if (sortBy === 'date') {
      return tempArr.sort((a, b) =>
        order === 'desc'
          ? Date.parse(a.snippet.publishedAt) -
            Date.parse(b.snippet.publishedAt)
          : Date.parse(b.snippet.publishedAt) -
            Date.parse(a.snippet.publishedAt)
      );
    }
    return tempArr.sort((a, b) =>
      order === 'desc'
        ? +a.statistics.viewCount - +b.statistics.viewCount
        : +b.statistics.viewCount - +a.statistics.viewCount
    );
  }
}
