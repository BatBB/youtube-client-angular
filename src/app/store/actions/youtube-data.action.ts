import { createAction, props } from '@ngrx/store';
import { VideoItem } from 'src/app/youtube/models/video-item';

enum YoutubeVideoActionsType {
  SearchKey = '[Youtube] Search key',
  GetYoutubeVideosSuccess = '[Youtube] Get videos success',
  GetYoutubeVideosFailure = '[Youtube] Get videos failure',
}

export const searchKey = createAction(
  YoutubeVideoActionsType.SearchKey,
  props<{ searchKey: string }>()
);

export const getYoutubeVideosSuccess = createAction(
  YoutubeVideoActionsType.GetYoutubeVideosSuccess,
  props<{ videos: VideoItem[] }>()
);

export const getYoutubeVideosFailure = createAction(
  YoutubeVideoActionsType.GetYoutubeVideosFailure,
  props<{ error: string }>()
);
