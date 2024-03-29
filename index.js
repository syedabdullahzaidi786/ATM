#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 80000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your Pin number:",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let withdrawlType = await inquirer.prompt([
            {
                name: "withdrawl",
                message: "Please select type of withdrawl",
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
                console.log("Your Remianing Balance is:", myBalance - 500);
            }
            else if (fastCashAmount.fastCash === "1000") {
                console.log("Your Remianing Balance is:", myBalance - 1000);
            }
            else if (fastCashAmount.fastCash === "5000") {
                console.log("Your Remianing Balance is:", myBalance - 5000);
            }
            else if (fastCashAmount.fastCash === "10000") {
                console.log("Your Remianing Balance is:", myBalance - 10000);
            }
        }
        else if (withdrawlType.withdrawl === "Cash Withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter your Amount to withdraw",
                    type: "number",
                },
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Amount is insufficient");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`Your Remianing Balance is: ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Code!!!");
}
