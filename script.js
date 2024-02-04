let firstNum = "";
let secNum = "";
let operator = "";
let result = false;

const add = function (a, b) {
  return "" + Math.round((a + b) * 1000) / 1000;
};

const subtract = function (a, b) {
  return "" + Math.round((a - b) * 1000) / 1000;
};

const multiply = function (a, b) {
  return "" + Math.round(a * b * 1000) / 1000;
};

const divide = function (a, b) {
  console.log(a, b);
  if (b == 0) {
    return "Error";
  }
  return "" + Math.round((a / b) * 1000) / 1000;
};

const operate = function (a, b) {
  a = Number(a);
  b = Number(b);

  if (operator == "+") {
    firstNum = add(a, b);
  } else if (operator == "-") {
    firstNum = subtract(a, b);
  } else if (operator == "*") {
    firstNum = multiply(a, b);
  } else if (operator == "/") {
    firstNum = divide(a, b);
    if (firstNum == "Error") {
      operator = "";
      secNum = "";
      display(firstNum, secNum, operator);
      firstNum = "";
      return false;
    }
  }
  console.log(firstNum);
  operator = "";
  secNum = "";
  display(firstNum, secNum, operator);
  return true;
};

const display = function (a, b, operator) {
  const displayText = document.querySelector(".display-text");
  // console.log(operator);

  if (operator != "") {
    displayText.textContent = b;
  } else {
    displayText.textContent = a;
  }
};

const signBtns = document.querySelectorAll(".sign-btn");
signBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const sign = event.target.textContent;
    if (firstNum == "" && sign == "-") {
      firstNum = "-";
      return;
    } else if (firstNum == "-" && sign == "+") {
      firstNum = "";
      return;
    } else if (firstNum == "") {
      return;
    }
    if (secNum != "") {
      operate(firstNum, secNum);
    }
    operator = event.target.textContent;
    console.log(operator);
  });
});

const numBtns = document.querySelectorAll(".num-btn");
numBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    // console.log(operator);
    const num = event.target.textContent;
    if (operator != "") {
      if (secNum.includes(".") && num == ".") {
        return;
      } else if (num == "." && (secNum == "" || secNum == "-")) {
        secNum += "0.";
      } else {
        secNum += num;
      }
    } else if (result && num != ".") {
      firstNum = num;
      result = false;
    } else if (
      (firstNum == "0" && num == "0") ||
      (firstNum == "-" && num == "0")
    ) {
      firstNum = num;
    } else if (firstNum.includes(".") && num == ".") {
      return;
    } else if (num == "." && (firstNum == "" || firstNum == "-")) {
      firstNum += "0.";
    } else {
      firstNum += num;
      result = false;
    }
    console.log(firstNum);
    display(firstNum, secNum, operator);
  });
});

const equalBtn = document.querySelector(".equal-btn");
equalBtn.addEventListener("click", () => {
  if (firstNum == "") {
    return;
  } else if (operator != "" && secNum == "") {
    result = operate(firstNum, firstNum);
  } else {
    result = operate(firstNum, secNum);
  }
});

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  firstNum = "";
  secNum = "";
  operator = "";
  display(firstNum, secNum, operator);
  result = false;
});
