import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

 import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBurtMzQMhJwbdqHO_I_5d_8Ly9K3RkJQU",
    authDomain: "portfolio-nishtha.firebaseapp.com",
    projectId: "portfolio-nishtha",
    storageBucket: "portfolio-nishtha.appspot.com",
    messagingSenderId: "827301335426",
    appId: "1:827301335426:web:5ed76940727735df567f9b"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)


document.getElementById("message-button").addEventListener("click",fetchData);
 async function  fetchData() {
    // getching data
    let userName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userSubject = document.getElementById("subject").value;
    let userMessage = document.getElementById("message").value;
    // Saving in Firebase
    
    let userRef = ref(db, 'contact-list')
    let nodeId = push(userRef).key
    await set(ref(db, 'contact-list/'+nodeId), {
        userName, userEmail, userSubject, userMessage
    })
    document.getElementById("name").value= "";
    document.getElementById("email").value ="";
    document.getElementById("subject").value ="";
    document.getElementById("message").value  ="";
     
   

    alert(" Thanks  for contacting  , we will get back to you shortly! ")
 }