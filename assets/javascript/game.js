




$(document).ready(function(){



var winCounter = 0;
var lossCounter = 0;
var counter = 0;

//target number everytime game restarts

var targetNumber=0;

var crystal1= Math.floor(Math.random() *101) +19;
var crystal2= Math.floor(Math.random() *101) +19;
var crystal3= Math.floor(Math.random() *101) +19;
var crystal4= Math.floor(Math.random() *101) +19;

var targetNumber = Math.floor(Math.random() * 11) +1;


$("#number-of-wins").text("Wins: " + winCounter);
$("#number-of-losses").text("Losses: " + lossCounter);




//the number were trying to get: targetnumber: generates a random number between 1-12

//each time you click one of the crystals it generates a random number:

function reset(){
targetNumber = Math.floor(Math.random() * 11) +1;
$("#number-to-guess").text(targetNumber);

crystal1 = Math.floor(Math.random() * 101 ) +19;
crystal1 = Math.floor(Math.random() * 101 ) +19;
crystal1 = Math.floor(Math.random() * 101 ) +19;
crystal1 = Math.floor(Math.random() * 101 ) +19;
counter=0;
$("#numbercounter").text(counter);
};

document.onkeydown = function(event) {
                        reset()
  };

//win and lose functions!

function winner() {
  alert("YOU'RE A WINNER!");
  wins++;
  $("#number-of-wins").text("Wins: " + winCounter);
  reset();
}

function loser() {
  alert("SUCH A LOSER!");
  losses++;
  $("#number-of-losses").text("Losses: "+ lossCounter);
  reset();
}

  $("#crystal1").on ("click", function() {
    counter = counter + crystal1;
    $("#numbercounter").text(counter);
      if (counter == targetNumber) {
        winner();

      }
      else if (counter > targetNumber) {
        loser();
      }
  })
  
  $("#crystal2").on ("click", function() {
    counter = counter + crystal2;
    $("#numbercounter").text(score);
      if (score == targetNumber) {
        winner();
      }   else if (counter > targetNumber) {
        loser();
      }
  })
  
  $("#crystal3").on ("click", function() {
    counter = counter + crystal2;
    $("#numbercounter").text(score);
      if (score == targetNumber) {
        winner(); else if (counter > targetNumber) {
        loser();
      }
  })

  $("#crystal4").on ("click", function() {
    counter = counter + crystal2;
    $("#numbercounter").text(score);
      if (score == targetNumber) {
        winner();
      }
      else if (counter > targetNumber) {
        loser();
      }
  });
  
  });



    //each time you click on the crystal div, you activate the for loop
//create a for loop: generate a random number for each crystal between 19 and 120


