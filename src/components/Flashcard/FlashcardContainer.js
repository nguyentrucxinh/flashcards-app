import { connect } from 'react-redux';
import Flashcard from './Flashcard';
import { getCards } from '../../actions/card';

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  onGetCards: () => {
    dispatch(getCards());
  }
});

const FlashcardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Flashcard);

export default FlashcardContainer;
