import { createReducer, on } from '@ngrx/store';
import { CustomCard } from 'src/app/admin/models/custom-card.model';
import * as CustomCardsActions from '../actions/custom-cards.actions';

export interface CustomCardsState {
  cards: Required<CustomCard>[];
}

const initialState: CustomCardsState = {
  cards: [],
};

export const customCardsReducers = createReducer(
  initialState,
  on(
    CustomCardsActions.getCustomCards,
    (state, action): CustomCardsState => ({
      ...state,
      cards: action.cards,
    })
  ),
  on(
    CustomCardsActions.setCustomCard,
    (state, action): CustomCardsState => ({
      ...state,
      cards: [
        ...state.cards,
        { ...action.card, date: Date(), id: Date.now().toString() },
      ],
    })
  )
);
