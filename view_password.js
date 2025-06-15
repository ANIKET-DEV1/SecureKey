import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  doc,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 🔐 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAStQny6quILL6HyhDE2IF73deD1rZLmRs",
  authDomain: "password-manager-151f3.firebaseapp.com",
  projectId: "password-manager-151f3",
  storageBucket: "password-manager-151f3.firebasestorage.app",
  messagingSenderId: "594080968303",
  appId: "1:594080968303:web:adecc87e6961be28eaa79a"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// 🔄 Load passwords from Firestore
async function loadPasswords(user) {
  const container = document.getElementById('siteList');
  container.innerHTML = '';
const notice= document.getElementById(notify)
  try {
    const querySnapshot = await getDocs(collection(db, "users", user.uid, "passwords"));
    querySnapshot.forEach((doc) => {
      const entry = doc.data();
      const docID=doc.id;
      const siteDiv = document.createElement('div');
      siteDiv.className = 'site-item';
      siteDiv.onclick = () => toggleDetails(siteDiv);

      siteDiv.innerHTML = `
        <h3>${entry.sitename}</h3>
        <div class="details hidden">
          <p><strong>Username:</strong> ${entry.username}</p>
          <p><strong>Password:</strong> ${entry.password}</p>
          <button class="btn-del" onclick="deletePassword('${docID}')">Delete</button>
        </div>
      `;

      container.appendChild(siteDiv);
    });
  } catch (error) {
    console.error("Error loading passwords: ", error);
    notice.innerHTML="Failed!";
    notice.style.animation= "goes 2s ease-in 1";
  }
}

// 🔁 Toggle details
function toggleDetails(item) {
  const details = item.querySelector('.details');
  details.classList.toggle('hidden');
}

// ⏳ Load when DOM is ready & user is authenticated
document.addEventListener('DOMContentLoaded', () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      loadPasswords(user); 
    } else {
      alert("User not logged in");
      window.location.href = "index.html";
    }
  });
});
// notice.style.display="block";
import { deleteDoc} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
window.deletePassword = async function (docId) {
  const user = auth.currentUser;
  if (!user) {
    alert("User not logged in");
    return;
  }

  try {
    await deleteDoc(doc(db, "users", user.uid, "passwords", docId));
   
        window.location.href ="home.html";
  } catch (error) {
    console.error("Error deleting password:", error);
  }
}

