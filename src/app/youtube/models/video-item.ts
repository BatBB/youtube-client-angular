import { Snippet, Statistics } from './types.type';

export interface VideoItem {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}
