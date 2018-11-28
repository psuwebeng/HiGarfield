import firebase  from './firebaseConfig'

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
