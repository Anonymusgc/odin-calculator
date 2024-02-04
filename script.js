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

const equal = function () {
  if (firstNum == "" || operator == "") {
    return;
  } else if (operator != "" && secNum == "") {
    result = operate(firstNum, firstNum);
  } else {
    result = operate(firstNum, secNum);
  }
};

const signAdd = function (sign) {
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
  operator = sign;
  console.log(operator);
};

const clear = function () {
  firstNum = "";
  secNum = "";
  operator = "";
  display(firstNum, secNum, operator);
  result = false;
};

const signBtns = document.querySelectorAll(".sign-btn");
signBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    signAdd(event.target.textContent);
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
      } else if (secNum == "0" && num != ".") {
        secNum = num;
      } else {
        secNum += num;
      }
    } else if (result && num != ".") {
      firstNum = num;
      result = false;
    } else if (
      (firstNum == "0" && num != ".") ||
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
  equal();
});

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  clear();
});

const signChangeBtn = document.querySelector(".change-btn");
signChangeBtn.addEventListener("click", () => {
  if (firstNum != "") {
    if (operator != "") {
      secNum =
        Number(secNum) <= 0
          ? "" + Math.abs(Number(secNum))
          : "-" + Number(secNum);
    } else {
      firstNum =
        Number(firstNum) <= 0
          ? "" + Math.abs(Number(firstNum))
          : "-" + Number(firstNum);
    }
    display(firstNum, secNum, operator);
  }
});

const percentBtn = document.querySelector(".percent-btn");
percentBtn.addEventListener("click", () => {
  if (firstNum != "" || firstNum != "-") {
    if (operator != "") {
      secNum = secNum / 100;
    } else {
      firstNum = firstNum / 100;
    }
    display(firstNum, secNum, operator);
  }
});

//keyboard support
document.addEventListener("keydown", (event) => {
  console.log(event.key);
  //enter and =
  if (event.key == "Enter" || event.key == "=") {
    event.preventDefault();
    equal();
  }
  //backspace
  if (event.key == "Backspace") {
    event.preventDefault();
    clear();
  }

  //signs
  if (
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "/"
  ) {
    event.preventDefault();
    signAdd(event.key);
  }

  //numbers
  for (let i = 0; i <= 9; i++) {
    if (event.key == i) {
      if (operator != "") {
        if (firstNum == 0) {
          secNum = event.key;
        } else {
          secNum += event.key;
        }
      } else {
        if (firstNum == 0) {
          firstNum = event.key;
        } else {
          firstNum += event.key;
        }
      }
    }
  }
  // dot
  if (event.key == ".") {
    if (operator != "") {
      if (secNum == "" || secNum == "-") {
        secNum += "0.";
      } else if (secNum.includes(".")) {
        return;
      } else {
        secNum += event.key;
      }
    } else {
      if (firstNum == "" || firstNum == "-") {
        firstNum += "0.";
      } else if (firstNum.includes(".")) {
        return;
      } else {
        firstNum += event.key;
      }
    }
  }

  display(firstNum, secNum, operator);
});
