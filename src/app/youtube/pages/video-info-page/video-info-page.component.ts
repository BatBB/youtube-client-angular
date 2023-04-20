import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { SearchItem } from '../../models/search-item';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-video-info-page',
  templateUrl: './video-info-page.component.html',
  styleUrls: ['./video-info-page.component.scss'],
})
export class VideoInfoPageComponent implements OnInit {
  video$!: Observable<SearchItem>;

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  public back() {
    this.location.back();
  }

  ngOnInit(): void {
    this.getVideo();
  }

  private getVideo(): void {
    this.video$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.searchService.getVideo(params.get('id')!)
      )
    );
  }
}
