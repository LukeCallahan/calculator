

// business logic

// Addition Function
function add(number1, number2) {
  return number1 + number2;
}
function subtract(number1, number2) {
  return number1 - number2;
}
function multiply(number1, number2) {
  return number1 * number2;
}
function divide(number1, number2) {
  return number1 / number2;
}





// user interface logic 
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

window.alert("The sum is " + add(number1, number2)+ "\nThe subtracted total is " + subtract(number1, number2) + "\nThe multiplied total is " + multiply(number1, number2) + "\nThe divided total is " + divide(number1, number2));

const addAlert = number1 + " + " + number2 + " = " + add(number1, number2) + "\n" ;
const subAlert = number1 + " - " + number2 + " = " + subtract(number1, number2) + "\n";
const multAlert = number1 + " * " + number2 + " = " + multiply(number1, number2) + "\n";
const divAlert = number1 + " / " + number2 + " = " + divide(number1, number2) + "\n";

window.alert(addAlert + subAlert + multAlert + divAlert);