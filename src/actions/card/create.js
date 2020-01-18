import firebase from '../../Firebase';
import { CREATE_CARD_TYPE } from '../../constants';

const receiveCard = card => ({
  type: CREATE_CARD_TYPE,
  payload: {
    card
  }
});

const createCard = data => dispatch =>
  firebase
    .firestore()
    .collection('cards')
    .add(data)
    .then(docRef => {
      dispatch(receiveCard(docRef));
    })
    .catch(error => {
      throw new Error(error);
    });

export default createCard;
