var buttonColours = ["red", "blue", "green", "yellow"]; 

var gamePattern = [];

//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

// level increse updater

var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;


$(document).keypress(function(){

  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});



$(".btn").click(function(){

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  console.log(userClickedPattern);
  // var audio = new Audio("sounds/" + userChosenColour + ".mp3");
  // audio.play();
  // $("#" + userChosenColour ).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);

});

function checkAnswer(currentLevel){

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } 
  else{
    // var wrong="wrong";
    playSound("wrong");
    console.log("wrong")

    $("body").addClass("game-over");
setTimeout(function () {
     $("body").removeClass("game-over");
},200);

$("#level-title").text("Game Over, Press Any Key to Restart");

$(document).keypress(function(){
  level=0;
  started=false;
  gamePattern = [];
  userClickedPattern = [];
    
    if (!started) {

      //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
});


  }

  
}



function playSound(name){

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}



function nextSequence() {

  //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

//animation on button press

function animatePress(currentColour){

  $("#" + currentColour ).fadeIn(100).fadeOut(100).fadeIn(100);  
  

};









 



