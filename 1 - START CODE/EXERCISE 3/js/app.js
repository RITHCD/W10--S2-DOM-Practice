const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {

  const card = document.createElement("div");
  card.className = "card";
  
  // 1 - Random color for card
  const color = randomColor();
  card.style.backgroundColor = color;
  
  // 2 - Set card text
  const description = document.createElement("p");
  description.textContent = "Description";
  card.appendChild(description);
  
  // 3 - Set card footer
  const cardFooter = document.createElement("div");
  cardFooter.className = "card-footer";
  
  // CREATE THE BUTTON (this was missing!)
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Card";

  //  4 - Manage footer button
  removeButton.addEventListener("click", function() {
    card.remove(); // This removes the entire card from the DOM
  });
  

  cardFooter.appendChild(removeButton);
  

  card.appendChild(cardFooter);

  // 5 - Add card to containers
  const container = document.querySelector(".container");
  container.appendChild(card);
}


//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);