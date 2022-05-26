import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"

//Personalize com as suas chaves de conexão
const firebaseConfig = {
    apiKey: "AIzaSyBxNBHBIFYbZmRzxUMYGnJ-Cyyyewon3hI",
    authDomain: "food-delivery-ui-f2fc2.firebaseapp.com",
    projectId: "food-delivery-ui-f2fc2",
    storageBucket: "food-delivery-ui-f2fc2.appspot.com",
    messagingSenderId: "741665686711",
    appId: "1:741665686711:web:8c80eaf90d4516c829f932",
    measurementId: "G-WKZ8DMXZTJ"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db


