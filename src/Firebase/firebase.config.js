
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhaW8isUAi5AqcTEWLfwmtKWoeETImZ6k",
  authDomain: "ph-9-muhammad-real-estate.firebaseapp.com",
  projectId: "ph-9-muhammad-real-estate",
  storageBucket: "ph-9-muhammad-real-estate.appspot.com",
  messagingSenderId: "182733075292",
  appId: "1:182733075292:web:8e6e5362b14278a06f8799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export auth to use for authentication in FirebaseProvider
export const auth = getAuth(app);