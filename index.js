#! /usr/bin/env node
import inqirer from "inquirer";
// 1) Computer Will generate a randam number - Done
// 2) User input for guessing nunmber - Done
// 3) Compare user input with computer generate number and show result - Done
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inqirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
