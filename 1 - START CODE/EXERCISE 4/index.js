// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;
let chancesRemaining = 3;

// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keypress", handleEnterPasserord);

const instructionLabel = document.getElementById("instructionLabel");
 
// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

function showGame() {
  // You can use this function to dispaly the Game view
 show(passwordView);
 hide(lostView);
 hide(wonView);
 // Clear the input
  passwordInput.value = "";
  passwordInput.focus();
}

function showWin() {
  // You can use this function to dispaly the Win View
  hide(passwordView);
  hide(lostView);
  show(wonView);
}
function showLost() {
    // You can use this function to dispaly the Lost View
  hide(passwordView);
  show(lostView);
  hide(wonView);
   // Update the try again button based on remaining chances
  if (chancesRemaining > 0) {
    show(tryAgainButton);
    tryAgainButton.textContent = `Try again! (${chancesRemaining} chance${chancesRemaining > 1 ? 's' : ''} left)`;
  } else {
    hide(tryAgainButton);
  }
}

 
function handleCheck() {
  // Get the entered password
  const passwordEntered = passwordInput.value;
  
  // Convert to number for comparison
  const codeEntered = Number(passwordEntered);
  
  // Check if the code is correct
  if (codeEntered === SECRET_CODE) {
    showWin();
  } else {
    // Decrease chances
    chancesRemaining--;
    
    // Show lost view
    showLost();
  }
}
function handleEnterPassword(event) {
  // Check if Enter key is pressed (key code 13)
  if (event.key === "Enter" || event.keyCode === 13) {
    handleCheck();
  }
}

// MAIN   ---------------------------------------------------------

 showGame();