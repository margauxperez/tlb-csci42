/*

const el = document.querySelector(".clock");
/*const bell = document.querySelector("audio");
const minutesdiv = document.querySelector(".minutes");
const secondsdiv = document.querySelector(".seconds");
const startButton = document.querySelector (".start");

localStorage.setItem("status", "currentlyStudying");

let initial, totalSeconds, paused, minutes, seconds;

startButton.addEventListener("click", () => {
	
	let status = localStorage.getItem("status");

	if status === "currentlyStudying" {
		minutes =+localStorage.getItem("studyTime");
	} else {
		minutes =+localStorage.getItem("breakTime"); 
	}

	seconds = minutes*60;
	totalSeconds = minutes*60;
	setTimeout(decremenT(), 60);
	startButton.style.transform ="scale(0)"
	paused = false;
});

function decremenT() {
	minutesdiv.textContent = Math.floor(seconds/60);
	secondsdiv.textContent = seconds % 60 > 9 ? seconds % 60 : '0${seconds % 60}';

	if (seconds > 0) {
		seconds--;
		initial = window.setTimeout("decremenT()", 1000);
	} else {
		mins = 0;
		secs = 0;
		/*bell.play()
	}

	if status === "currentlyStudying" {
		startButton.textContent = "Start break";
		startButton.classList.add("break");
		localStorage.setItem("status", "currentlyOnBreak")
	} else {
		startButton.classList.remove("currentlyOnBreak")
		startButton.textContent = "Start studying";
		localStorage.setItem("status", "currentlyStudying")
	}

	startButton.style.transform = "scale(1)"
}

*/