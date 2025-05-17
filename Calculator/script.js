//This project is a calculator using conditions, boolean, and functions//

function calculator(x, y, operator) {
  x = Number(x);
  y = Number(y);

  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "*") {
    return x * y;
  } else if (operator === "/") {
    if (y === 0) {
      return "Error: Division by zero";
    }
    return x / y;
  } else if (operator === "%") {
    return x % y;
  } else if (operator === "**") {
    return x ** y;
  } else {
    return "Invalid operator";
  }
}

function calculate() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operator = document.getElementById("operator").value;

  const result = calculator(num1, num2, operator);
  document.getElementById("result").textContent = result;
}
