var firebaseConfig = {
    apiKey: "AIzaSyCu5IEJ60FeswJ1eqBGU2obLZW1wEwa2j8",
    authDomain: "the-learning-buddy-96ede.firebaseapp.com",
    projectId: "the-learning-buddy-96ede",
    storageBucket: "the-learning-buddy-96ede.appspot.com",
    messagingSenderId: "756080195049",
    appId: "1:756080195049:web:be239027c9c384ca1c0778"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let feedbackInfo = firebase.database().ref('feedback')

const widget = document.querySelector(".star-widget");

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
}

function saveFeedbackInfo(value, feedback) {
    let newFeedbackInfo = feedbackInfo.push()

    newFeedbackInfo.set({
        feedback: feedback,
        rating: value
    })
}
