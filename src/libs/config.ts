import { env } from '@/env'
import AsyncStorage from '@react-native-async-storage/async-storage' // Import AsyncStorage from react-native-async-storage/async-storagemport getStorage from firebase/storage
import { initializeApp } from 'firebase/app'
import { getReactNativePersistence, initializeAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: env.EXPO_PUBLIC_FB_API_KEY,
  authDomain: env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
  projectId: env.EXPO_PUBLIC_FB_PROJECT_ID,
  storageBucket: env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: env.EXPO_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: env.EXPO_PUBLIC_FB_APP_ID,
  measurementId: env.EXPO_PUBLIC_FB_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})

const db = getFirestore(app)

export { app, auth, db }
