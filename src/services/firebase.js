import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAhBb-GpA4m1skNGTio8EWNThil8kp8GgA',
  authDomain: 'pizzax-44c01.firebaseapp.com',
  databaseURL: 'https://pizzax-44c01.firebaseio.com',
  projectId: 'pizzax-44c01',
  storageBucket: 'pizzax-44c01.appspot.com',
  messagingSenderId: '1070820043982',
  appId: '1:1070820043982:web:ac62a9e12d17c1354d749f',
  measurementId: 'G-3CYQ67W1S1'
}
firebase.initializeApp(config)

export default firebase
