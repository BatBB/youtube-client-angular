import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomCardsState } from '../reducers/custom-card.reduce';

export const selectFeature = createFeatureSelector<CustomCardsState>('cards');

export const selectGetCustomCards = createSelector(
  selectFeature,
  (state) => state.cards
);
