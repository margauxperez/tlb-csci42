// This code group initialized the Firebase connection for The Learning Buddy.

var firebaseConfig = {
    apiKey: "AIzaSyBTPfcNxrT2RJxbCmkladp0ntQEh2UuONs",
    authDomain: "the-learning-buddy-66812.firebaseapp.com",
    databaseURL: "https://the-learning-buddy-66812-default-rtdb.firebaseio.com",
    projectId: "the-learning-buddy-66812",
    storageBucket: "the-learning-buddy-66812.appspot.com",
    messagingSenderId: "835249560127",
    appId: "1:835249560127:web:36b8a29df26129227d768a"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// This sorts the data coming from feedback.html to be under the "feedback" category in the database.
let feedbackInfo = firebase.database().ref('feedback')


// This gets the html element with the id that is 'status' to be assigned as sentElement.
const sentElement = document.getElementById('status')

// This allows the submit button to actually submit the input from all fields to Firebase once it is clicked.
document.querySelector(".feedback-form").addEventListener("submit", submitForm);

// This function gets the input from the form fields once the submit button is clicked.
function submitForm(e) {
    e.preventDefault();

    let feedback = document.querySelector(".suggestions").value

    let value = document.querySelector('input[name="rating"]:checked').value;

    console.log(feedback);
    console.log(value);

    saveFeedbackInfo(value, feedback);
    document.getElementById('feedback-form').reset();
    sentElement.classList.remove('hide')
}

// This function saves the inputted values in rating and feedback fields in the form to Firebase.
function saveFeedbackInfo(value, feedback) {
    let newFeedbackInfo = feedbackInfo.push()

    newFeedbackInfo.set({
        feedback: feedback,
        rating: value
    })
}