#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const welcomeMessage = chalk.bold("\x1b[36m Welcome To S.A.Z Banking System");
// Calculate the number of spaces needed for centering
const terminalWidth = process.stdout.columns;
const padding = Math.floor((terminalWidth - welcomeMessage.length) / 2);
// Add padding spaces before the message
const centeredMessage = " ".repeat(padding) + welcomeMessage;
// Output the centered and styled message
console.log(centeredMessage);
let myaccountNumber = 123456789;
let myBalance = 520000;
let myPin = 1234;
const accountNumberAnswer = await inquirer.prompt([
    {
        name: "accountNumber",
        message: "\x1b[37m Enter Your Account Number:",
        type: "number",
    }
]);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "\x1b[37m Enter Your Pin Number:",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("\x1b[32m Access Granted!!");
    const welcomeeMessage = chalk.bold("\x1b[33m Welcome Syed Abdullah Zaidi");
    const terminallWidth = process.stdout.columns;
    const paddingg = Math.floor((terminallWidth - welcomeMessage.length) / 2);
    const centeredMessagee = " ".repeat(paddingg) + welcomeeMessage;
    console.log(centeredMessagee);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let withdrawlType = await inquirer.prompt([
            {
                name: "withdrawl",
                message: "Please Select Type Of Withdrawl:",
                type: "list",
                choices: ["Fast Cash", "Cash Withdraw"],
            },
        ]);
        if (withdrawlType.withdrawl === "Fast Cash") {
            console.log("Fast Cash");
            let fastCashAmount = await inquirer.prompt([{
                    name: "fastCash",
                    message: "Select Amount to withdraw:",
                    type: "list",
                    choices: ["500", "1000", "5000", "10000"]
                }]);
            if (fastCashAmount.fastCash === "500") {
                console.log("\x1b[33m Your Remianing Balance is:", myBalance - 500);
            }
            else if (fastCashAmount.fastCash === "1000") {
                console.log("\x1b[33m Your Remianing Balance is:", myBalance - 1000);
            }
            else if (fastCashAmount.fastCash === "5000") {
                console.log("\x1b[33m Your Remianing Balance is:", myBalance - 5000);
            }
            else if (fastCashAmount.fastCash === "10000") {
                console.log("\x1b[33m Your Remianing Balance is:", myBalance - 10000);
            }
        }
        else if (withdrawlType.withdrawl === "Cash Withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter Your Amount To Withdraw:",
                    type: "number",
                },
            ]);
            if (amountAns.amount > myBalance) {
                console.log("\x1b[31m Amount is Insufficient");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`\x1b[33m Your Remianing Balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`\x1b[33m Your Balance is: ${myBalance}`);
    }
}
else {
    console.log("\x1b[31m Access Denied!!");
}
const thanksMessage = chalk.bold("\x1b[35m Thanks For Using S.A.Z Banking System");
const termiinalWidth = process.stdout.columns;
const paddiing = Math.floor((termiinalWidth - thanksMessage.length) / 2);
const centerredMessage = " ".repeat(paddiing) + thanksMessage;
console.log(centerredMessage);
