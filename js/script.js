// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

$("#shoot").click(function(){

    let hands = $("#input").val()
    console.log(hands)
    $("#userChoice").text(hands)
    let computer = $("#input").val()
    $("#computerChoice").text(computer)
    console.log(computer)
    let computer = Math.random()
    console.log(computer);
    if (computer > .80) {
        $("#text").html("rock");
    }
    else if (computer > .60) {
        $("text").html("scissors");
    }
    else if (computer > .40) {
        $("text").html("paper");
    }
    else if (computer > .20) {
        $("text").html("rock");

    if (userInput == "rock" && computerChoice == "rock" )
    }

});

// DOCUMENT READY FUNCTION BELOW

