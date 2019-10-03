import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAkDilsLrwDFbyEzqk8w0YLJ9eo583utGI',
  authDomain: 'catch-of-the-day-leroy-29834.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-leroy-29834.firebaseio.com',
})

const base = Rebase.createClass(firebase.database(firebaseApp))

export { firebaseApp }

export default base
