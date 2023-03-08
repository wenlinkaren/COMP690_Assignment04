// IMPORT THE MODULE
import {add, subtract, multiply, divide} from './modules/calculator.js';
// COLLECT FIRST NUMBER FROM USER
do {
    let num1 = Number(prompt('Enter the first number: '));
// COLLECT SECOND NUMBER FROM USER
    let num2 = Number(prompt('Enter the second number: '));
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    let operation = prompt('Enter the operation (add, subtract, multiply, divide): ');
// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
    let result;
        switch (operation) {
            case 'add':
                result = add(num1, num2);
                break;
            case 'subtract':
                result = subtract(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            default:
                alert('Invalid operator');
        }
    alert(`Result: ${result}`);  
} 
while (confirm('Do you want to perform another calculation?'));