// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR API KEY HERE",
  authDomain: "todo-app-f4e87.firebaseapp.com",
  projectId: "todo-app-f4e87",
  storageBucket: "todo-app-f4e87.firebasestorage.app",
  messagingSenderId: "319820182906",
  appId: "1:319820182906:web:8b845052df3670321d12c3",
  measurementId: "G-Q89D3KB84Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db=getFirestore(app)
