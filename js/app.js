
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});



		/*--- Generating random number ---*/
		function randomNum() {
			var answer =	Math.floor(Math.random() * (100 - 1) + 1);
			return answer;
		}

		var secretNum = randomNum();
		var guessCount = 0;
		var previousGuess = 0;
		console.log(secretNum);

		$('#guessButton').on('click', function (e){
			e.preventDefault();
			var guess = parseInt($('#userGuess').val());
			$('#userGuess').val('')
			if (validate(guess)) {
				$('#guessList').append('<li>' + guess + '</li>');
				console.log(guess);
				game(guess);
				guessCount += 1;
				$('#count').html(guessCount.toString())
			}
		})

		$('.new').on('click', function () {
			secretNum = randomNum();
			$('#feedback').html('Make your Guess!')
			$('#guessList li').remove();
			$('#userGuess').val('')
			$('#count').html('0');
			guessCount = 0;
		})

		function validate(guess) {
			if (guess > 100 || isNaN(guess)) {
			$('#feedback').html('Please pick a number between 1 and 100');
			return false;
			}
			return true;
		}

		/*--- Checking guess distance from answer ---*/
		function game(guess) {

			if (guess == secretNum) {
					$('#feedback').html('You guessed the Number!');
				}
			else if (previousGuess == 0) {

			  if (guess >= secretNum + 1 && guess < secretNum + 10 || guess <= secretNum - 1 && guess > secretNum -10) {
					$('#feedback').html('Very Hot!');
				}

				else if (guess >= secretNum + 10 && guess < secretNum + 20 || guess <= secretNum - 10 && guess > secretNum - 20) {
					$('#feedback').html('Hot');
				}

				else if (guess >= secretNum + 20 && guess < secretNum + 30 || guess <= secretNum - 20 && guess > secretNum - 30) {
					$('#feedback').html('Warm');
				}

				else if (guess >= secretNum + 30 && guess < secretNum + 50 || guess <= secretNum - 30 && guess > secretNum - 50 ) {
					$('#feedback').html('Cold');
				}

				else if (guess >= secretNum + 50 && guess < 101 || guess <= secretNum - 50 && guess < 101) {
					$('#feedback').html('Ice Cold');
				}
			}
			else {
				if (Math.abs(secretNum - guess) > Math.abs(secretNum - previousGuess)) {
					$('#feedback').html('Colder');
				}
				else {
					$('#feedback').html('Warmer');
				}
			}
			previousGuess = guess;
	}
});
