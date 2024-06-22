//buttons
const addition = document.querySelector('.add');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.function');
const enterBtn = document.querySelector('.equals');
const cButton = document.querySelector('.c');
const ceButton = document.querySelector('.ce');
let current = document.querySelector('.current'); 

let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayNum = "";
let prevNum = ""; //on top of result
let store = "";



//main logic
//when clicking a number
numbers.forEach(numbers => {
  numbers.addEventListener('click', handleNumberClick);
});

function handleNumberClick(event) {
  let clickedNumber = event.target.textContent;

  if (operator === "") {
    // If no operator is selected, append to the first number
    firstNumber += clickedNumber;
    displayNum = firstNumber;
    updateDisplay(displayNum);
  } else {
    // If an operator is selected, append to the second number
    secondNumber += clickedNumber;
    displayNum = secondNumber;
    current.textContent += secondNumber;
  }

  console.log(clickedNumber);
  clickedNumber = '';
}
//TODO when clicking an operator
operators.forEach(operator => {  
  operator.addEventListener('click', handleOperatorClick);
});

function handleOperatorClick(event){
  const clickedOperator = event.target; 
  const operatorID = clickedOperator.getAttribute('id'); 


  if (operator === "") {
    if (operatorID === "add") { 
      operator = "add";
      current.textContent += " + ";
    } else if (operatorID === "subtract") {
      operator = "subtract";
      current.textContent += " - ";
    } else if (operatorID === "multiply") {
      operator = "multiply";
      current.textContent += " x ";
    } else if (operatorID === "divide") {
      operator = "divide";
      current.textContent += " / ";
    } 
    console.log(operator);
  }

}

//TODO when clicking enter
enterBtn.addEventListener('click', function() {
  console.log("Equals button was clicked!");
  const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
  updateDisplay(result);
  operator = "";
  firstNumber = result;
  console.log(result);
  firstNumber = result;
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

//TODO when clicking CE
ceButton.addEventListener('click', handleCE);
function handleCE(){
  firstNumber = "";
  operator = "";
  secondNumber = "";
  displayNum = "";
  updateDisplay('0');
}
//update display
function updateDisplay(value) {
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

