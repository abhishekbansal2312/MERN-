document.addEventListener("DOMContentLoaded", () => {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const operator = document.getElementById("operator");
  const button = document.getElementById("button");
  const result = document.getElementById("result");

  button.addEventListener("click", () => {
    const firstValue = Number(input1.value);
    const secondValue = Number(input2.value);
    let calculationResult;

    switch (operator.value) {
      case "add":
        calculationResult = firstValue + secondValue;
        break;
      case "sub":
        calculationResult = firstValue - secondValue;
        break;
      case "mul":
        calculationResult = firstValue * secondValue;
        break;
      case "div":
        if (secondValue !== 0) {
          calculationResult = firstValue / secondValue;
        } else {
          calculationResult = "Cannot divide by zero";
        }
        break;
      default:
        calculationResult = "Please select an operator";
    }

    result.textContent = calculationResult;
  });
});
