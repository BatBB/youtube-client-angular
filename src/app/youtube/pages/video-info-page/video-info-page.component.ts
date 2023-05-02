import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, Subscription, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectYoutubeVideos } from 'src/app/store/selectors/youtube-data.selector';
import { VideoItem } from '../../models/video-item';

@Component({
  selector: 'app-video-info-page',
  templateUrl: './video-info-page.component.html',
  styleUrls: ['./video-info-page.component.scss'],
})
export class VideoInfoPageComponent implements OnInit, OnDestroy {
  videos$ = this.store.select(selectYoutubeVideos);

  public video: VideoItem | null = null;

  private subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getVideo();
  }

  public getVideo(): void {
    this.subscription = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.videos$.pipe(
            map((videos) => videos.find(({ id }) => id === params.get('id')))
          )
        )
      )
      .subscribe((video) => {
        if (video === undefined) this.gotoErrorPage();
        else this.video = video;
      });
  }

  public back() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private gotoErrorPage() {
    this.subscription.unsubscribe();
    this.router.navigate(['error404']);
  }
}
