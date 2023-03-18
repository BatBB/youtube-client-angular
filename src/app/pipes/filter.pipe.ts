import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(arr: SearchItem[], filterKey: string): SearchItem[] {
    return arr.filter((item) =>
      item.snippet.tags.some((tag) => tag.includes(filterKey))
    );
  }
}
