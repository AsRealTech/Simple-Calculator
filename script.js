
let currentInput = '';
let currentOperation = null;
let previousInput = '';

function appendDigit(digit) {
  currentInput += digit;
  updateDisplay();
}

function setOperation(operation) {
  if (currentInput === '') return;
  
  if (previousInput !== '') {
    computeResult();
  }

  currentOperation = operation;
  previousInput = currentInput;
  currentInput = '';
}

function computeResult() {
  if (currentInput === '' || previousInput === '') return;

  let result;
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  switch (currentOperation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = null;
  previousInput = '';
  updateDisplay();
}

function clearScreen() {
  currentInput = '';
  previousInput = '';
  currentOperation = null;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('screen').value = currentInput;
}
