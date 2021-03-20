var start = document.getElementById('start');
var pause = document.getElementById('pause');
var reset = document.getElementById('reset');

var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var caption = document.getElementById('caption');

var workMinutes = 25;
var workSeconds = 0;
var breakMinutes = 5;
var breakSeconds = 0;
var counter = 0;

var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    caption.innerText = "Press start to begin!"
    minutes.innerText = 25;
    seconds.innerText = "00";
    workMinutes = 25;
    workSeconds = 0;
    breakMinutes = 5;
    breakSeconds = 0;
    stopInterval()
    startTimer = undefined;
})

pause.addEventListener('click', function(){
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
    } 
    
    //Break Timer Countdown
    if(workMinutes == 0 && workSeconds == 0){
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
    }

    //Increment Counter by one if one full cycle is completed
    if(workMinutes == 0 && workSeconds == 0 && breakMinutes == 0 && breakSeconds == 0){
        workMinutes = 25;
        workSeconds = 0;
        breakMinutes = 5;
        breakSeconds = 0;
        counter++;
        seconds.innerText = workSeconds;
        minutes.innerText = workMinutes;
        
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}