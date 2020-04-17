var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $(document).on("keydown", function() {
    $("#" + randomChosenColor).fadeOut(50).fadeIn(50);
    var sound_play = new Audio('sounds/' + randomChosenColor + '.mp3');
    sound_play.play();
  });

  $(".btn").on("click", function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
  });
}
console.log(nextSequence())
