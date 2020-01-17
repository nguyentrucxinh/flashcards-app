import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cardsReducer from './cards';

const rootReducer = combineReducers({
  cards: cardsReducer,
  form: formReducer
});

export default rootReducer;
