/*If you are using this code to help with your own calculator project,
DO NOT. It is very convoluted because my friend kept stress testing it
by being a goober and making absurdly long calculations over and over. 
Your project should not need this much code.*/

//buttons
const addition = document.querySelector('.add');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.function');
const enterBtn = document.querySelector('.equals');
const cButton = document.querySelector('.c');
const ceButton = document.querySelector('.ce');
let current = document.querySelector('.current'); 
let prev = document.querySelector('.prev');
const dot = document.getElementById('dot');

let firstNumber = "0";
let operator = "";
let secondNumber = "";
let displayNum = "";
let prevNum = ""; //on top of result
let store = "";
let clickedNumber = "";
let tally = 0;
let numDots = 0;

updateDisplay(firstNumber);
//main logic
//when clicking a number
numbers.forEach(numbers => {
  numbers.addEventListener('click', handleNumberClick);
});

function handleNumberClick(event) {
  clickedNumber = event.target.textContent;
  if(operator !== "" && displayNum.length >= 17){
    alert("maximum length reached")
  } else {

  if (operator === "") { // If no operator is selected, append to the first number
    console.log(`firstNUM = ${firstNumber}`);
    if (firstNumber.length > 0 && tally === 0) {
      firstNumber = "";
      displayNum = "";
      prevNum = "";
    }
    if(firstNumber.length >= 7){
      alert("this calculator only supports integers of a maximum of 7 digits. Sorry!")
      clickedNumber = "0";
    }else{
    firstNumber += clickedNumber;
    displayNum += clickedNumber;
    prevNum += firstNumber;
    updateDisplay(firstNumber);
    console.log(`total firstNum: ${firstNumber}`)
    tally++;
    }
  } else {
    // If an operator is selected, append to the second number
    if(secondNumber.length >= 7){
      alert("this calculator only supports integers of a maximum of 7 digits. Sorry!")
      clickedNumber = "0";
    }else{
    secondNumber += clickedNumber;
    displayNum += clickedNumber;
    updateDisplay(displayNum);
    prevNum += secondNumber;
    }
  }
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
  let result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
  result = limitDecimals(result, 5);
  result = result.toString();
  prev.textContent = '';
  prev.textContent = `${current.textContent} = ${result}`;
  addToHistory(`${current.textContent} = ${result}`);
  updateDisplay(result);
  displayNum = result;
  operator = "";
  firstNumber = result;
  secondNumber = '';
  tally = 0;
  numDots = 0;
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
  clearHistory();

  updateDisplay('0');
}
//update display
function updateDisplay(value) {
  current.textContent = value;
}

function updatePrevDisplay(value){
  prev.textContent = value;
}

function addToHistory(value){
  const prevCalcs = document.querySelector('.prevCalcs');
  const defaultValue = document.getElementById('defaultValue');
  const pElements = prevCalcs.getElementsByTagName('p');
  if (defaultValue) {
    prevCalcs.removeChild(defaultValue);
}
  if (pElements.length >= 14) {
  // Remove the oldest <p> element (last child)
  prevCalcs.removeChild(prevCalcs.lastChild);
}
  const p = document.createElement('p');
  p.textContent = value;

  if (prevCalcs.firstChild) {
    prevCalcs.insertBefore(p, prevCalcs.firstChild);
} else {
    prevCalcs.appendChild(p);
}

}

//clear history
function clearHistory() {
  const prevCalcs = document.querySelector('.prevCalcs');

  // Remove all child <p> elements
  while (prevCalcs.firstChild) {
    prevCalcs.removeChild(prevCalcs.firstChild);
  }
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

function limitDecimals(number, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(number * factor) / factor;
}

//extra credit: adding a dot

dot.addEventListener('click', handleDot);

function handleDot(){
  console.log(".");
  const decimal = ".";
  if(numDots === 0){ //make sure only 1 decimal
  if (operator === "") { // If no operator is selected, append to the first number
    firstNumber += decimal;
    displayNum += decimal;
    prevNum += decimal;
    updateDisplay(firstNumber);
  } else {
  //second number decimal
  secondNumber += decimal;
    displayNum += decimal;
    updateDisplay(displayNum);
    prevNum += decimal;
  }
}
}
