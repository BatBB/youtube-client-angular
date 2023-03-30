export type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};

export type Snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailsResolution;
  channelTitle: string;
  tags?: string[];
  categoryId?: string;
  liveBroadcastContent: string;
  localized?: Localized;
  defaultAudioLanguage?: string;
  publishTime?: string;
};

type ThumbnailsResolution = {
  default: VideoResolution;
  medium: VideoResolution;
  high: VideoResolution;
  standard?: VideoResolution;
  maxres?: VideoResolution;
};

type VideoResolution = {
  url: string;
  width: number;
  height: number;
};

type Localized = {
  title: string;
  description: string;
};

export type Statistics = {
  viewCount: string;
  likeCount: string;
  // dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
};

export type Id = {
  kind: string;
  videoId: string;
};
