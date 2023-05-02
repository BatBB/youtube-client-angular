import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomCardsState } from '../reducers/custom-card.reduce';

export const selectFeature =
  createFeatureSelector<CustomCardsState>('customCards');

export const selectCustomCards = createSelector(
  selectFeature,
  (state) => state.cards
);
