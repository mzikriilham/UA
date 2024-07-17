// script.js

// Function to change the text of the header
function changeHeaderText() {
    const header = document.getElementById('header');
    header.textContent = 'Text Changed!';
}

// Add event listener to the button
document.getElementById('changeTextButton').addEventListener('click', changeHeaderText);