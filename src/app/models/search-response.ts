import { SearchItem } from './search-item';
import { PageInfo } from './types.type';

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}