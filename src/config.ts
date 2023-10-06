import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCoGPmeO3ilehYU7uNr39S3nA1JZbdA5NE',
  authDomain: 'memoapp4-d3c1a.firebaseapp.com',
  projectId: 'memoapp4-d3c1a',
  storageBucket: 'memoapp4-d3c1a.appspot.com',
  messagingSenderId: '386831885914',
  appId: '1:386831885914:web:8157d750d9e42790e21a63'
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
