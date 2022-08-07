// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7-qphxZRypab7_7fespa-CNd0LKkohKY",
  authDomain: "netflix-clone-212fe.firebaseapp.com",
  projectId: "netflix-clone-212fe",
  storageBucket: "netflix-clone-212fe.appspot.com",
  messagingSenderId: "942538239249",
  appId: "1:942538239249:web:db987bec5cb5008b6230b0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }