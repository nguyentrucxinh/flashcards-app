import firebase from '../../Firebase';
import { UPDATE_CARD_TYPE } from '../../constants';

const receiveCard = card => ({
  type: UPDATE_CARD_TYPE,
  payload: {
    card
  }
});

const updateCard = (id, data) => dispatch =>
  firebase
    .firestore()
    .collection('cards')
    .doc(id)
    .update(data)
    .then(docRef => {
      dispatch(receiveCard(docRef));
    })
    .catch(error => {
      throw new Error(error);
    });

export default updateCard;
