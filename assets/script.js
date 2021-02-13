let timerEl = document.getElementById("timer");
let first = document.getElementById("startScreen");
let second = document.getElementById("quizScreen");
let third = document.getElementById("enterScore");
let fourth = document.getElementById("scoreboard");
let startQuiz = document.getElementById("startBtn");

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
    if( answer == questions[runningQuestion].correct){
        correctAnswer();
    }else{
        wrongAnswer();
    }
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        askQuestions();
    }else{
        clearInterval(timer);
        enterScorePage();
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
    userScore.innerHTML = timeLeft;
    timeLeft = 75;
 }

 let scoreboardPage = function(){
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "none";
    fourth.style.display = "block";

 }
startPage();

restart.addEventListener("click", startPage);
submitScore.addEventListener("click", scoreboardPage);
startQuiz.addEventListener("click", quizPage);
document.getElementById("goScore").addEventListener("click", scoreboardPage);
