let userScore = 0;
let compScore = 0;

let userScoreShow = document.querySelector("#user-score");
let compScoreShow = document.querySelector("#comp-score");

let choices = document.querySelectorAll("img");
let btn = document.querySelector("button");

function genCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
}

function showWinner(userWin, userChoice, compChoice) {
    if (userWin) {
        userScore++;
        userScoreShow.innerText = userScore;
        btn.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        btn.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScoreShow.innerText = compScore;
        btn.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        btn.style.backgroundColor = "red";
    }
}

function playGame(userChoice) {
    const compChoice = genCompChoice();

    // console.log("userchoice:", userChoice);
    // console.log("compChoice:", compChoice);

    if (userChoice === compChoice) {
        btn.innerText = "Game was Draw. Play again.";
        btn.style.backgroundColor = "#c99f2f"
    }
    else {
        // Rock vs. Scissors → Rock wins
        // Scissors vs. Paper → Scissors wins
        // Paper vs. Rock → Paper wins
        // Same choice → It's a tie
        let userWin = true;

        if (userChoice === "rock") {
            userWin = (compChoice === "paper") ? false : true; // paper, scissors
        }
        else if (userChoice === "paper") {
            userWin = (compChoice === "scissors") ? false : true; // scissors, rock
        }
        else { // user: scissors
            userWin = (compChoice === "rock") ? false : true; // rock, paper
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});