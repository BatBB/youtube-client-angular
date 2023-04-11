import { createReducer, on } from '@ngrx/store';
import * as youtubeActions from '../actions/youtube-data.action';
import { VideoItem } from '../../youtube/models/video-item';

export interface YoutubeState {
  searchKey: string;
  videos: VideoItem[];
  error: string | null;
}

const initialState: YoutubeState = {
  searchKey: '',
  videos: [],
  error: null,
};

export const youtubeReducers = createReducer(
  initialState,
  on(
    youtubeActions.searchKey,
    (state, action): YoutubeState => ({
      ...state,
      searchKey: action.searchKey,
    })
  ),
  on(
    youtubeActions.getYoutubeVideosSuccess,
    (state, action): YoutubeState => ({
      ...state,
      videos: action.videos,
    })
  ),
  on(
    youtubeActions.getYoutubeVideosFailure,
    (state, action): YoutubeState => ({
      ...state,
      error: action.error,
    })
  )
);
