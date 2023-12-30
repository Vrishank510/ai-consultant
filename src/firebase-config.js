import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AuthDom,
  projectId: ProjectID,
  storageBucket: StorageBucket,
  messagingSenderId: SenderID,
  appId: AppID,
  measurementId: MeasID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};

