import { Id, Snippet, Statistics } from './youtube-response';

export type SearchItem = {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
  statistics: Statistics;
};
