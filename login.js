import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

window.login = async function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  if (!email || !password) {
    document.getElementById("error").innerHTML="Please enter both email and password.";
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
    // alert("Login successful!");
   document.getElementById("error").innerText="";

    window.location.href = "home.html";
  } catch (error) {
   document.getElementById("error").innerText="Inavlid credential";
    console.error("Login error:", error.code, error.message);
    // alert("Login failed: " + error.message);
  }
};
