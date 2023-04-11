import { createFeatureSelector, createSelector } from '@ngrx/store';
import { YoutubeState } from '../reducers/youtube-data.reduce';

export const selectFeature =
  createFeatureSelector<YoutubeState>('youtubeVideos');

export const selectSearchKey = createSelector(
  selectFeature,
  (state) => state.searchKey
);

export const selectYoutubeVideos = createSelector(
  selectFeature,
  (state) => state.videos
);

export const selectYoutubeError = createSelector(
  selectFeature,
  (state) => state.error
);
