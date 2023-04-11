import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectYoutubeVideos } from 'src/app/store/selectors/youtube-data.selector';
import { VideoItem } from '../../models/video-item';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-video-info-page',
  templateUrl: './video-info-page.component.html',
  styleUrls: ['./video-info-page.component.scss'],
})
export class VideoInfoPageComponent implements OnInit, OnDestroy {
  videos$ = this.store.select(selectYoutubeVideos);

  public video: VideoItem | null = null;

  private subscription!: Subscription;

  ngOnInit(): void {
    this.getVideo();
  }

  public getVideo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) return;

    this.subscription = this.videos$.subscribe((videos) => {
      this.video = videos.find((video) => video.id === id) || null;
    });

    if (!this.video) {
      this.router.navigate(['error404']);
    }
  }

  public back() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private store: Store
  ) {}
}
