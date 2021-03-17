const learningSQInstructions = document.getElementById('lsq-instructions')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const resultButton = document.getElementById('result-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultContainerElement = document.getElementById('result-container')
const visualLearnerElement = document.getElementById('visual-learner')
const auditoryLearnerElement = document.getElementById('auditory-learner')
const tactileLearnerElement = document.getElementById('tactile-learner')

let questionsList, currentQuestionIndex
let visualScore = 0,
    auditoryScore = 0,
    tactileScore = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
resultButton.addEventListener('click', gameResult)

//this function is limited for the moment as it shows only one result in case of ties
function gameResult() {
    questionContainerElement.classList.add('hide')
    answerButtonsElement.classList.add('hide')
    resultButton.classList.add('hide')

    resultContainerElement.classList.remove('hide')
    const learningstyleScore = Math.max(visualScore, auditoryScore, tactileScore);
    if (learningstyleScore == visualScore){
        console.log('visual learner')
        visualLearnerElement.classList.remove('hide')
    } else if (learningstyleScore == auditoryScore) {
        console.log('auditory learner')
        auditoryLearnerElement.classList.remove('hide')
    } else if (learningstyleScore == tactileScore) {
        console.log('tactile learner')
        tactileLearnerElement.classList.remove('hide')
    }
    console.log(learningstyleScore)
}

function startGame() {
    learningSQInstructions.classList.add('hide')
    startButton.classList.add('hide')
    questionsList = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(questionsList[currentQuestionIndex])
}

function showQuestion(question) {
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

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

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
        // startButton.innerText = 'Restart'
        // startButton.classList.remove('hide')
        resultButton.classList.remove('hide')
    }
}