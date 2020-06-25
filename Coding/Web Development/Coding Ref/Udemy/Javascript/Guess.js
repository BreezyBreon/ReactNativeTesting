// create a secretNumber

var secretNumber = 4;

var guess = Number(prompt("Guess a number"));

alert(guess);

//check if guess is right

if(guess === secretNumber) {
	alert("Correct guess");
}

//otherwise check if higher

else if(guess > secretNumber){
	alert("too high, guess again");
}

//otherwise check if lower

else {
	alert("too low, guess again");
}

