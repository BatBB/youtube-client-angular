import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CustomCard } from 'src/app/admin/models/custom-card.model';
import { selectCustomCards } from 'src/app/store/selectors/custom-cards.selector';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit, OnDestroy {
  cards$ = this.store.select(selectCustomCards);

  public card: Required<CustomCard> | null = null;

  private subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.getVideo();
  }

  public getVideo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) return;

    this.subscription = this.cards$.subscribe((cards) => {
      this.card = cards.find((card) => card.id === id) || null;
    });

    if (!this.card) {
      this.router.navigate(['error404']);
    }
  }

  public back() {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
