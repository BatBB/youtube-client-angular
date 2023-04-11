import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { SearchService } from 'src/app/youtube/services/search.service';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
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
  private subscription: Subscription | null = null;

  private searchInputValue$ = new Subject<string>();

  ngOnInit(): void {
    this.loginService.checkLogin();
    this.searchInputValue$
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((val) => {
        this.store.dispatch(YoutubeActions.searchKey({ searchKey: val }));
      });
  }

  public search(value: string) {
    if (value.length > 2) this.searchInputValue$.next(value);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  constructor(
    public headerService: HeaderService,
    public filterService: FilterService,
    public loginService: LoginService,
    public searchService: SearchService,
    private store: Store
  ) {}
}
