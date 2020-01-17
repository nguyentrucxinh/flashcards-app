import { FETCH_CARDS_TYPE } from '../constants';
import firebase from '../Firebase';

const receiveCards = cards => ({
  type: FETCH_CARDS_TYPE,
  payload: {
    cards
  }
});

// eslint-disable-next-line import/prefer-default-export
export const getCards = () => dispatch => {
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
