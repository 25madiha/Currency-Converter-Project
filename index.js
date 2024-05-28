#! /user/bin/env node
import inquirer from "inquirer";
let c_value = {
    PKR: 278.4,
    UAE: 3.67,
    USD: 1
};
let answer = await inquirer.prompt([{
        type: 'list',
        name: "from",
        message: "converting from",
        choices: ['PKR', 'UAE', 'USD']
    },
    { type: 'list',
        name: "to",
        message: "converting to",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "number",
        name: "amount",
        message: "your amount to convert"
    }
]);
console.log(c_value[answer.to] / c_value[answer.from] * answer.amount);
