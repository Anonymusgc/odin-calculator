let firstNum = 0;
let secNum = 0;
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
