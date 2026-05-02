console.log("Rock, Paper, Scissors Start");
console.log("****************************");
console.log();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) return "draw";
  else {
    if (humanChoice === "rock" && computerChoice === "scissors") return "human";
    else if (humanChoice === "rock" && computerChoice === "paper")
      return "computer";
    else if (humanChoice === "paper" && computerChoice === "scissors")
      return "computer";
    else if (humanChoice === "paper" && computerChoice === "rock")
      return "human";
    if (humanChoice === "scissors" && computerChoice === "rock")
      return "computer";
    else if (humanChoice === "scissors" && computerChoice === "paper")
      return "human";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Enter choice (Rock, Paper, or Scissors): ");
  return userChoice.toLowerCase().trim();
}

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
    default:
      break;
  }
}
while (humanScore < 3 && computerScore < 3) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const result = playRound(humanSelection, computerSelection);
  console.log(`${humanSelection}-${computerSelection}:  ${result}`);

  if (result === "human") {
    humanScore += 1;
  } else if (result === "computer") {
    computerScore += 1;
  }
}

console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
