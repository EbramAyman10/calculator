const display = document.querySelector(".js-text");
const buttons = document.querySelectorAll(".js-btn");

display.innerText = localStorage.getItem("result") || "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;

    if (value === "Clear") {
      display.innerHTML = "";
      localStorage.removeItem("result");
    } else if (value === "=") {
      const result = eval(display.innerText);
      display.innerText = Math.round(result * 100) / 100;
      localStorage.setItem("result", display.innerText);
    } else {
      const operators = ["+", "-", "*", "/"];
      const lastchar = display.innerText.slice(-1);
      if (operators.includes(value)) {
        if (operators.includes(lastchar)) {
          display.innerText = display.innerText.slice(0, -1) + value;
          localStorage.setItem("result", display.innerText);

          return;
        }
        if (display.innerText === "") return;
      }
      display.innerText += value;
    }
    localStorage.setItem("result", display.innerText);
  });
});
