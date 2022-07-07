const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerRock = document.getElementById("playerRock");

playerPaper.addEventListener("click", () => {
    document.getElementById("playerChoice").innerHTML = `Player choose: Paper`;
	var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random()*3);
    document.getElementById("computerChoice").innerHTML = `Computer choose: <span>${choices[num].toUpperCase()}</span>`;

    let computer_choice = choices[num];
    let result = document.getElementById("result");
    let choices_object = {
        'paper' : {
            'paper' : 'draw',
            'rock' : 'win',
            'scissors' : 'lose'
        }
    }

    switch(choices_object[input][computer_choice]){
        case 'win':
            result.innerHTML = "YOU WIN";
            break;
        case 'lose':
            result.innerHTML = "YOY LOSE";
            break;
        default:
            result.innerHTML = "DRAW"
            break;
    }

});

playerScissors.addEventListener("click", () => {
    document.getElementById("playerChoice").innerHTML = `Player choose: Scissors`;
	var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random()*3);
    document.getElementById("computerChoice").innerHTML = `Computer choose: <span>${choices[num].toUpperCase()}</span>`;

    let computer_choice = choices[num];
    let result = document.getElementById("result");
    let choices_object = {
        'scissors' : {
            'scissors' : 'draw',
            'paper' : 'win',
            'rock' : 'lose'
        }
    }

    switch(choices_object[input][computer_choice]){
        case 'win':
            result.innerHTML = "YOU WIN";
            break;
        case 'lose':
            result.innerHTML = "YOY LOSE";
            break;
        default:
            result.innerHTML = "DRAW"
            break;
    }

});

playerRock.addEventListener("click", () => {
    document.getElementById("playerChoice").innerHTML = `Player choose: Rock`;
	var choices = ["rock", "paper", "scissors"];
    var num = Math.floor(Math.random()*3);
    document.getElementById("computerChoice").innerHTML = `Computer choose: <span>${choices[num].toUpperCase()}</span>`;

    let computer_choice = choices[num];
    let result = document.getElementById("result");
    let choices_object = {
        'rock' : {
            'rock' : 'draw',
            'scissors' : 'win',
            'paper' : 'lose'
        }
    }

    switch(choices_object[input][computer_choice]){
        case 'win':
            result.innerHTML = "YOU WIN";
            break;
        case 'lose':
            result.innerHTML = "YOY LOSE";
            break;
        default:
            result.innerHTML = "DRAW"
            break;
    }
});