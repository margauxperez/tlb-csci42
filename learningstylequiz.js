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

// This sorts the data coming from learningstylequiz.html to be under the "learning-style" category in the database.
let learningStyleInfo = firebase.database().ref('learningstyle')

// This code group contains lines that get the element from the html file through id.
const learningSQInstructions = document.getElementById('lsq-instructions')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const resultButton = document.getElementById('result-btn')
const doneButton = document.getElementById('done-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultContainerElement = document.getElementById('result-container')
const visualLearnerElement = document.getElementById('visual-learner')
const auditoryLearnerElement = document.getElementById('auditory-learner')
const tactileLearnerElement = document.getElementById('tactile-learner')

// This instantiates variables used in this file.
let questionsList, currentQuestionIndex
let visualScore = 0,
    auditoryScore = 0,
    tactileScore = 0,
    learningstyle= ''

// This allows the start button from the html page to run a function called startQuiz.
startButton.addEventListener('click', startQuiz)

// This allows the next button from the html page to count the questions displayed and run the setNextQuestion function.
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// This allows the 'See My Result' button from the html page to run a function called quizResult.
resultButton.addEventListener('click', quizResult)

// This function initiates the quiz by hiding the instructions and showing the first question.
function startQuiz() {
    learningSQInstructions.classList.add('hide')
    startButton.classList.add('hide')
    questionsList = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

// This function sets the next question for the quiz.
function setNextQuestion() {
    resetState()
    showQuestion(questionsList[currentQuestionIndex])
}

// This function shows the question and the answer choices.
function showQuestion(question) {
    document.getElementById('question-num').innerHTML = (currentQuestionIndex + 1) + ' of 24';
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.value && answer.learningstyle) {
            button.dataset.value = answer.value
            button.dataset.learningstyle = answer.learningstyle
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.classList.remove('hide')
        answerButtonsElement.appendChild(button)
    })
}

// This function resets the answer buttons.
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

// This function determines the selected answer and its assigned value to be added to the learning style score variables.
function selectAnswer(e) {
    const selectedButton = e.target
    const value = selectedButton.dataset.value
    const learningstyle = selectedButton.dataset.learningstyle

    if (learningstyle == 'visual') {
        visualScore = (+visualScore) + (+value)
        console.log("Visual:" + visualScore)
        console.log("Auditory:" + auditoryScore)
        console.log("Tactile:" + tactileScore)
    } else if (learningstyle == 'auditory') {
        auditoryScore = (+auditoryScore) + (+value)
        console.log("Visual:" + visualScore)
        console.log("Auditory:" + auditoryScore)
        console.log("Tactile:" + tactileScore)
    } else if (learningstyle == 'tactile') {
        tactileScore = (+tactileScore) + (+value)
        console.log("Visual:" + visualScore)
        console.log("Auditory:" + auditoryScore)
        console.log("Tactile:" + tactileScore)
    }
    if (questionsList.length > currentQuestionIndex + 1) {
        if (selectedButton != null) {
            answerButtonsElement.classList.add('hide')
        }
        nextButton.classList.remove('hide')

    } else {
        console.log("Visual:" + visualScore)
        console.log("Auditory:" + auditoryScore)
        console.log("Tactile:" + tactileScore)
        if (selectedButton != null) {
            answerButtonsElement.classList.add('hide')
        }
        resultButton.classList.remove('hide')
    }
}

// This function displays the result of the user after completing all the questions.
// This only shows the highest score, and so in the case of ties, where it is unlikely 
// given that the questions are contradicting, the tied learning style scores will follow
// the hierarchy of: visual, auditory, and tactile.

function quizResult() {
    questionContainerElement.classList.add('hide')
    answerButtonsElement.classList.add('hide')
    resultButton.classList.add('hide')

    resultContainerElement.classList.remove('hide')
    const learningstyleScore = Math.max(visualScore, auditoryScore, tactileScore);
    if (learningstyleScore == visualScore) {
        console.log('visual learner')
        learningStyle = 'visual learner'
        visualLearnerElement.classList.remove('hide')
    } else if (learningstyleScore == auditoryScore) {
        console.log('auditory learner')
        learningStyle = 'auditory learner'
        auditoryLearnerElement.classList.remove('hide')
    } else if (learningstyleScore == tactileScore) {
        console.log('tactile learner')
        learningStyle = 'tactile learner'
        tactileLearnerElement.classList.remove('hide')
    }
    console.log(learningstyleScore)

    saveFeedbackInfo(learningstyleScore, learningstyle);

    doneButton.classList.remove('hide')
}

// This function saves the inputted values in rating and feedback fields in the form to Firebase.
function saveFeedbackInfo(learningstyleScore, learningstyle) {
    let newLearningStyleInfo = learningStyleInfo.push()

    newLearningStyleInfo.set({
        learningstyleScore: learningstyleScore,
        learningstyle: learningStyle
    })
}