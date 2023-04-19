import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item';
import { SortOrder } from '../models/sort';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(arr: SearchItem[], sortBy: string, order: SortOrder): SearchItem[] {
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
