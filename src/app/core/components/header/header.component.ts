import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { SearchService } from 'src/app/youtube/services/search.service';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
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
    this.loginService.checkLogin();
    this.searchInputValue$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((val) => {
        this.subscription = this.searchService.getVideos(val).subscribe();
      });
  }

  public search(value: string) {
    if (value.length > 2) this.searchInputValue$.next(value);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
