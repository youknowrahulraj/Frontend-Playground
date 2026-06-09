let screen = document.getElementById("screen");
let buttons = document.querySelectorAll(".button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        let value = button.innerText;

        // Clear screen
        if (value === "Clear") {
            expression = "";
            screen.innerText = "";
        }

        // Calculate
        else if (value === "=") {

            try {

                // safer than eval
                let result = Function('"use strict"; return (' + expression + ')')();

                screen.innerText = result;
                expression = result.toString();

            } catch {

                screen.innerText = "Error";
                expression = "";

            }

        }

        // Add values
        else {

            expression += value;
            screen.innerText = expression;

        }

    });
});