//buttons
const addition = document.querySelector('add');

const numbers = document.querySelectorAll('number');

let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayNum = "";
let prevNum = "";
let store = "";


//main logic
//when clicking a number
numbers.forEach(number => {
  number.addEventListener('click', handleNumberClick);
});

function handleNumberClick(event) {
  const clickedNumber = event.target.textContent;

  if (operator === "") {
    // If no operator is selected, append to the first number
    firstNumber += clickedNumber;
    displayNum = firstNumber;
  } else {
    // If an operator is selected, append to the second number
    secondNumber += clickedNumber;
    displayNum = secondNumber;
  }
}

//TODO when clicking an operator

//TODO when clicking enter

//TODO when clikcing c

//TODO when clicking CD

//update display
function updateDisplay(value) {
  const display = document.querySelector('.display'); // Adjust selector to match your HTML
  display.textContent = value;
}


//operators
function add(a , b){
  return a+b;
}

function subtract(a, b){
  return a-b;
}

function multiply(a, b){
  return a*b;
}

function divide(a, b){
  if (b === 0){
    return "error";
  }
  return a/b;
}



function operate(operator, a, b){
  switch (operator){
    case 'add':
      add(a. b);
      break;
    case 'subtract':
      subtract(a,b);
      break;
    case 'multiply':
      multiply(a,b);
      break;
    case 'divide':
      divide(a,b);
      break;
  }
}

