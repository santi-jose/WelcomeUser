// Use prompt() to ask the user their name
let userName = prompt("What is your name?");

// Concatenate the user's name into a welcome message
let welcomeMessage = "Welcome " + userName + "!";

// Use a DOM method to output the welcome message into an html element
let h2 = document.createElement("h2"); // Create h2 element
h2.innerText = welcomeMessage; // set inner text to welcomeMessage
const body = document.querySelector("body");  // select body of html
body.append(h2); //append h2 to html body

