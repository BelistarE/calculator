//buttons
const addition = document.querySelector('.add');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.function');
const enterBtn = document.querySelector('.equals');
const cButton = document.querySelector('.c');

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
operators.forEach(operator => {  
  operator.addEventListener('click', handleOperatorClick);
});

function handleOperatorClick(event){
  const clickedOperator = event.target; 
  const operatorID = clickedOperator.getAttribute('id'); 

  let operator = ""; 

  if (operator === "") {
    if (operatorID === "add") { 
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
  console.log("Equals button was clicked!");
  console.log(firstNumber);
  const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
  console.log(firstNumber)
  updateDisplay(result);

  console.log(result);
});
//TODO when clikcing c
cButton.addEventListener('click', handleClear);
function handleClear(){
  firstNumber = "";
  operator = "";
  secondNumber = "";
  displayNum = "";
  updateDisplay('0');
}

//TODO when clicking CD

//update display
function updateDisplay(value) {
  const current = document.querySelector('.current'); // Adjust selector to match your HTML
  current.textContent = value;
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
      return a+b;
    case 'subtract':
      return a-b;
    case 'multiply':
      return a*b;
    case 'divide':
      return divide(a,b);
    default:
      return "error";
  }
}

