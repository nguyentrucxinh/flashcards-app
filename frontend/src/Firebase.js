import * as firebase from 'firebase';
import 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: 'AIzaSyD5ZASokjEGQZQS1vJrngbkLkygIZ4YvQk',
  authDomain: 'crmlinkedin-b2ff6.firebaseapp.com',
  databaseURL: 'https://crmlinkedin-b2ff6.firebaseio.com',
  projectId: 'crmlinkedin-b2ff6',
  storageBucket: 'crmlinkedin-b2ff6.appspot.com'
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
