#! /usr/bin/env node

import inquirer from "inquirer"; 

const randomNumber =Math.floor (Math.random() * 15 + 1 )


const answer = await inquirer.prompt([
    {name: "UserGuessedNumber",
        type: "number",
        message: "Please select a number between 1-15:"
    },
]);
console.log(answer)
if (answer.UserGuessedNumber == randomNumber){
    console.log("Congratulation! You guessed right number")

}else{
    console.log("You guessed wrong number")
}

