/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Flashcard.scss';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';

class Flashcard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      condition: false
    };
  }

  handleClick = () => {
    const { condition } = this.state;
    this.setState({ condition: !condition });
  };

  render() {
    const { condition } = this.state;
    const md = `# 08 - Scope & self\n\n## Question\n\n\`\`\`js\nvar myCar = {\n    color: "Blue",\n    logColor: function() {\n        var self = this;\n        console.log("In logColor - this.color: " + this.color);\n        console.log("In logColor - self.color: " + self.color);\n        (function() {\n            console.log("In IIFE - this.color: " + this.color);\n            console.log("In IIFE - self.color: " + self.color);\n        })();\n    }\n};\n\nmyCar.logColor();\n\`\`\``;
    return (
      <div className="flip-card">
        <div className="btn-group btn-group-lg" role="group" aria-label="...">
          <button type="button" className="btn btn-outline-info">
            Prev
          </button>
          <button type="button" className="btn btn-secondary">
            Random
          </button>
          <button type="button" className="btn btn-outline-info">
            Next
          </button>
        </div>
        <div
          className={condition ? 'flip-card-inner' : 'flip-card-inner flip'}
          onClick={this.handleClick}
        >
          <div className="flip-card-front">
            <img
              src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg"
              alt="Avatar"
              style={{ width: '800px', height: '400px' }}
            />
          </div>
          <div className="flip-card-back">
            <ReactMarkdown source={md} renderers={{ code: CodeBlock }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Flashcard;
