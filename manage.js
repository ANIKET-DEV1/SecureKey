import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// 🔐 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAStQny6quILL6HyhDE2IF73deD1rZLmRs",
  authDomain: "password-manager-151f3.firebaseapp.com",
  projectId: "password-manager-151f3",
  storageBucket: "password-manager-151f3.firebasestorage.app",
  messagingSenderId: "594080968303",
  appId: "1:594080968303:web:adecc87e6961be28eaa79a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.getElementById("passwordForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const sitename = document.getElementById("sitename").value;
  const type = document.getElementById("type").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = auth.currentUser;
const notice= document.getElementById(notify)

  if (!user) {
    alert("User not logged in.");
    window.location.href="index.html";
    return;
  }

  try {
    await addDoc(collection(db, "users", user.uid, "passwords"), {
      sitename,
      type,
      username,
      password,
      createdAt: new Date()
    });

    document.getElementById("passwordForm").reset();
    window.location.href = "home.html";

  } catch (error) {
     notice.innerHTML="Failed to save!";
    notice.style.animation= "goes 2s ease-in 1";
  }
});

