import { initializeApp } from "https://www.gstatic.com/firebasejs/9.x/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.x/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.x/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCTY5uCXh8PI8EF0hC7EqmAnZ8g2lUw-KQ",
    authDomain: "college-bf0dd.firebaseapp.com",
    projectId: "college-bf0dd",
    storageBucket: "college-bf0dd.appspot.com",
    messagingSenderId: "180506935658",
    appId: "1:180506935658:web:22d29c026b5837a6cd6513",
    measurementId: "G-Z4SX4H94W7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
