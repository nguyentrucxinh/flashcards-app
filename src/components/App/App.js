import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';
import './App.scss';
import Flashcard from '../../Flashcard';
import CardListContainer from '../Card/CardListContainer';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Memorize</Link>
              </li>
              <li>
                <Link to="/crud">CRUD</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/crud">
              <CardListContainer />
            </Route>
            <Route path="/">
              <Flashcard />
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default hot(App);
