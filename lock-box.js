const prompt = require('prompt-sync')();

let pinCode = '1234';

let userInput = prompt("Enter the passcode: ");

if (userInput === pinCode) {
  console.log("Success");
} else {
  console.log("Failure");
  
}