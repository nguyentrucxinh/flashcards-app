import initialState from '../initialState.json';
import { CREATE_CARD_TYPE } from '../constants';

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARD_TYPE:
      return action.payload.card;
    default:
      return state;
  }
};

export default cardReducer;
