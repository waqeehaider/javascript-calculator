let string = "";
let buttons = document.querySelectorAll(".btn");
const display = document.querySelector("input");

// ✅ Common function
function handleInput(value, isBackspace = false) {
  if (isBackspace) {
    string = string.slice(0, -1);
  } 
  else if (value === "C") {
    string = "";
  } 
  else if (value === "=" || value === "Enter") {
    try {
      if (string.includes("% of")) {
        let parts = string.split("% of");
        if (parts.length === 2) {
          let a = parseFloat(parts[0].trim());
          let b = parseFloat(parts[1].trim());
          string = ((a / 100) * b).toString();
        }
      } else {
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
    string += value;
  }

  display.value = string;
}

// 🎯 Mouse clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.textContent.trim();
    if (button.classList.contains("backspace")) {
      handleInput("", true);
    } else {
      handleInput(value);
    }
  });
});

// 🎯 Keyboard input
document.addEventListener("keydown", (e) => {
  if (e.key.match(/[0-9+\-*/. % =]/)) {
    e.preventDefault(); // 🚀 stop browser from typing in input
    handleInput(e.key === "=" ? "=" : e.key);
  } 
  else if (e.key === "Backspace") {
    // e.preventDefault();
    handleInput("", true);
  } 
  else if (e.key === "Enter") {
    // e.preventDefault();
    handleInput("Enter");
  }
});












