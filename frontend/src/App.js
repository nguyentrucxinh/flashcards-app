import React from 'react';
import { hot } from 'react-hot-loader/root';
import './App.scss';
// import Flashcard from './Flashcard';
import CardList from './CardList';

function App() {
  return (
    <div>
      {/* <Flashcard /> */}
      <CardList />
    </div>
  );
}

export default hot(App);
