 let calculation = localStorage.getItem("calc") || "";
      display();

      function updateCalculation(value) {
        calculation += value;
        console.log(calculation);
        localStorage.setItem("calc", calculation);
        display();
      }

      function display() {
        document.querySelector(".js-text").innerHTML = calculation;
      }