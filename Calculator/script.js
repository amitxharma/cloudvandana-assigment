document.addEventListener("DOMContentLoaded", function () {
  const answerInput = document.querySelector('input[name="answer"]');
  const buttons = document.querySelectorAll(
    '.grid-buttons input[type="button"]'
  );

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.value;
      if (value === "=") {
        try {
          answerInput.value = evaluateExpression(answerInput.value);
        } catch (error) {
          answerInput.value = "Error";
        }
      } else if (value === " AC ") {
        answerInput.value = "";
      } else {
        answerInput.value += value;
      }
    });
  });

  function evaluateExpression(expression) {
    try {
      return Function('"use strict";return (' + expression + ")")();
    } catch (error) {
      return "Error";
    }
  }
});
