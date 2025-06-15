import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

window.register = async function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const cpass=document.getElementById("confirm-password").value.trim()
  if (!email || !password) {
   document.getElementById("error").innerText="Email and password are required.";
  
    return;
  }

  if (password.length < 8) {
    document.getElementById("error").innerText="Password must be at least 8 characters.";
    return;
  }
  if (cpass!=password){
    document.getElementById("error").innerText="confirm Password doesn't match to password";
    return;
    
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Optional: Save username to Firestore under this user if needed
    // You can add that later if required

    alert("Registration successful!");
    window.location.href ="index.html";

  } catch (error) {
    console.error("Registration error:", error);
    alert("Error: " + error.message);
  }
};

