import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, Subscription, map } from 'rxjs';
import { VideoItem } from '../../models/video-item';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-video-info-page',
  templateUrl: './video-info-page.component.html',
  styleUrls: ['./video-info-page.component.scss'],
})
export class VideoInfoPageComponent implements OnInit, OnDestroy {
  public video!: VideoItem;

  private subscription!: Subscription;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getVideo();
  }

  public getVideo(): void {
    this.subscription = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          this.searchService.videos$.pipe(
            map((videos) =>
              videos.find((video) => video.id === params.get('id'))
            )
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
