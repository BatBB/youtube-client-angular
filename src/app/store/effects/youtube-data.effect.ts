import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SearchService } from 'src/app/youtube/services/search.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as YoutubeActions from '../actions/youtube-data.action';

@Injectable()
export class YoutubeEffects {
  getYoutubeVideos$ = createEffect(() => {
    return this.action$.pipe(
      ofType(YoutubeActions.searchKey),
      mergeMap((action) => {
        return this.searchService.getVideos(action.searchKey).pipe(
          map((resp) =>
            YoutubeActions.getYoutubeVideosSuccess({ videos: resp.items })
          ),
          catchError((error) =>
            of(YoutubeActions.getYoutubeVideosFailure({ error: error.message }))
          )
        );
      })
    );
  });

  constructor(private action$: Actions, private searchService: SearchService) {}
}
