import { connect } from 'react-redux';
import CardList from './CardList/CardList';
import { getCards } from '../../actions';

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  onGetCards: () => {
    dispatch(getCards());
  }
});

const CardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);

export default CardListContainer;
