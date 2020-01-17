import firebase from '../Firebase';
import { FETCH_CARDS_TYPE } from '../constants';

const receiveCards = cards => ({
  type: FETCH_CARDS_TYPE,
  payload: {
    cards
  }
});

const getCards = () => dispatch => {
  const cards = [];
  firebase
    .firestore()
    .collection('cards')
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

export default getCards;
