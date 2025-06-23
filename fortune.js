// Wait until the whole page loads
window.onload = function () {
  // Get the meme image and result text elements
  const memeImg = document.getElementById("memeImage");
  const fortuneText = document.getElementById("fortuneResult");

  // Create an array of fortunes
  const fortunes = [
    " You will ace your next quiz!",
    " A bug will become a feature.",
    " You will invent something... probably explosive.",
    " You will pass this class.",
    "There are burritos in your near future."

  ];

  // Function to generate a random hex color
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Assign the image a click event using event-driven programming
  memeImg.onclick = function () {
    // Pick a random fortune from the array
    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let selectedFortune = fortunes[randomIndex];

    // Display the result and change the color
    fortuneText.innerHTML = selectedFortune;
    fortuneText.style.color = getRandomColor();
  };
};
