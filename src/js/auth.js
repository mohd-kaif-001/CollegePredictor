import { auth } from './firebaseConfig.js';
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.x/firebase-auth.js";

async function testAuth() {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, "test@example.com", "password123");
        console.log("User logged in:", userCredential.user);
    } catch (error) {
        console.error("Error logging in:", error.message);
    }
}
testAuth();

// Login function
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);

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
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up:', userCredential.user);
        errorMessage.textContent = 'Sign up successful!';
    } catch (error) {
        console.error('Error signing up:', error);
        errorMessage.textContent = error.message;
    }
});
