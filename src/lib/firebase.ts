import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  projectId: "universal-exchanger-d5xj8",
  appId: "1:410202156326:web:1851a5da0554bdd8ffe5e7",
  apiKey: "AIzaSyBnZsBzt4Rwjchifw-lzZItSFfaOep_x8A",
  authDomain: "universal-exchanger-d5xj8.firebaseapp.com",
  storageBucket: "universal-exchanger-d5xj8.firebasestorage.app",
  messagingSenderId: "410202156326",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
