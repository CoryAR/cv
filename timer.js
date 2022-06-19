let startTimer = document.querySelector('input[name="start"]');
let stopTimer = document.querySelector('input[name="stop"]');
let restartTimer = document.querySelector('input[name="restart"]');

startTimer.onclick = function() {
	let results = document.querySelector('#results');
	let time = 0;
	
	let interval = setInterval(function() {
		results.innerText = time++;
	}, 1000);
	
	stopTimer.onclick = function() {
		time = document.querySelector('#results').innerText;
		clearInterval(interval);
		
		startTimer.onclick = function() {
			interval = setInterval(function() {
				results.innerText = time++;
			}, 1000)
		}
	};
	
	restartTimer.onclick = function() {
		time = 0;
		clearInterval(interval);
		interval = setInterval(function() {
				results.innerText = time++;
	  }, 1000);
	};
};
