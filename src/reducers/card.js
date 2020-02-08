import initialState from '../initialState.json';
import {
  CREATE_CARD_TYPE,
  UPDATE_CARD_TYPE,
  DELETE_CARD_TYPE
} from '../constants';

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CARD_TYPE:
      return action.payload.card;
    case UPDATE_CARD_TYPE:
    case DELETE_CARD_TYPE:
    default:
      return state;
  }
};

export default cardReducer;
