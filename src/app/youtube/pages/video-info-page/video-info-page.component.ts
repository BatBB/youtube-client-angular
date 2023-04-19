import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItem } from '../../models/search-item';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-video-info-page',
  templateUrl: './video-info-page.component.html',
  styleUrls: ['./video-info-page.component.scss'],
})
export class VideoInfoPageComponent implements OnInit {
  video: SearchItem | null = null;

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
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) return;
    const video = this.searchService.getVideo(id);
    if (video) {
      this.video = video;
    } else {
      this.router.navigate(['error404']);
    }
  }

  public back() {
    this.location.back();
  }
}
