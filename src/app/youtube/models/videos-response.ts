import { PageInfo } from './types.type';
import { VideoItem } from './video-item';

export interface VideosResponse {
  kind: string;
  etag: string;
  items: VideoItem[];
  pageInfo: PageInfo;
}
