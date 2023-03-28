import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchItem } from '../../models/search-item';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-video-info-page',
  templateUrl: './video-info-page.component.html',
  styleUrls: ['./video-info-page.component.scss'],
})
export class VideoInfoPageComponent implements OnInit {
  video: SearchItem | null = null;

  ngOnInit(): void {
    this.getVideo();
  }

  getVideo() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) this.video = this.searchService.getVideo(id) || null;
  }

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}
}
