import { Snippet, Statistics } from './youtube-response';

export type SearchItem = {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
};
