let userScore = 0;
let compScore = 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game was draw!"
    msg.style.backgroundColor = "blue";
}

const showWinner = (userWin , userChoice , compChoice) =>{
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if(userChoice === compChoice){
       //draw 
       drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock") {
            //scissors or paper
            userWin = compChoice === "paper" ? false: true;
        }else if(userChoice === "paper") {
            //rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }else {
            //rock or paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice); 
    });
});