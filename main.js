// Justice Dodson - Movement & Button Control Script

// Get references to DOM elements
let meme = document.getElementById("memeImage");
let message = document.getElementById("messageArea");
let intervalId = null; // To store interval so we can stop it

// Function to move image randomly
function moveMeme() {
  // Get the viewport dimensions
  let maxX = window.innerWidth - meme.width;
  let maxY = window.innerHeight - meme.height;

  // Generate random x and y positions
  let x = Math.floor(Math.random() * maxX);
  let y = Math.floor(Math.random() * maxY);

  // Apply position to meme image
  meme.style.position = "absolute";
  meme.style.left = x + "px";
  meme.style.top = y + "px";
}

// Function to start image movement
function startMovement() {
  // Disable start button, enable stop
  document.getElementById("startBtn").disabled = true;
  document.getElementById("stopBtn").disabled = false;

  // Show validation message
  message.innerHTML = "Flint and Steel!";

  // Start moving image every 1 second
  intervalId = setInterval(moveMeme, 1000);
}

// Function to stop image movement
function stopMovement() {
  // Disable stop button, enable start
  document.getElementById("stopBtn").disabled = true;
  document.getElementById("startBtn").disabled = false;

  // Stop the interval
  clearInterval(intervalId);

  // Show validation message
  message.innerHTML = "Do it again!";
}
