// Q4.Write a JavaScript function called calculateTax that takes an income as an argument and returns the amount of tax to be paid.Use a closure to handle different tax rates based on income ranges.Test the function with various incomes.



function calculateTax(income) {
    if (income >= 10000 && income <= 50000) {
        return function calculateTax() {
            const taxAmount = income * 0.03;
            console.log(`You tax amount is ${taxAmount}`);
        }
    } else if (income >= 50000 && income <= 100000) {
        return function calculateTax() {
            const taxAmount = income * 0.05;
            console.log(`You tax amount is ${taxAmount}`);
        }
    } else if (income >= 100000 && income <= 500000) {
        return function calculateTax() {
            const taxAmount = income * 0.08;
            console.log(`You tax amount is ${taxAmount}`);
        }
    } else if (income >= 500000 && income <= 1000000) {
        return function calculateTax() {
            const taxAmount = income * 0.08;
            console.log(`You tax amount is ${taxAmount}`);
        }
    }

    else {
        return () => console.log("You don't need to pay tax");
    }

}
const taxTesult = calculateTax(200000);
taxTesult();


