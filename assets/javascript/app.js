//REMEMBER TO CONSOLE.LOG EVERTHING! LEAVE NO STONE UNTURNED!

//Step 1: Create your basic variables for your trivia game
// var /*correctAnswer*/ = {
// 	// "Who am I" : "I am Bridget." //["Who am I?", "Where am I?"]; 
// 	"What was the title of Ludwig Van Beethoven's ninth symphony?" : "Symphony No. 9." ;
// 	"With what clef is viola sheet music traditionally written?" : "Alto clef.";
// 	"Which one of these instruments is an English horn?" : /*insert image with correct id here*/;
// }; 
	//Play 30-second song each time question is asked.
// }
jQuery(document).ready(function($){


	var questionMap = [0, 1]

	var questions = [
		{
			//this is the question we're asking the user
			question:"Which one of these instruments is an English horn?",
			//This is an array of possible answers
			answers:[/*insert french horn img here*/,/*insert oboe img here*/, /*insert eng horn img here*/, /*insert alphorn here*/],
			//this stores the answer index of the correct answer
			correctAnswer: 1
		}, 
		{
			question:"With what clef is viola sheet music traditionally written?",
			answers:["The tenor clef", "The bass clef", "The trebel clef", "The alto clef"]			
			correctAnswer: 3
		}, 
		{
			question:"What was the title of Ludwig Van Beethoven's ninth symphony?",
			answers:["Ode to Joy", "Symphony No. 9"]
			correctAnswer: 1
		},
		{
			question:"What year did the 'Bed Intruder Song' get released on Youtube and go viral on the internet?"
			answers:["2008", "2010", "1794", "400BC"]
			correctAnswer: 1


		},
		{

		},
		{

		},
		{

		},
		{

		},
		{

		},
		{

		}
	];
	var currentQuestion = 0;
	//Create a variable/function/conditional that allows user to proceed throughout the questions array, index by index, after he/she clicks on an answer.
	$("h3").html(questions[currentQuestion].question);
	for(i = 0; i < questions.length; i++) {
		questions[i].question.html;
		$("questions.answers".on("click", function() {
				$("correctAnswer").show();
		}))
		console.log(currentQuestion);
	}


function(){
	
};
console.log();
};
var wrongGuess = function() {
console.log();
};

var score = 0;

//Step 2: Create click events which allow users to select and input guesses. Maybe you'll want a Submit button, but not required.
//You will need to create classes or IDs to assign to these click events.
 /*""$("correctGuess").on("click", function charSelect()) {

 };
 $("wrongGuess").on("click", function charSelect()) {

 };""*/

// /*Step 3: Create functions which cause users' guesses to change the screens. Change from question screen to Correct or Wrong screen.
// Make sure to change result screen over to next question.*/
 var guess = $("question").on("click", function(){
 	if(correctAnswer) {
 		score += 1;
 		alert("Correct!");
 		document.//insert "Correct" screen here.
 		console.log(guess)
 	};
 	else{
 		alert("Incorect! The correct answer is " + correctAnswer ".");
 		document.//insert "Wrong" screen here.
 		console.log(guess)
};
});
	

//Step 4: Create timer which runs during each question running. 
Then create a function which changes question screen to Time Up screen on condition that timer runs out.*/
setTimeout(timeUp, 1000 * 30);

var timeUp = function(){
alert("The music has stopped. The correct answer is " + correctAnswer + ".");
console.log("Okay, I'm bored now. Blah blah blah!");
};

/*Step 5: Create function which displays final score screen after all questions are answered.
Create a button which allows player to play again*/
finalScore = function(){
$("<button>Encore!</button>");
alert("Your total score is " + score + ". Do you want to play again?");
document.___
console.log();
};
//Step 6: 
$(".target").hide();
$(".target").show();
$(".target").on("hover", function() {
$(".target").show();
});

});