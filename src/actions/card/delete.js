import firebase from '../../Firebase';
import { DELETE_CARD_TYPE } from '../../constants';

const receiveCard = card => ({
  type: DELETE_CARD_TYPE,
  payload: {
    card
  }
});

const deleteCard = id => dispatch =>
  firebase
    .firestore()
    .collection('cards')
    .doc(id)
    .delete()
    .then(docRef => {
      dispatch(receiveCard(docRef));
    })
    .catch(error => {
      throw new Error(error);
    });

export default deleteCard;
