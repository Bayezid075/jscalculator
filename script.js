const display = document.querySelector("h1");
const inputBtn = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

function sendNumber(Number) {
  // if current display is 0 , replace it , display number
  const displayValue = display.textContent;
  display.textContent = displayValue === "0" ? Number : displayValue + Number;
}
// Add event listener for number
inputBtn.forEach((inputbtn) => {
  if (inputbtn.classList.length === 0) {
    inputbtn.addEventListener("click", () => sendNumber(inputbtn.value));
  } else if (inputbtn.classList.contains("operator")) {
    inputbtn.addEventListener("click", () => sendNumber(inputbtn.value));
  } else if (inputbtn.classList.contains("decimal")) {
    inputbtn.addEventListener("click", () => sendNumber(inputbtn.value));
  }
});
