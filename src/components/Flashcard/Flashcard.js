/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './Flashcard.scss';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

class Flashcard extends React.PureComponent {
  constructor(props) {
    super(props);
    const { onGetCards } = this.props;
    onGetCards();
    this.state = {
      condition: true,
      index: 0
    };
  }

  handleClickFlip = () => {
    const { condition } = this.state;
    this.setState({ condition: !condition });
  };

  handleClickNext = () => {
    let { index } = this.state;
    index += 1;
    this.setState({ index });
  };

  handleClickPrev = () => {
    let { index } = this.state;
    if (index === 0) {
      return;
    }
    index -= 1;
    this.setState({ index });
  };

  handleClickRandom = () => {
    const { cards } = this.props;
    const index = this.getRandomIntInclusive(0, cards.length - 1);
    this.setState({ index });
  };

  getRandomIntInclusive = (min, max) => {
    const minI = Math.ceil(min);
    const maxI = Math.floor(max);
    return Math.floor(Math.random() * (maxI - minI + 1)) + minI;
  };

  render() {
    const { condition, index } = this.state;
    const { cards } = this.props;
    const card = cards[index];
    // const md = `# 08 - Scope & self\n\n## Question\n\n\`\`\`js\nvar myCar = {\n    color: "Blue",\n    logColor: function() {\n        var self = this;\n        console.log("In logColor - this.color: " + this.color);\n        console.log("In logColor - self.color: " + self.color);\n        (function() {\n            console.log("In IIFE - this.color: " + this.color);\n            console.log("In IIFE - self.color: " + self.color);\n        })();\n    }\n};\n\nmyCar.logColor();\n\`\`\``;
    return (
      <div className="flip-card">
        <div className="btn-group btn-group-lg" role="group" aria-label="...">
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={this.handleClickPrev}
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.handleClickRandom}
          >
            Random
          </button>
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={this.handleClickNext}
          >
            Next
          </button>
        </div>
        <div
          className={condition ? 'flip-card-inner' : 'flip-card-inner flip'}
          onClick={this.handleClickFlip}
        >
          <div className="flip-card-front">
            <ReactMarkdown
              source={card ? card.front : ''}
              renderers={{ code: CodeBlock }}
            />
          </div>
          <div className="flip-card-back">
            <ReactMarkdown
              source={card ? card.back : ''}
              renderers={{ code: CodeBlock }}
            />
          </div>
        </div>
      </div>
    );
  }
}

Flashcard.propTypes = {
  onGetCards: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      front: PropTypes.string,
      back: PropTypes.string
    })
  ).isRequired
};

export default Flashcard;
