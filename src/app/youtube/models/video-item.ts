import { Snippet, Statistics } from './youtube-response';

export type VideoItem = {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
};
