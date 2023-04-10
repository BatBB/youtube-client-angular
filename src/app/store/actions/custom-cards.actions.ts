import { createAction, props } from '@ngrx/store';
import { CustomCard } from 'src/app/admin/models/custom-card.model';

enum CustomCardActionTypes {
  GetCustomCards = '[Custom Card] Get custom cards',
  SetCustomCard = '[Custom Card] Set custom card',
}

export const getCustomCards = createAction(
  CustomCardActionTypes.GetCustomCards,
  props<{ cards: Required<CustomCard>[] }>()
);

export const setCustomCard = createAction(
  CustomCardActionTypes.SetCustomCard,
  props<{ card: CustomCard }>()
);
