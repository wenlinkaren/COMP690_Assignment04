// Prompt user for their choice
let userChoice = prompt("Do you choose rock, paper or scissors?");

// Generate computer's choice
let computerChoice = Math.random();
if (computerChoice < 0.33) {
  computerChoice = "rock";
} else if (computerChoice < 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

// Display the choices
console.log("User: " + userChoice);
console.log("Computer: " + computerChoice);

// Determine the winner or a tie
let result;
if (userChoice === computerChoice) {
  result = "Tie!";
} else if (userChoice === "rock") {
  if (computerChoice === "scissors") {
    result = "User wins!";
  } else {
    result = "Computer wins!";
  }
} else if (userChoice === "paper") {
  if (computerChoice === "rock") {
    result = "User wins!";
  } else {
    result = "Computer wins!";
  }
} else if (userChoice === "scissors") {
  if (computerChoice === "paper") {
    result = "User wins!";
  } else {
    result = "Computer wins!";
  }
} else {
  result = "Invalid input!";
}

// Display the result in an alert box
alert(result);
