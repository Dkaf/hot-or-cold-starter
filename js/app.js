
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

		var guess = parseInt($('form'));

		console.log(guess);
		function randomNum() {
			var answer =	Math.floor(Math.random() * (100 - 1) + 1);
			return answer;
		}

		var secretNum = randomNum();

		console.log(secretNum);

		if (guess >= secretNum + 50 || guess <= secretNum - 50) {
			$('#feedback h2').text('Ice Cold');
		}

		else if (guess >= secretNum + 30 && guess < secretNum + 50 || guess <= secretNum - 30 && guess > secretNum - 50 ) {
			$('#feedback h2').text('Cold');
		}

		else if (guess >= secretNum + 20 && guess < secretNum + 30 || guess <= secretNum - 20 && guess > secretNum - 30) {
			$('#feedback h2').text('Warm');
		}

		else if (guess >= secretNum + 10 && guess < secretNum + 20 || guess <= secretNum - 10 && guess > secretNum - 20) {
			$('#feedback h2').text('Hot');
		}

		else if (guess >= secretNum + 1 && guess < secretNum + 10 || guess <= secretNum - 1 && guess > secretNum -10) {
			$('#feedback h2').text('Very Hot!');
		}

		else if (guess == secretNum) {
			$('#feedback h2').text('You guessed the Number!');
		}

});
