"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  // retreiving the number from the guess input field.
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (Number(guess) === secretNumber) {
    // When the player guesses the right number.
    document.querySelector(".body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30 rem";

    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = guess;
    score++;
    document.querySelector(".score").textContent = score;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (gues !== secretNumber) {
    displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    score--;
    document.querySelector(".score").textContent = score;
  }
  // } else if (guess > secretNumber) {
  //   // When the score is too high
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Guess is Too High!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game.";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   // When the guess is too low
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Guess is Too low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15 rem";
});
