import React from 'react';
import './Flashcard.scss';

function Flashcard() {
  return (
    <div className="container">
      <div
        className="flip-container"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="flippable appcon ac-bicycle">
          <div className="front">
            <span>B</span>
            <i className="fa fa-bicycle" />
          </div>
          <div className="back">Bicycle</div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
