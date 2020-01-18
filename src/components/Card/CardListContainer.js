import { connect } from 'react-redux';
import CardList from './CardList';
import { getCards, createCard } from '../../actions/card';

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  onGetCards: () => {
    dispatch(getCards());
  },
  onCreateCard: data => dispatch(createCard(data))
});

const CardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);

export default CardListContainer;
