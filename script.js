let firstNum = "";
let secNum = "";
let operator = "";

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (a, b, operator) {
  if (operator == "+") {
    firstNum = add(a, b);
  } else if (operator == "-") {
    firstNum = subtract(a, b);
  } else if (operator == "*") {
    firstNum = multiply(a, b);
  } else if (operator == "/") {
    firstNum = divide(a, b);
  }
  operator = "";
};

const display = function (a, b, operator) {
  const displayText = document.querySelector(".display-text");

  if (operator != "") {
    displayText.textContent = b;
  } else {
    displayText.textContent = a;
  }
};

const signBtns = document.querySelectorAll(".sign-btn");
signBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    operator = event.target.textContent;
  });
});

const numBtns = document.querySelectorAll(".num-btn");
numBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (operator != "") {
      secNum += event.target.textContent;
    } else {
      firstNum += event.target.textContent;
    }

    display(firstNum, secNum, operator);
  });
});
