import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cardReducer from './card';

const rootReducer = combineReducers({
  card: cardReducer,
  form: formReducer
});

export default rootReducer;
