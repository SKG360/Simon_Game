function nextSequence() {
  var buttonColors = ["red", "blue", "green", "yellow"];
  var gamePattern = [];
  var randomNumber = Math.floor(Math.random() * Math.floor(4));
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).click(function() {
  $("#" + randomChosenColor).fadeOut(50).fadeIn(50);
});
}
console.log(nextSequence())
