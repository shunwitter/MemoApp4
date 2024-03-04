import { initializeApp } from 'firebase/app'
// tsconfig.json で index.rn.d.ts を指定しているため browserLocalPersistence を名前解決できない
import { initializeAuth, getReactNativePersistence, browserLocalPersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
import { Platform } from 'react-native'

const persistence = Platform.OS === 'web'
  ? [browserLocalPersistence]
  : getReactNativePersistence(ReactNativeAsyncStorage)

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FB_APP_ID
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence
})
const db = getFirestore(app)

export { app, auth, db }
