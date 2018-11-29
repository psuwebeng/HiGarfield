//import firebase  from './firebaseConfig'
//import * as firebase from 'firebase';
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyDWv0ytli8it30rUKiF6MwAW8rJC_NFSTE",
  authDomain: "webeng-hybrid-app.firebaseapp.com",
  databaseURL: "https://webeng-hybrid-app.firebaseio.com",
  projectId: "webeng-hybrid-app",
  storageBucket: "webeng-hybrid-app.appspot.com",
  messagingSenderId: "721494888940",
}
firebase.initializeApp(config);
//export default firebase;
export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
