function nextSequence() {
  var buttonColors = ["red", "blue", "green", "yellow"];
  var gamePattern = [];
  var randomNumber = Math.floor(Math.random() * Math.floor(4));
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
}
console.log(nextSequence())
