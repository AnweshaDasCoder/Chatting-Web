// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiExdAYZQlzv-3Tv-rqpjDhBrxIuvYFOw",
    authDomain: "kwitter-c65bf.firebaseapp.com",
    projectId: "kwitter-c65bf",
    storageBucket: "kwitter-c65bf.appspot.com",
    messagingSenderId: "700927160461",
    appId: "1:700927160461:web:8b17a6ea5f0e11aedef2c4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();