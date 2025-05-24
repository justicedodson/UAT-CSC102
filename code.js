/**
 * Main function to play the dice game
 * This function rolls two dice and determines win/lose/push based on game rules
 */
function playDiceGame() {
    // Generate first random number between 1 and 6
    var die1 = Math.floor(Math.random() * 6) + 1;
    
    // Generate second random number between 1 and 6
    var die2 = Math.floor(Math.random() * 6) + 1;
    
    // Calculate the sum using addition
    var sum = die1 + die2;
    
    // Get the div where we will show results
    var resultDiv = document.getElementById('gameResult');
    
    // Start building the HTML to display
    var resultHTML = '<h2>Dice Results</h2>';
    resultHTML += '<p>Die 1: ' + die1 + '</p>';
    resultHTML += '<p>Die 2: ' + die2 + '</p>';
    resultHTML += '<p>Sum: ' + sum + '</p>';
    
    // Check game rules using if/else if/else
    if (sum === 7 || sum === 11) {
        // If sum equals 7 or 11, player loses
        resultHTML += '<h3>CRAPS - You lose! Better luck next time, Humie..</h3>';
    } else if (die1 === die2 && die1 % 2 === 0) {
        // If both dice are equal AND the number is even
        resultHTML += '<h3>You won!</h3>';
    } else {
        // All other results are a push
        resultHTML += '<h3>You pushed!</h3>';
    }
    
    // Display the results on the webpage
    resultDiv.innerHTML = resultHTML;
}

/**
 * Function that takes a player name and shows a welcome message
 * This function uses a parameter to create personalized output
 */
function displayUserMessage(playerName) {
    // Get the div where we will show the message
    var messageDiv = document.getElementById('userMessage');
    
    // Create the HTML message
    var messageHTML = '';
    
    // Check if name is empty
    if (playerName === '') {
        // Show error message if no name entered
        messageHTML = '<h3>Please enter your name!</h3>';
    } else {
        // Show welcome message with the name
        messageHTML = '<h3>Welcome ' + playerName + '!</h3>';
        messageHTML += '<p>Good luck!</p>';
    }
    
    // Display the message on the webpage
    messageDiv.innerHTML = messageHTML;
    
    // Clear the input box
    document.getElementById('playerName').value = '';
}