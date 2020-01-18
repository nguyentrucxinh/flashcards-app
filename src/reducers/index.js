import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cardsReducer from './cards';
import cardReducer from './card';

const rootReducer = combineReducers({
  cards: cardsReducer,
  card: cardReducer,
  form: formReducer
});

export default rootReducer;
