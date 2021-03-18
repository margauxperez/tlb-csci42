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

let feedbackInfo = firebase.database().ref('feedback')

const widget = document.querySelector(".star-widget");
const sentElement = document.getElementById('status')

let rating = 0

document.querySelector(".feedback-form").addEventListener("submit", submitForm);

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

function saveFeedbackInfo(value, feedback) {
    let newFeedbackInfo = feedbackInfo.push()

    newFeedbackInfo.set({
        feedback: feedback,
        rating: value
    })
}
