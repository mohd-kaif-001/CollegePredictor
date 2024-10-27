import { auth } from './firebaseConfig.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.x/firebase-auth.js";

// Login function
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully");
        window.location.href = "collegeList.html"; // Redirect on successful login
    } catch (error) {
        alert("Login Failed: " + error.message);
    }
});

// Sign-up function
document.getElementById("signupForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign-up successful");
        window.location.href = "login.html"; // Redirect to login page after successful sign-up
    } catch (error) {
        alert("Sign-up Failed: " + error.message);
    }
});
