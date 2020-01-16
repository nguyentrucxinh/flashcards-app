import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import Flashcard from './Flashcard';
import CardList from './CardList';

function App() {
  return (
    <Router>
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
            <CardList />
          </Route>
          <Route path="/">
            <Flashcard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default hot(App);
