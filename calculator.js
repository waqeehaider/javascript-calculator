// const display = document.getElementById("calc-display");
// const buttons = document.querySelectorAll("button");
// buttons.forEach(button => {
//   button.addEventListener("click", () => {
//     const value = button.textContent.trim();

//     if (value === "C") {
//       display.value = "";
//     }
//     else if (value === "=") {
//       try {
//         display.value = eval(
//           display.value
//             .replaceAll("×", "*")
//             .replaceAll("÷", "/")
//             .replaceAll("−", "-")
//             // "+" works as is, no replacement needed
//         );
//       } catch {
//         display.value = "Error";
//       }
//     } 
//         else if (button.classList.contains("backspace")) {
//       display.value = display.value.slice(0, -1);
//     } 
//     else {
//       display.value = display.value + value;
//     }
//   });
// });





let string = "";
let buttons = document.querySelectorAll(".btn");
const display = document.querySelector("input"); // define display

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.textContent.trim(); // ✅ define value first

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
      // Evaluate expression
      try {
        string = eval(
          string
            .replaceAll("×", "*")
            .replaceAll("÷", "/")
            .replaceAll("−", "-")
            // "+" works as is
        ).toString();
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

