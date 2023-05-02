import { SearchItem } from './search-item';
import { PageInfo } from './youtube-response';

export type SearchResponse = {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: SearchItem[];
};
