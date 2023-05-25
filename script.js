const display = document.querySelector("h1");
const inputBtn = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear");
const Decimal = document.getElementById("decimal");

function sendNumber(Number) {
  // replace current display value if first value entered
  if (awaitingNextValue) {
    display.textContent = Number;
    awaitingNextValue = false;
  } else {
    // if current value is 0 , replace
    const displayValue = display.textContent;
    display.textContent = displayValue === "0" ? Number : displayValue + Number;
  }
}
function userOperator(operator) {
  const currentValue = Number(display.textContent);
  // prevent multiple operator
  if (operatorValue && awaitingNextValue) return;
  // assign first value if its not exist
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    console.log(firstValue, operator, currentValue);
    const calculation = calculate[operatorValue](firstValue, currentValue);
    console.log("calculation", calculation);
    display.textContent = calculation;
  }
  operatorValue = operator;
  // ready for next value, operator
  awaitingNextValue = true;
  operatorValue = operator;
}
const calculate = {
  "/": (firstNumber, secondNumber) => firstNumber / secondNumber,

  "*": (firstNumber, secondNumber) => firstNumber * secondNumber,

  "+": (firstNumber, secondNumber) => firstNumber + secondNumber,

  "-": (firstNumber, secondNumber) => firstNumber - secondNumber,

  "=": (secondNumber) => secondNumber,
};

// Add event listener for number
inputBtn.forEach((inputbtn) => {
  if (inputbtn.classList.length === 0) {
    inputbtn.addEventListener("click", () => sendNumber(inputbtn.value));
  } else if (inputbtn.classList.contains("operator")) {
    inputbtn.addEventListener("click", () => userOperator(inputbtn.value));
  } else if (inputbtn.classList.contains("decimal")) {
    inputbtn.addEventListener("click", () => addDecimal());
  }
});

function addDecimal() {
  // if operator pressed not add decimal

  // If no decimal , add
  if (!display.textContent.includes(".")) {
    display.textContent = `${display.textContent}.`;
  }
}

// Clear all display
function ClearAll() {
  display.textContent = "0";
  firstValue = 0;
  operatorValue = "";
  awaitingNextValue = false;
}
clearBtn.addEventListener("click", ClearAll);

let firstValue = 0;
let operatorValue = "";
let awaitingNextValue = false;
