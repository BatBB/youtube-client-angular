export type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};

export type Snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Record<ThumbnailsResolution, VideoResolution>;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
};

type ThumbnailsResolution =
  | 'default'
  | 'medium'
  | 'high'
  | 'standard'
  | 'maxres';

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
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
};

export type Id = {
  kind: string;
  videoId: string;
};
