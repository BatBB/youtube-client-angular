import { Component } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public headerService: HeaderService,
    public filterService: FilterService
  ) {}
}
