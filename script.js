"use strict"; //to make the errors get highlighted

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const messageContent = function (message) {
  document.querySelector(".message").textContent = message;
};

//handling event upon clicking the check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //if there is no input
  if (!guess) {
    messageContent("No number found!!😕");
  }

  //if the guessed number is equal to the secret number => Win Condition
  else if (guess == secretNumber) {
    messageContent("You Win!!🥳");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#45a528";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //if the guessed number is greater than the secret number (OR) less than the secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      let msg = guess > secretNumber ? "Too High!🙄" : "Too Low😅";
      messageContent(msg);
      score--;
      document.querySelector(".score").textContent = score;
    }
    //Lost Condition
    else {
      messageContent("You Lost the Game!!😬");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#991d19";
    }
  }
});

//event handling when Again button is clicked
//resets the game and allow the user to start the game from the beginning, but the highscore is preserved
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  messageContent("Start Guessing...");
  document.querySelector(".score").textContent = score;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
});
