const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerRock = document.getElementById("playerRock");
const result = document.getElementById("result");

const scoreWin = document.getElementById("wins");
const scoreDraw = document.getElementById("draws");
const scoreLose = document.getElementById("loss");

counterWin = 0;
counterDraw = 0;
counterLose = 0;

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");

const restart = document.getElementById("restart");

restart.addEventListener("click", () => {
    counterWin = 0;
    counterDraw = 0;
    counterLose = 0;
    scoreWin.innerHTML = 0;
    scoreDraw.innerHTML = 0;
    scoreLose.innerHTML = 0;
    computerRock.style.opacity = "100%";
    computerPaper.style.opacity = "100%";
    computerScissors.style.opacity = "100%";
    result.innerHTML = "VS";
    document.getElementById("playerChoice").innerHTML = "YOUR PICK...";
    document.getElementById("computerChoice").innerHTML = "COMPUTER PICK...";
});

playerPaper.addEventListener("click", () => {
    document.getElementById("playerChoice").innerHTML = `Player choose: <span style="text-decoration: underline;"> Paper </span>`;
	var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random()*3);
    document.getElementById("computerChoice").innerHTML = `Computer choose: <span style="text-decoration: underline;">${choices[num].toUpperCase()}</span>`;

    if(choices[num] === "rock"){
        counterWin = counterWin + 1;
        scoreWin.innerHTML = counterWin;
        result.innerHTML = "YOU WIN";
        computerRock.style.opacity = "100%";
        computerPaper.style.opacity = "50%";
        computerScissors.style.opacity = "50%";
    }
    else if(choices[num] === "scissors"){
        counterLose = counterLose + 1;
        scoreLose.innerHTML = counterLose;
        result.innerHTML = "YOU LOSE"
        computerRock.style.opacity = "50%";
        computerPaper.style.opacity = "50%";
        computerScissors.style.opacity = "100%";
    }
    else{
        counterDraw = counterDraw + 1;
        scoreDraw.innerHTML = counterDraw;
        result.innerHTML = "DRAW"
        computerRock.style.opacity = "50%";
        computerPaper.style.opacity = "100%";
        computerScissors.style.opacity = "50%";
    }
});

playerScissors.addEventListener("click", () => {
    document.getElementById("playerChoice").innerHTML = `Player choose: <span style="text-decoration: underline;"> Scissors </span>`;
	var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random()*3);
    document.getElementById("computerChoice").innerHTML = `Computer choose: <span style="text-decoration: underline;">${choices[num].toUpperCase()}</span>`;
    if(choices[num] === "rock"){
        counterLose = counterLose + 1;
        scoreLose.innerHTML = counterLose;
        result.innerHTML = "YOU LOSE"
        computerRock.style.opacity = "100%";
        computerPaper.style.opacity = "50%";
        computerScissors.style.opacity = "50%";
    }
    else if(choices[num] === "scissors"){
        counterDraw = counterDraw + 1;
        scoreDraw.innerHTML = counterDraw;
        result.innerHTML = "DRAW"
        computerRock.style.opacity = "50%";
        computerPaper.style.opacity = "50%";
        computerScissors.style.opacity = "100%";
    }
    else{
        
        counterWin = counterWin + 1;
        scoreWin.innerHTML = counterWin;
        result.innerHTML = "YOU WIN";
        computerRock.style.opacity = "50%";
        computerPaper.style.opacity = "100%";
        computerScissors.style.opacity = "50%";
    }

});

playerRock.addEventListener("click", () => {
    document.getElementById("playerChoice").innerHTML = `Player choose: <span style="text-decoration: underline;"> Rock </span>`;
	var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random()*3);
    document.getElementById("computerChoice").innerHTML = `Computer choose: <span style="text-decoration: underline;">${choices[num].toUpperCase()}</span>`;

    if(choices[num] === "rock"){
        counterDraw = counterDraw + 1;
        scoreDraw.innerHTML = counterDraw;
        result.innerHTML = "DRAW"
        computerRock.style.opacity = "100%";
        computerPaper.style.opacity = "50%";
        computerScissors.style.opacity = "50%";
    }
    else if(choices[num] === "scissors"){
        counterWin = counterWin + 1;
        scoreWin.innerHTML = counterWin;
        result.innerHTML = "YOU WIN";
        computerRock.style.opacity = "50%";
        computerPaper.style.opacity = "50%";
        computerScissors.style.opacity = "100%";
    }
    else{
        counterLose = counterLose + 1;
        scoreLose.innerHTML = counterLose;
        result.innerHTML = "YOU LOSE"
        computerRock.style.opacity = "50%";
        computerPaper.style.opacity = "100%";
        computerScissors.style.opacity = "50%";
    }
});