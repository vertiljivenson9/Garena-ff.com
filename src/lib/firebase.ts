import { initializeApp, getApps } from 'firebase/app'
import { getDatabase } from 'firebase/database'

// Firebase configuration - hardcoded for Cloudflare Pages build
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyDodvzbfO3lHZfjkVF7r6ncCX_AE1CEkig',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'garena-ff-8a5aa.firebaseapp.com',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'garena-ff-8a5aa',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'garena-ff-8a5aa.firebasestorage.app',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '998236846118',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:998236846118:web:54781d023bbe248517cee7',
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-C4V1WV2M6L',
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || 'https://garena-ff-8a5aa-default-rtdb.firebaseio.com/',
}

// Initialize Firebase (singleton pattern)
function getFirebaseApp() {
  if (getApps().length === 0) {
    return initializeApp(firebaseConfig)
  }
  return getApps()[0]
}

// Initialize Realtime Database
export function getDatabaseInstance() {
  const app = getFirebaseApp()
  return getDatabase(app)
}

export default getFirebaseApp
