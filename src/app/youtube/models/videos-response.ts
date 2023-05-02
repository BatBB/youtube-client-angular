import { PageInfo } from './youtube-response';
import { VideoItem } from './video-item';

export type VideosResponse = {
  kind: string;
  etag: string;
  items: VideoItem[];
  pageInfo: PageInfo;
};
