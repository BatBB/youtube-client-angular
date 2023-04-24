import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { SearchService } from 'src/app/youtube/services/search.service';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs';
import { FilterService } from '../../services/filter.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription: Subscription | null = null;

  private searchInputValue$ = new Subject<string>();

  constructor(
    public headerService: HeaderService,
    public filterService: FilterService,
    public loginService: LoginService,
    public searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.subscription = this.searchInputValue$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((val) => val.length > 2),
        switchMap((val) => this.searchService.getVideos(val))
      )
      .subscribe();
  }

  public search(value: string) {
    this.searchInputValue$.next(value);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
