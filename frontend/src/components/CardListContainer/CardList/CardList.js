import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardList.scss';
import CardForm from './CardForm';

class CardList extends Component {
  constructor(props) {
    super(props);
    const { onGetCards } = this.props;
    onGetCards();
  }

  createCard = values => {
    // eslint-disable-next-line no-console
    console.log('values form:', values);

    const { onCreateCard } = this.props;
    onCreateCard(values)
      .then(() => {
        // Reset form
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  renderRow = card => {
    return (
      <tr key={card.id}>
        <td>{card.id}</td>
        <td>{card.type}</td>
        <td>{card.front}</td>
        <td>{card.back}</td>
        <td>
          <button type="button" className="btn btn-primary">
            Edit
          </button>
        </td>
        <td>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  };

  render() {
    const { cards } = this.props;

    return (
      <div className="container crud-table">
        <div className="clearfix">
          <div className="form-inline pull-left">
            <button type="button" className="btn btn-success">
              <span className="glyphicon glyphicon-plus"> </span>Add
            </button>
          </div>
          <div className="form-inline pull-right">
            Search by name:
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Type name to search"
              />
            </div>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Type</th>
              <th>Front</th>
              <th>Back</th>
              <th>x</th>
              <th>x</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {cards.map(value => this.renderRow(value))}
            <tr className="text-left">
              <td colSpan="2">
                <b>Total </b>
              </td>
              <td className="text-center">{cards.length}</td>
            </tr>
          </tbody>
        </table>
        <div className="crude-form__wrapper">
          <h3>Edit</h3>
          <h3>Add</h3>
          <CardForm onSubmit={this.createCard} />
        </div>
      </div>
    );
  }
}

CardList.propTypes = {
  onGetCards: PropTypes.func.isRequired,
  onCreateCard: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      front: PropTypes.string,
      back: PropTypes.string
    })
  ).isRequired
};

// Specifies the default values for props:
// CardList.defaultProps = {
//   name: 'Stranger'
// };

export default CardList;
