import * as firebase from 'firebase';
import 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: ''
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
