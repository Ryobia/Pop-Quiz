var timerEl = document.getElementById("timer");


function hideScreen() {
    var x = document.getElementById("quizScreen");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
      
    }
}

hideScreen();

var startQuiz = function() {
    countdown();
}

var startDiv = document.getElementById("startBtn");
var startEl = document.createElement("button");
startEl.className = "btn"
startEl.textContent = "Start Quiz"
startDiv.appendChild(startEl);

startEl.addEventListener("click", hideScreen, startQuiz);

var countdown = function(){
    var timeLeft = 75;

    var timer = setInterval(function(){
        if (timeLeft > 0) {
            timerEl.innerHTML = timeLeft;
        }
        else {
            clearInterval(timer);
        }
    }, 1000);
}