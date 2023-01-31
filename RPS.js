let prompt = require('prompt-sync')();

let player1 = prompt("Player 1, enter 'rock', 'paper', or 'scissors': ");
let player2 = prompt("Player 2, enter 'rock', 'paper', or 'scissors': ");

if (player1 === 'rock' && player2 === 'scissors' ||
    player1 === 'scissors' && player2 === 'paper' ||
    player1 === 'paper' && player2 === 'rock') {
  console.log("Player 1 wins!");
} else if (player2 === 'rock' && player1 === 'scissors' ||
           player2 === 'scissors' && player1 === 'paper' ||
           player2 === 'paper' && player1 === 'rock') {
  console.log("Player 2 wins!");
} else if (player1 === player2) {
  console.log("Draw");
} else {
  console.log("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
}