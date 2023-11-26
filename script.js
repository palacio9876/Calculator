const result = document.querySelector("span");
const buttons = document.querySelectorAll("button");
const problem="Syntax error";


buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnPressed = btn.textContent;

    if (btn.id === "clear") {
      result.textContent = "0";
      return;
    }

    if (btn.id === "delete") {
      if (result.textContent.length === 1 || result.textContent === problem) {
        result.textContent = "0";
      } else {
        result.textContent = result.textContent.slice(0, -1);
      }
      return;
    }

    if (btn.id === "definitiveResult") {
        try {
            
        result.textContent = eval(result.textContent)
        } catch (error) {
            result.textContent = problem;
        }
        return
    }
    if (result.textContent === "0" || result.textContent === problem) {
      result.textContent = btnPressed;
    } else {
      result.textContent += btnPressed;
    }
  });
});
