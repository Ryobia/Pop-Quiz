let timerEl = document.getElementById("timer");
let first = document.getElementById("startScreen");
let second = document.getElementById("quizScreen");
let third = document.getElementById("enterScore");
let fourth = document.getElementById("scoreboard");
let startQuiz = document.getElementById("startBtn");
let questions = ["Arrays in Javascript can be used to store ____", "Functions are enclosed with:", 
"Commonly used datatypes include all of the following EXCEPT:", "Strings must be enclosed within what when being assigned to letiables?"];

let answers1 = ["Arrays", "Parenthesis", "String", "Quotations"];
let answers2 = ["Strings", "Buns", "Boolean", "Curly Brackets"];
let answers3 = ["Numbers", "Curly Brackets", "Quotations", "Functions"];
let answers4 = ["All of the Above", "All of the Above", "All of the Above", "All of the Above"];

let ask = document.getElementById("ask");
let firstAns = document.getElementById("answer1");
let secondAns = document.getElementById("answer2");
let thirdAns = document.getElementById("answer3");
let fourthAns = document.getElementById("answer4");



let x = 0;


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

    
    let countdown = function(){
        let timeLeft = 15;
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
    countdown();
    askQuestions();
 }

 function askQuestions(){
    ask.textContent = questions[x];
    answer1.textContent = answers1[x];
    answer2.textContent = answers2[x];
    answer3.textContent = answers3[x];
    answer4.textContent = answers4[x];

}

let checkAnswer = function() {
    

}

 let enterScorePage = function(timeLeft) {
    first.style.display = "none";
    second.style.display = "none";
    third.style.display = "block";
    fourth.style.display = "none";

    let userScore = document.getElementById("score");
    userScore.innerHTML = timeLeft;
    x = 0;
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

firstAns.addEventListener("click", checkAnswer);
