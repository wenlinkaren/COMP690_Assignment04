// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(operation, num1, num2) {
    switch(operation) {
      // ADD FUNCTION  
      case 'add':
        return num1 + num2;
        // SUBTRACT FUNCTION
      case 'subtract':
        return num1 - num2;
         // MULTIPLY FUNCTION
      case 'multiply':
        return num1 * num2;
        // DIVIDE FUNCTION
      case 'divide':
        return num1 / num2;
      default:
        alert('Invalid operation');
    }  
};

// ADD FOUR PUBLIC FUNCTIONS BELOW
// ADD FUNCTION
const add = (a, b) => calculate('add', a, b)
// SUBTRACT FUNCTION
const subtract = (a, b) => calculate('substract', a, b)
// MULTIPLY FUNCTION
const multiply = (a, b) => calculate('multiply', a, b)
// DIVIDE FUNCTION
const divide = (a, b) => calculate('divide', a, b)
// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, subtract, multiply, divide};