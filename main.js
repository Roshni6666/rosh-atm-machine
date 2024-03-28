#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select option",
        type: "list",
        choices: ["Withdraw", "Check balance", "fast cash"]
    }
]);
console.log(operationAns);
if (operationAns.operation === "Withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
    if (amountAns.amount > myBalance) {
        console.log("Insufficient balance! You cannot withdraw more than 10000");
    }
    else {
        myBalance -= amountAns.amount;
        console.log("your remaining balance is: " + myBalance);
    }
}
else if (operationAns.operation === "Check balance") {
    console.log("your balance is: " + myBalance);
}
else if (operationAns.operation === "fast cash") {
    let fastCashAns = await inquirer.prompt([
        {
            name: "amount",
            message: "select your fast cash amount",
            type: "list",
            choices: [1000, 2000, 5000, 10000, 15000, 20000]
        }
    ]);
    if (fastCashAns.amount > myBalance) {
        console.log("Insufficient balane! You cannot withdraw more than 10000");
    }
    else {
        myBalance -= fastCashAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin code!!");
}
