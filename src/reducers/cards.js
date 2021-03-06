import initialState from '../initialState.json';
import { FETCH_CARDS_TYPE, FILTER_CARDS_TYPE } from '../constants';

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_TYPE:
    case FILTER_CARDS_TYPE:
      return action.payload.cards;
    default:
      return state;
  }
};

export default cardsReducer;
