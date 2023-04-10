import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormType } from 'src/app/shared/models/form-type';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CustomCard } from '../../models/custom-card.model';
import * as CustomCardsActions from '../../../store/actions/custom-cards.actions';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss'],
})
export class AdminFormComponent implements OnInit {
  adminForm!: FormGroup<FormType<CustomCard>>;

  maxDate!: string;

  onSubmit() {
    this.store.dispatch(
      CustomCardsActions.setCustomCard({
        card: <CustomCard>this.adminForm.value,
      })
    );
    this.router.navigate(['/main']);
  }

  ngOnInit(): void {
    this.maxDate = new Date().toISOString().slice(0, 10);

    this.adminForm = new FormGroup({
      title: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      }),
      description: new FormControl('', Validators.maxLength(255)),
      linkImage: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.pattern(
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})\.(jpg|jpeg|png|webp|avif|gif)$/
          ),
        ],
      }),
      linkVideo: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.pattern(
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})\.(mov|mp4|avi|mpe?g|mkv)$/
          ),
        ],
      }),
    });
  }

  constructor(private router: Router, private store: Store) {}
}
