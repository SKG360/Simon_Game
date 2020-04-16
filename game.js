function nextSequence() {
  var buttonColors = ["red", "blue", "green", "yellow"];
  var gamePattern = [];
  var randomNumber = Math.floor(Math.random() * 3);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $(document).on("click", function() {
  $("#" + randomChosenColor).fadeOut(50).fadeIn(50);
  var sound_play = new Audio('sounds/' + randomChosenColor + '.mp3');
  sound_play.play();
  });
}
console.log(nextSequence())
