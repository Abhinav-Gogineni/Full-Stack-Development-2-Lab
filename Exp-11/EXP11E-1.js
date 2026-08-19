const calculator = require('./EXP11E');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===== Calculator =====");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

rl.question("Select operation (1-4): ", (choice) => {
    rl.question("Enter first number: ", (num1) => {
        rl.question("Enter second number: ", (num2) => {

            num1 = Number(num1);
            num2 = Number(num2);

            let result;

            switch (choice) {
                case '1':
                    result = calculator.add(num1, num2);
                    console.log("Result:", result);
                    break;

                case '2':
                    result = calculator.subtract(num1, num2);
                    console.log("Result:", result);
                    break;

                case '3':
                    result = calculator.multiply(num1, num2);
                    console.log("Result:", result);
                    break;

                case '4':
                    result = calculator.divide(num1, num2);
                    console.log("Result:", result);
                    break;

                default:
                    console.log("Invalid choice");
            }

            rl.close();
        });
    });
});