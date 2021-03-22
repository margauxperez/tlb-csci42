// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBTPfcNxrT2RJxbCmkladp0ntQEh2UuONs",
  authDomain: "the-learning-buddy-66812.firebaseapp.com",
  projectId: "the-learning-buddy-66812",
  storageBucket: "the-learning-buddy-66812.appspot.com",
  messagingSenderId: "835249560127",
  appId: "1:835249560127:web:36b8a29df26129227d768a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  if (email.value === '' || email.value === null || password.value === '' || password.value === null) {

    alert("Error: Please Input Email/Password");

  } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");

    window.location.href = "index.html";

  } else {

    alert("You have entered an invalid email address!");

  }

}

function logIn() {

  var email = document.getElementById("email");
  var password = document.getElementById("password");


  if (email.value === '' || email.value === null || password.value === '' || password.value === null) {

    alert("Error Please Input Email/Password");

   } //else if {

  // }
  
  else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Logged In " + email.value);

    window.location.href = "index.html";

  } else {

    alert("You have entered an invalid email address!");

  }

}

function signOut() {
  auth.signOut();
  alert("Signed Out");
}
