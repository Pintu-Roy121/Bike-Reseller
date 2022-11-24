// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwQSMZeox3OHrb31eraS2MTbJa17DJAeo",
    authDomain: "bike-reseller.firebaseapp.com",
    projectId: "bike-reseller",
    storageBucket: "bike-reseller.appspot.com",
    messagingSenderId: "872278836296",
    appId: "1:872278836296:web:c08cf63a7626cb158d047d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;