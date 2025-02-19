function rollDice() {
  var num1 = Math.floor(Math.random() * 6) + 1; // Generate random number for Player 1
  var num2 = Math.floor(Math.random() * 6) + 1; // Generate random number for Player 2

  // Update the dice images
  document.querySelector(".img1").setAttribute("src", "assets/images/dice" + num1 + ".png");
  document.querySelector(".img2").setAttribute("src", "assets/images/dice" + num2 + ".png");

  // Determine the winner
  if (num1 === num2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (num1 > num2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
}
