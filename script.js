//buttons
const addition = document.querySelector('.add');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.function');
const enterBtn = document.querySelector('.equals')


let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayNum = "";
let prevNum = "";
let store = "";



//main logic
//when clicking a number
numbers.forEach(numbers => {
  numbers.addEventListener('click', handleNumberClick);
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
  updateDisplay(displayNum);
  console.log(clickedNumber);
}
//TODO when clicking an operator
operators.forEach(operator => {  // Renamed 'operators' to 'operator' for clarity
  operator.addEventListener('click', handleOperatorClick);
});

function handleOperatorClick(event){
  const clickedOperator = event.target; // Get the clicked element directly
  const operatorID = clickedOperator.getAttribute('id'); // Use getAttribute on the clicked element

  let operator = ""; // Initialize operator variable

  if (operator === "") {
    if (operatorID === "add") { // Use === for comparison
      operator = "add";
    } else if (operatorID === "subtract") {
      operator = "subtract";
    } else if (operatorID === "multiply") {
      operator = "multiply";
    } else if (operatorID === "divide") {
      operator = "divide";
    } 
    console.log(operator);
  }
}

//TODO when clicking enter
enterBtn.addEventListener('click', function() {
  // Perform your calculator logic here
  console.log("Equals button was clicked!");

  // Example: Perform calculation using firstNumber, operator, and secondNumber
  const result = operate(operator, firstNumber, secondNumber);

  // Example: Update display with result
  updateDisplay(result);

  console.log(result);
});
//TODO when clikcing c

//TODO when clicking CD

//update display
function updateDisplay(value) {
  const current = document.querySelector('.current'); // Adjust selector to match your HTML
  current.textContent = value;
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

