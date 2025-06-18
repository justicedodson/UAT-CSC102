// Justice Dodson - Palindrome Checker Script

// Function to check if input is a palindrome
function checkPalindrome() {
  // Get the value from input field
  let input = document.getElementById("palindromeInput").value;

  // Remove spaces and convert to lowercase
  let cleanInput = input.replace(/\s+/g, "").toLowerCase();

  // Reverse the cleaned string
  let reversed = cleanInput.split("").reverse().join("");

  // Get the display element
  let resultArea = document.getElementById("palindromeResult");

  // Check and show result using innerHTML
  if (cleanInput === reversed) {
    resultArea.innerHTML = "✅ '" + input + "' is a palindrome!";
  } else {
    resultArea.innerHTML = "❌ '" + input + "' is NOT a palindrome.";
  }

  // Clear the form input
  document.getElementById("palindromeInput").value = "";

  // Stop the form from refreshing the page
  return false;
}
