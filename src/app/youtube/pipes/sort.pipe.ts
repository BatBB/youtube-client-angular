import { Pipe, PipeTransform } from '@angular/core';
import { VideoItem } from '../models/video-item';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(arr: VideoItem[], sortBy: string, isSortAsc: boolean): VideoItem[] {
    if (sortBy === '') return arr;

    if (sortBy === 'date') {
      return arr.sort((a, b) =>
        isSortAsc
          ? Date.parse(a.snippet.publishedAt) -
            Date.parse(b.snippet.publishedAt)
          : Date.parse(b.snippet.publishedAt) -
            Date.parse(a.snippet.publishedAt)
      );
    }
    return arr.sort((a, b) =>
      isSortAsc
        ? +a.statistics.viewCount - +b.statistics.viewCount
        : +b.statistics.viewCount - +a.statistics.viewCount
    );
  }
}
