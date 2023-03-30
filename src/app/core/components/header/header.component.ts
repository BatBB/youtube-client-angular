import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { SearchService } from 'src/app/youtube/services/search.service';
import { FilterService } from '../../services/filter.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    this.loginService.checkLogin();
  }

  public search(searchKey: string) {
    // this.searchService.setItems(searchKey);
    this.searchService.getVideos(searchKey);
  }

  constructor(
    public headerService: HeaderService,
    public filterService: FilterService,
    public loginService: LoginService,
    public searchService: SearchService
  ) {}
}
