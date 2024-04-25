#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todosAnswers = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what whould you like to in your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "what whould you like to add more in your todos",
            defaoult: "true"
        }
    ]);
    todos.push(todosAnswers.firstQuestion);
    console.log(todos);
    condition = todosAnswers.secondQuestion;
}
