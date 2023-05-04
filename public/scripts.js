// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

import { rps, rpsls } from "./rpsls.js";

function getUserChoice() {
    const userChoiceButton = document.querySelector(".user-inputs-button:checked");
    return userChoiceButton ? userChoiceButton.getAttribute("choice-content") : null;
}

function getSelectedGameMode() {
    const gameModeButton = document.querySelector(".mode-option:checked");
    return gameModeButton ? gameModeButton.getAttribute("id") : null;
}

function displayResult(gameResult, playAgainstOpponent) {
    const resultContainer = document.querySelector(".results");
    if (playAgainstOpponent) {
        resultContainer.innerHTML = `
            <div class="result-content">
                <span class="result-target">You:</span>
                <span class="result-text">${gameResult.player}</span>
            </div>
            <br />
            <div class="result-content">
                <span class="result-target">Your opponent:</span>
                <span class="result-text">${gameResult.opponent}</span>
            </div>
            <br />
            <div class="result-content">
                <span class="result-label">Result:</span>
                <span class="result-text">you ${gameResult.result.toUpperCase()}</span>
            </div>
            <br />
        `;
    } else {
        resultContainer.innerHTML = `
            <div class="result-content">
                <span class="result-text">${gameResult.player.toUpperCase()}</span>
            </div>
        `;
    }
}

// Dynamically display result
document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.querySelector(".play-button");
    const startOverButton = document.querySelector(".startOver-button");

    playButton.addEventListener("click", () => {
        const gameMode = getSelectedGameMode();
        const playAgainstOpponent = document.getElementById("opponent").checked;
        let gameResult;
    
        if (playAgainstOpponent) {
            const userChoice = getUserChoice();
    
            if (gameMode === "rps") {
                gameResult = rps(userChoice);
            } else if (gameMode === "rpsls") {
                gameResult = rpsls(userChoice);
            }
        } else {
            if (gameMode === "rps") {
                gameResult = rps();
            } else if (gameMode === "rpsls") {
                gameResult = rpsls();
            }
        }
    
        displayResult(gameResult, playAgainstOpponent);
    });
    startOverButton.addEventListener("click", () => {
        const resultContainer = document.querySelector(".results");
        resultContainer.innerHTML = "";

        const userChoiceButtons = document.querySelectorAll(".user-inputs-button");
        userChoiceButtons.forEach((button) => {
            button.checked = false;
        });
    
        const userChoiceButtonsContainer = document.querySelector(".user-inputs");
        userChoiceButtonsContainer.innerHTML = "";

        const opponentCheckbox = document.getElementById("opponent");
        opponentCheckbox.checked = false;
    });

    document.querySelectorAll(".mode-option").forEach((gameModeButton) => {
        gameModeButton.addEventListener("change", () => {
            const userChoiceButtonsContainer = document.querySelector(".user-inputs");
            userChoiceButtonsContainer.innerHTML = "";

            const gameMode = getSelectedGameMode();
            if (gameMode === "rps") {
                userChoiceButtonsContainer.innerHTML = `
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="rock" choice-content="rock"> Rock
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="paper" choice-content="paper"> Paper
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="scissors" choice-content="scissors"> Scissors
                    <br />
                `;
            } else if (gameMode === "rpsls") {
                userChoiceButtonsContainer.innerHTML = `
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="rock" choice-content="rock"> Rock
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="paper" choice-content="paper"> Paper
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="scissors" choice-content="scissors"> Scissors
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="lizard" choice-content="lizard"> Lizard
                    <br />
                    <input type="radio" class="user-inputs-button" name="user-choice" value="spock" choice-content="spock"> Spock
                    <br />
                `;
            }
        });
    });
});

