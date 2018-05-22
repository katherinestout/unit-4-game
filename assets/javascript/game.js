<script>
$(document).ready(function(){ 


var winCounter = 0;
var lossCounter = 0;



//target number everytime game restarts

var targetNumber=[''];

$("#number-to-guess").text(targetNumber);

//generates a random number between 1-12

$("number-to-guess") = Math.floor(Math.random() * 12) +1;


var crystalOptions = [one, two, three, four];

    //each time you click on the crystal div, you activate the for loop
//create a for loop: generate a random number for each crystal between 19 and 120

var counter = 0;

$("#crystals").on("click", ".crystal-image", function() {

    for (var i =0; i < crystalOptions.length; i++){

        var random = Math.floor(Math.random() * 120) + 19;
        
        //put it in the number counter
    
        $("#numbercounter").text(random);
        $(counter).text(random);
    
//if counter is equal to target number, give it a win!
//if not, you lose
if (counter === targetNumber) { $("");

}

else if (counter>= targetNumber) {
    $("");
}

});



<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript">
</script>