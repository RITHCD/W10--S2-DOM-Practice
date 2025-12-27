 

// Generate a random hexadecimal color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// When clicking on the RANDOM COLOR button:
// -	Generate a random color
// -	Set the body background color with this color
// -	Set the color label with the value of this color
 
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelector("button").addEventListener("click", function() {
    let color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    document.getElementById("result-color").textContent = color;
});
