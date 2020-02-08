import { connect } from 'react-redux';
import CardList from './CardList';
import { getCards, createCard, deleteCard } from '../../actions/card';

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  onGetCards: () => {
    dispatch(getCards());
  },
  onCreateCard: data =>
    dispatch(createCard(data))
      .then(() => dispatch(getCards()))
      .catch(error => {
        throw new Error(error);
      }),
  onDeleteCard: id =>
    dispatch(deleteCard(id))
      .then(() => dispatch(getCards()))
      .catch(error => {
        throw new Error(error);
      })
});

const CardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);

export default CardListContainer;
