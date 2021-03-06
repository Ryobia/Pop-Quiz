let timerEl = document.getElementById("timer");
let first = document.getElementById("startScreen");
let second = document.getElementById("quizScreen");
let third = document.getElementById("enterScore");
let fourth = document.getElementById("scoreboard");
let startQuiz = document.getElementById("startBtn");
let scores
let questions = [
    { 
    question: "Arrays in Javascript can be used to store ____",
    choiceA: "Strings",
    choiceB: "Arrays",
    choiceC: "Numbers",
    choiceD: "All of the Above",
    correct: "D"  
    },{ 
    question: "Functions are enclosed with:",
    choiceA: "Parenthesis",
    choiceB: "Curly Brackets",
    choiceC: "Buns",
    choiceD: "Quotations",
    correct: "B"
    },{
    question: "Commonly used datatypes include all of the following EXCEPT:",
    choiceA: "Strings",
    choiceB: "Variables",
    choiceC: "Parenthesis",
    choiceD: "Booleans",
    correct: "C",
    },{ 
    question: "Strings must be enclosed within what when being assigned to variables?",
    choiceA: "Quotations",
    choiceB: "Curly Brackets",
    choiceC: "Parenthesis",
    choiceD: "Who Cares?",
    correct: "A"}];

 const lastQuestion = questions.length - 1;
 let runningQuestion = 0;   

let ask = document.getElementById("ask");
let choiceA = document.getElementById("A");
let choiceB = document.getElementById("B");
let choiceC = document.getElementById("C");
let choiceD = document.getElementById("D");

let timeLeft = 75;
let score = 0;


let quizScores = document.getElementById("scores");


let startPage = function() {
    first.style.display = "block";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "none";
}

let quizPage = function() {
    first.style.display = "none";
    second.style.display = "block";
    third.style.display = "none";
    fourth.style.display = "none";

    timeLeft = 75;
    score = 0;
    runningQuestion = 0;
    
    countdown();
    askQuestions();
}

let countdown = function(){
    
    timerEl.innerHTML = timeLeft;

    let timer = setInterval(function(){
        if (timeLeft > 0) {
            timeLeft--;
            timerEl.innerHTML = timeLeft;
            
        }
        else {
            clearInterval(timer);
            enterScorePage(timeLeft);
            return;
        }
    }, 1000);
}

function askQuestions(){
    let q = questions[runningQuestion];

    ask.textContent = q.question;

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;

    choiceD.innerHTML = q.choiceD;

  
}

function checkAnswer(answer){
    if( answer === questions[runningQuestion].correct){
        correctAnswer();
    }else{
        wrongAnswer();
    }
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        askQuestions();
    }else{
        score = timeLeft;
        timeLeft = 0;
        clearInterval(timer);
        enterScorePage(score);
    }
}

function correctAnswer(){
    document.getElementById("trueFalse").textContent = "Correct";
}

function wrongAnswer() {
    document.getElementById("trueFalse").textContent = "Wrong";
    timeLeft = timeLeft - 15;
}



 let enterScorePage = function() {
     
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "block";
    fourth.style.display = "none";
    let userScore = document.getElementById("score");
    userScore.innerHTML = score;
    let playerInitial = document.querySelector("input[name='initials']").value;

    let playerData = {
        player: playerInitial,
        points: score
    }
   
    addScore(playerData);
 }

 let addScore = function(playerData) {   
    
    localStorage.setItem("player", playerData.player);
    localStorage.setItem("points", playerData.points);
}
 let scoreboardPage = function(){
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "block";

    let newScoreName = localStorage.getItem("player");
    let newScoreScore = localStorage.getItem("points");

    let playerDataEl = document.createElement("li");
    playerDataEl.textContent = newScoreName + ": " + newScoreScore;
    quizScores.appendChild(playerDataEl);
    

 }


startPage();

restart.addEventListener("click", startPage);
submitScore.addEventListener("click", scoreboardPage);
startQuiz.addEventListener("click", quizPage);
document.getElementById("goScore").addEventListener("click", function(){
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "block";
});
clearScores.addEventListener("click", function(){
    localStorage.clear();
    quizScores.innerHTML = "";
})