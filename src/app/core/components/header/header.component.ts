import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
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

  constructor(
    public headerService: HeaderService,
    public filterService: FilterService,
    public loginService: LoginService
  ) {}
}
