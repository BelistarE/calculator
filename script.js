//buttons
const addition = document.querySelector('.add');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.function');
const enterBtn = document.querySelector('.equals');
const cButton = document.querySelector('.c');
const ceButton = document.querySelector('.ce');
let prevCalcs = document.querySelector('.prevCalcs');
let current = document.querySelector('.current'); 
let prev = document.querySelector('.prev');

let firstNumber = "0";
let operator = "";
let secondNumber = "";
let displayNum = "";
let prevNum = ""; //on top of result
let store = "";
let clickedNumber = "";

updateDisplay(firstNumber);
//main logic
//when clicking a number
numbers.forEach(numbers => {
  numbers.addEventListener('click', handleNumberClick);
});

function handleNumberClick(event) {
  clickedNumber = event.target.textContent;

  if (operator === "") { // If no operator is selected, append to the first number
    firstNumber = "";
    
    firstNumber += clickedNumber;
    displayNum = firstNumber;
    prevNum += firstNumber;
    updateDisplay(displayNum);
    
  } else {
    //if first num is default 0

    // If an operator is selected, append to the second number
    secondNumber += clickedNumber;
    displayNum += secondNumber;
    updateDisplay(displayNum);
    prevNum += secondNumber;
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
      displayNum += " + ";
      prevNum += " + ";
    } else if (operatorID === "subtract") {
      operator = "subtract";
      displayNum += " - ";
      prevNum += " - ";
    } else if (operatorID === "multiply") {
      operator = "multiply";
      displayNum += " x ";
      prevNum += " x ";
    } else if (operatorID === "divide") {
      operator = "divide";
      current.textContent += " / ";
      displayNum += " / ";
    } 
    console.log(operator);
    updateDisplay(displayNum);
  }else {
    alert("This calculator only supports one operation at a time. Please enter and perform your second operation :3");
  }

}

//TODO when clicking enter
enterBtn.addEventListener('click', function() {
  console.log("Equals button was clicked!");
  const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
  updateDisplay(result);
  prev.textContent = `${prevNum} = ${result}`;
  operator = "";
  firstNumber = result;
  secondNumber = '';
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

//TODO when clicking CE
ceButton.addEventListener('click', handleCE);
function handleCE(){
  firstNumber = "";
  operator = "";
  secondNumber = "";
  displayNum = "";
  prevNum = "";
  prev.textContent = '';
  updateDisplay('0');
}
//update display
function updateDisplay(value) {
  current.textContent = value;
}

function updatePrevDisplay(value){
  prev.textContent = value;
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


