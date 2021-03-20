var start = document.getElementById('start');
var pause = document.getElementById('pause');
var reset = document.getElementById('reset');

var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    minutes.innerText = 25;
    seconds.innerText = "00";
    stopInterval()
    startTimer = undefined;
})

pause.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer() {
    //Work Timer Countdown
    if(seconds.innerText != 0){
        seconds.innerText--;
    } else if(minutes.innerText != 0 && seconds.innerText == 0){
        seconds.innerText = 59;
        minutes.innerText--;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}