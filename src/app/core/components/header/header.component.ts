import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { SearchService } from 'src/app/youtube/services/search.service';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  filter,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { FilterService } from '../../services/filter.service';
import { HeaderService } from '../../services/header.service';
import * as YoutubeActions from '../../../store/actions/youtube-data.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn = false;

  private subscription: Subscription | null = null;

  private subscriptionLogin: Subscription | null = null;

  private searchInputValue$ = new Subject<string>();

  constructor(
    public headerService: HeaderService,
    public filterService: FilterService,
    public loginService: LoginService,
    public searchService: SearchService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.subscription = this.searchInputValue$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        filter((val) => val.length > 2)
      )
      .subscribe((value) => {
        this.store.dispatch(YoutubeActions.searchKey({ searchKey: value }));
      });
    this.subscriptionLogin = this.loginService.isLoggedIn$.subscribe(
      // eslint-disable-next-line no-return-assign
      (status) => (this.isLoggedIn = status)
    );
  }

  public search(value: string) {
    this.searchInputValue$.next(value);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
    if (this.subscriptionLogin) this.subscriptionLogin.unsubscribe();
  }
}
