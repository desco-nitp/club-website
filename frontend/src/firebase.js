import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

/*console.log('API Key:', process.env.REACT_APP_API_KEY);
console.log('Auth Domain:', process.env.REACT_APP_AUTH_DOMAIN);
console.log('Project ID:', process.env.REACT_APP_PROJECT_ID);
console.log('Storage Bucket:', process.env.REACT_APP_STORAGE_BUCKET);
console.log('Messaging Sender ID:', process.env.REACT_APPMESSAGING_SENDER_ID);
console.log('App ID:', process.env.REACT_APP_APP_ID);*/

const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app);

export {
    app,
    firestore
};