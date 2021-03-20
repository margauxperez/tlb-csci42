var start = document.getElementById('start');
var pause = document.getElementById('pause');
var reset = document.getElementById('reset');

var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var cycles = document.getElementById('cycles');

var caption = document.getElementById('caption');

var workMinutes = 25;
var workSeconds = 0;
var breakMinutes = 5;
var breakSeconds = 0;
var longBreakMinutes = 15;
var longBreakSeconds = 0;
var cyclesCounter = 0;

var startTimer;

start.addEventListener('click', function(){ // start button. will work on hiding it after clicking
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){ //resets everything completely 
    caption.innerText = "Press start to begin!"

    minutes.innerText = 25;
    seconds.innerText = "00";
    //cycles.innerText = 0; //for testing purposes

    workMinutes = 25;
    workSeconds = 0;
    breakMinutes = 5;
    breakSeconds = 0;
    longBreakMinutes = 15;
    longBreakSeconds = 0;
    cyclesCounter = 0;


    stopInterval()
    startTimer = undefined;
})

pause.addEventListener('click', function(){ // pause button. will work on hiding this by default until the timer starts running.
    caption.innerText = "Press start to resume!"
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer() {

    //Work Timer Countdown
    if(workSeconds != 0){
        caption.innerText = "It's time to work!"
        workSeconds--;
        seconds.innerText = workSeconds;
    } else if(workMinutes != 0 && workSeconds == 0){
        workSeconds = 59;
        workMinutes--;
        seconds.innerText = workSeconds;
        minutes.innerText = workMinutes;
    } else if(workMinutes == 0 && workSeconds == 0){ //Break Timer Countdown
        if (cyclesCounter < 3) {
            caption.innerText = "It's time for a break!"
            if (breakSeconds != 0) {
                breakSeconds--;
                seconds.innerText = breakSeconds;
            } else if (breakMinutes != 0 && breakSeconds == 0){
                breakSeconds = 59;
                breakMinutes --;
                seconds.innerText = breakSeconds;
                minutes.innerText = breakMinutes;
            }
        } else {
            caption.innerText = "It's time for a long break!"
            if (longBreakSeconds != 0) {
                longBreakSeconds--;
                seconds.innerText = longBreakSeconds;
            } else if (longBreakMinutes != 0 && longBreakSeconds == 0){
                longBreakSeconds = 59;
                longBreakMinutes --;
                seconds.innerText = longBreakSeconds;
                minutes.innerText = longBreakMinutes;
            }
        }
    } 
    
    if(workMinutes == 0 && workSeconds == 0 && breakMinutes == 0 && breakSeconds == 0){ //Timer reset
        workMinutes = 25;
        workSeconds = 0;
        breakMinutes = 5;
        breakSeconds = 0;
        cyclesCounter++;
        //cycles.innerText = cyclesCounter; //for testing purposes
        seconds.innerText = workSeconds;
        minutes.innerText = workMinutes;
    }

    if(workMinutes == 0 && workSeconds == 0 && longBreakMinutes == 0 && longBreakSeconds == 0){ //Timer reset
        workMinutes = 25;
        workSeconds = 0;
        longBreakMinutes = 15;
        longBreakSeconds = 0;
        cyclesCounter = 0;
        //cycles.innerText = cyclesCounter; //for testing purposes
        seconds.innerText = workSeconds;
        minutes.innerText = workMinutes;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}