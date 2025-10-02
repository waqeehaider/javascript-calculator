let string = "";
let buttons = document.querySelectorAll(".btn");
const display = document.querySelector("input"); // define display

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.textContent.trim(); // ✅ define value first 
    // i am using it to remove the extra spaces between string characters like 1,2,3 and operators
    //if i use inner.text or inner.html it will create extra space 

    if (button.classList.contains("backspace")) {
      string = string.slice(0, -1);


    // 1st convert string to array then again convert it into string
    // let arr = string.split("")
    // arr.pop()
    // string = arr.join("");

    } 
    else if (value === "C") {
      // clear everything
      string = "";
    } 
    else if (value === "=") {
        try {
            if (string.includes("% of")) {
            // Example input: "95 % of 12"
            let parts = string.split("% of");
            if (parts.length === 2) {
                let a = parseFloat(parts[0].trim()); // left number (percentage)
                let b = parseFloat(parts[1].trim()); // right number (base value)

                string = ((a / 100) * b).toString(); // percentage formula
            }
                } else {
                // Normal evaluation for +, -, ×, ÷
                string = eval(
                    string
                    .replaceAll("×", "*")
                    .replaceAll("÷", "/")
                    .replaceAll("−", "-")
                ).toString();
                }
            } catch {
            string = "Error";
        }
    }
    
    else {
      // append clicked button text
      string = string + value;
    }

    display.value = string;
  });
});

