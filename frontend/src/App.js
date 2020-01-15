import React from 'react';
import { hot } from 'react-hot-loader/root';
import './App.scss';

function App() {
  return (
    <div>
      <article className="flashcard">
        <input id="flashcard-1" type="checkbox" />
        <label htmlFor="flashcard-1">
          <section className="front">Front of the flashcard!</section>

          <section className="back">Back of the flashcard!</section>
        </label>
      </article>
      <button type="button">Previous</button>
      <button type="button">Next</button>
      <button type="button">Random</button>
      <button type="button">Flip</button>
    </div>
  );
}

export default hot(App);
