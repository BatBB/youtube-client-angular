import { Id, Snippet, Statistics } from './types.type';

export interface SearchItem {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
  statistics: Statistics;
}
