let firstNum = "";
let secNum = "";
let operator = "";

const add = function (a, b) {};

const subtract = function (a, b) {};

const multiply = function (a, b) {};

const divide = function (a, b) {};

const operate = function (a, b, operator) {
  if (operator == "+") {
    add(a, b);
  } else if (operator == "-") {
    subtract(a, b);
  } else if (operator == "*") {
    multiply(a, b);
  } else if (operator == "/") {
    divide(a, b);
  }
};

const display = function (a, b, operator) {
  const displayText = document.querySelector(".display-text");
  displayText.textContent = a;
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
      secNum = event.target.textContent;
    } else {
      firstNum = event.target.textContent;
    }

    display(firstNum, secNum, operator);
  });
});
