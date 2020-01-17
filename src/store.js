import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import initialState from './initialState.json';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

store.subscribe(() => {
  // eslint-disable-next-line no-console
  console.log(
    `%c Store Subscribe: ${store.getState()}`,
    'background: #222; color: #bada55'
  );
});

// Just for testing
window.store = store;

export default store;
