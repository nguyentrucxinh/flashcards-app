import firebase from '../../Firebase';
import { FILTER_CARDS_TYPE } from '../../constants';

const receiveCards = cards => ({
  type: FILTER_CARDS_TYPE,
  payload: {
    cards
  }
});

const filterCards = keyword => dispatch => {
  const cards = [];
  firebase
    .firestore()
    .collection('cards')
    // TODO: Update search query
    .where('front', '==', keyword)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        cards.push({ id: doc.id, ...doc.data() });
      });
      dispatch(receiveCards(cards));
    })
    .catch(error => {
      throw new Error(error);
    });
};

export default filterCards;
