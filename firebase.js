import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore ,collection,addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAStQny6quILL6HyhDE2IF73deD1rZLmRs",
    authDomain: "password-manager-151f3.firebaseapp.com",
    projectId: "password-manager-151f3",
    storageBucket: "password-manager-151f3.firebasestorage.app",
    messagingSenderId: "594080968303",
    appId: "1:594080968303:web:adecc87e6961be28eaa79a"
  };
const app=initializeApp(firebaseConfig);
const auth=getAuth(app);
export{auth};
const db=getFirestore(app);
export{db}
