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

   function signUp(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up")
   }

   function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed In " + email.value);

   }

   function signOut(){
       auth.signOut();
       alert("Signed Out");
   }