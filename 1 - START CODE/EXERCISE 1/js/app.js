let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
// YOUR CODE !!
let item3 = container1.children[2]; // Get the third item (index 2)
container2.appendChild(item3); // Move it to container2

//  2- Remove item 4
// YOUR CODE !!

   let item4 = container2.children[0]; // Item 4 is now the first child of container2
item4.remove(); // Remove it from the DOM
// 3- Create a new item 10 and add it to container 3
// YOUR CODE !!
let item10 = document.createElement("div"); // Create a new div element
item10.className = "item"; // Add the "item" class
item10.textContent = "10"; // Set the text content to "10"
container3.appendChild(item10); // Add it to container3

//  4- Set all items located in a blue container to red
// YOUR CODE !!
let blueContainers = document.querySelectorAll(".containerBlue"); // Get all blue containers
blueContainers.forEach(container => {
  let items = container.querySelectorAll(".item"); // Get all items in each blue container
    items.forEach(item => {
    item.style.color = "red"; // Set text color to red
    });
});