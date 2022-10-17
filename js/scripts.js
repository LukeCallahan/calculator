

// business logic

// Addition Function
function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}




// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
//For addition
window.alert("The sum is " + add(number1, number2));

//For subtraction
window.alert("The subtracted total is " + subtract(number1, number2));
