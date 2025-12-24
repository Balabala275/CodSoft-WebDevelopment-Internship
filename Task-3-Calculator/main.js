const inputBox = document.getElementById("inputbox");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const value = button.innerText;

        if (value === "AC") {
               
            expression = "";
              inputBox.value = "0";
            return;
        }

        
        if (value === "DEL") {
            expression = expression.slice(0, -1);
               inputBox.value = expression || "0";
            return;
        }

       
        if (value === "=") {
            try {
                expression = eval(expression).toString();
                  inputBox.value = expression;
            } catch {
                inputBox.value = "Error";
                 expression = "";
            }
            return;
        }

       
        if (value === "#xB1") {
            if (expression) {
                    expression = (-parseFloat(expression)).toString();
                inputBox.value = expression;
            }
            return;
        }

        if (value === "%") {
              expression = (parseFloat(expression) / 100).toString();
            inputBox.value = expression;
             return;
        }

        expression += value;
        inputBox.value = expression;
        
    });


});
