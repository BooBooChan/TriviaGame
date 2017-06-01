//REMEMBER TO CONSOLE.LOG EVERTHING! LEAVE NO STONE UNTURNED!

//Step 1: Create your basic variables for your trivia game
var question = {"Who am I": "I am Bridget"} //["Who am I?", "Where am I?"]; 
	//Play 30-second song each time question is asked.
}
var questionMap = [0, 1]
var correctAnswer = ["I am Bridget", "I am home"];
var wrongAnswer = {
/*correctAnswer.index0: [wronga1, wronga2, wronga3]
			... .indexm: [wrongn1, wrongn2, wrongn3]*/
};
i = 0;
j = 1;
var correctGuess = function(i,j) {
	if (question[i] === j) { return true; }
	else {return false};//question[i] === correctAnswer[j];
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

/*Step 3: Create functions which cause users' guesses to change the screens. Change from question screen to Correct or Wrong screen.
Make sure to change result screen over to next question.*/
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
	

/*Step 4: Create timer which runs during each question running. 
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
/* */