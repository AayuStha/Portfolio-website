import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDf3SSWXo3m8Q65R54ZHSXhcUdyi_f05sg",
  authDomain: "portfoliocontact-364ee.firebaseapp.com",
  databaseURL: "https://portfoliocontact-364ee-default-rtdb.firebaseio.com",
  projectId: "portfoliocontact-364ee",
  storageBucket: "portfoliocontact-364ee.firebasestorage.app",
  messagingSenderId: "1093662965320",
  appId: "1:1093662965320:web:57c9591ac2d44a857da27d"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);