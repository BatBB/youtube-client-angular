import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(
    arr: SearchItem[],
    sortBy: string,
    isSortAsc: boolean
  ): SearchItem[] {
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
