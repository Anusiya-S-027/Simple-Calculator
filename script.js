const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      try {
        expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
        display.textContent = eval(expression);
        expression = display.textContent;
      } catch {
        display.textContent = "Error";
        expression = "";
      }
    } else if (value === "AC") {
      expression = "";
      display.textContent = "0";
    } else {
      expression += value;
      display.textContent = expression;
    }
  });
});
