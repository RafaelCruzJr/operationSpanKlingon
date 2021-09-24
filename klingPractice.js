function runKlingPractice() {
	var allTrials = [['<img src = "klingon/D.png">','6 / 2 + 5 = 9',0],['<img src = "klingon/K.png">','5 * 3 - 2 = 13',1],['<img src = "klingon/I.png">','4 * 2 + 6 = 18',1],['<img src = "klingon/P.png">','8 / 2 - 3 = 1',1],['<img src = "klingon/H.png">','9 * 2 - 3 = 4',0]], // full set of practice trials
		timePrompt = Number(opener.document.getElementById("arithAVG").value), // grab average from arithmetic
		SD = Number(opener.document.getElementById("arithSD").value),// grab SD from arithmetic
	    	cbAnswer = Number(opener.document.getElementById('cbAnswer').value),
		timerID, // initialize eventTimer ID
		trialN = 0, // initialize trial number
		labels = ['lab1','lab2','lab3','lab4','lab5','lab6','lab7','lab8','lab9','lab10','lab11','lab12'], // labels associated with response screen
		inputs = ['let1','let2','let3','let4','let5','let6','let7','let8','let9','let10','let11','let12'], // actual inputs
		attend = document.getElementById("attend"), // grab element for showing prompts
		opDiv = document.getElementById("opDiv"), // grab element for response screen
		klingButton = document.getElementById("klingButton"); // grab element for klingon span task button
		pracButton = document.getElementById("pracButton"); // grab element for practice button

	document.getElementById("holder").style.display = 'none'; // remove instructions

	if (document.documentElement.requestFullscreen) {
		document.documentElement.requestFullscreen();
	} else if (document.documentElement.webkitRequestFullscreen) {
		document.documentElement.webkitRequestFullscreen();
	} else if (document.documentElement.msRequestFullscreen) {
		document.documentElement.msRequestFullscreen();
	} // for setting it full screen depending on web browser

	function displayAttend(newText = '*****') {
		attend.innerHTML = newText;
		attend.style.display = 'block';
	} // make displaying attention simple

	function removeAttend() {
		attend.style.display = 'none';
	} // make removing attention simple

	function mathKeys(event) {
		if (cbAnswer == 1) {
			switch (event.key) {
				case 'a':
					document.removeEventListener('keydown',mathKeys); // remove eventListener
					removeAttend();
					eventTimer.cancelRequest(timerID); // stop "slow" from showing
					eventTimer.setTimeout(endTrial,200); // end current trial
					break;
				case 'l':
					document.removeEventListener('keydown',mathKeys);
					removeAttend();
					eventTimer.cancelRequest(timerID);				
					eventTimer.setTimeout(endTrial,200);
					break;
				default:
					break;					
			}
		} else {
			switch (event.key) {
				case 'l':
					document.removeEventListener('keydown',mathKeys); // remove eventListener
					removeAttend();
					eventTimer.cancelRequest(timerID); // stop "slow" from showing
					eventTimer.setTimeout(endTrial,200); // end current trial
					break;
				case 'a':
					document.removeEventListener('keydown',mathKeys);
					removeAttend();
					eventTimer.cancelRequest(timerID);				
					eventTimer.setTimeout(endTrial,200);
					break;
				default:
					break;					
			}
		}
	}

	// function to run 1 entire trial of operation span
	function runSeq() {
		displayAttend(allTrials[trialN][0]); // display letter
		eventTimer.setTimeout(removeAttend,2000); // remove it
		eventTimer.setTimeout(function() {displayAttend(allTrials[trialN][1]); document.addEventListener('keydown',mathKeys);},3000); // display equation and listen for response
		timerID = eventTimer.setTimeout(slow, 3000 + timePrompt + SD); // prepare "slow" function if too slow
	}

	function slow() { // show "too slow" if no response
		document.removeEventListener('keydown',mathKeys);
		displayAttend('Too Slow');
		eventTimer.setTimeout(endTrial, 200)
	}

	function endTrial() { // either go to next trial or show answer screen
		removeAttend();
		trialN++;
		if (trialN == 5) {
			answerScreen();
		} else {
			runSeq();
		}
	}

	// function to create the screen to allow pariticpants to input in which order they saw letters
	function answerScreen() {
		var options = [
			'<img src = "klingon/D.png" width = "30">',
			'<img src = "klingon/K.png" width = "30">',
			'<img src = "klingon/I.png" width = "30">',
			'<img src = "klingon/P.png" width = "30">',
			'<img src = "klingon/H.png" width = "30">'], // correct answers
			klingCopy = [
			'<img src = "klingon/A.png" width = "30">',
			'<img src = "klingon/B.png" width = "30">',
			'<img src = "klingon/C.png" width = "30">',
			'<img src = "klingon/D.png" width = "30">',
			'<img src = "klingon/E.png" width = "30">',
			'<img src = "klingon/F.png" width = "30">',
			'<img src = "klingon/G.png" width = "30">',
			'<img src = "klingon/H.png" width = "30">',
			'<img src = "klingon/I.png" width = "30">',
			'<img src = "klingon/J.png" width = "30">',
			'<img src = "klingon/K.png" width = "30">',
			'<img src = "klingon/L.png" width = "30">',
			'<img src = "klingon/M.png" width = "30">',
			'<img src = "klingon/N.png" width = "30">',
			'<img src = "klingon/O.png" width = "30">',
			'<img src = "klingon/P.png" width = "30">',
			'<img src = "klingon/Q.png" width = "30">',
			'<img src = "klingon/R.png" width = "30">',
			'<img src = "klingon/S.png" width = "30">',
			'<img src = "klingon/T.png" width = "30">',
			'<img src = "klingon/U.png" width = "30">',
			'<img src = "klingon/V.png" width = "30">',
			'<img src = "klingon/W.png" width = "30">',
			'<img src = "klingon/X.png" width = "30">',
			'<img src = "klingon/Y.png" width = "30">',
			'<img src = "klingon/Z.png" width = "30">',
			'<img src = "klingon/1.png" width = "30">',
			'<img src = "klingon/2.png" width = "30">',
			'<img src = "klingon/3.png" width = "30">',
			'<img src = "klingon/4.png" width = "30">']; // copy of klingon
		for (i = 0; i < options.length; i++) { // iterate through answers
			klingCopy.splice(klingCopy.indexOf(options[i]),1); // remove the correct answers from klingon
		}
		for (i = 0; i < 7; i++) { // iterate through klingon for the remaining number of options
			idxA = Math.floor(Math.random() * klingCopy.length); // index randomly into klingon
			alpha = klingCopy[idxA]; // grab klingon
			klingCopy.splice(idxA,1); // remove it from list of klingon
			options.push(alpha); // put it into options
		}
		shuffle(options);
		for (i = 0; i < 12; i++) { // iterate through options
			document.getElementById(labels[i]).innerHTML = options[i]; // place them in HTML
		};
		eventTimer.setTimeout(function() {opDiv.style.display = 'block';}, 500); // display HTML of screen
	};

	// function for submit button for answer screen
	pracButton.onclick = function() {
		for (i = 0; i < 12; i++) { // iterate through HTML elements
			document.getElementById(inputs[i]).value = ''; // blank them
		}
		opDiv.style.display = 'none'; // remove answer screen
		pracButton.style.display = 'none';
		klingButton.style.display = 'block';
		document.getElementById("holder").style.display = 'block';
		document.getElementById("next").style.display = 'block';
		document.getElementById("previous").style.display = 'none';
		document.getElementById("prac").style.display = 'none';

	}

	eventTimer.setMultipleTO([ // show a countdown, then start practice
		[function() {displayAttend('3');}, 100], 
		[function() {displayAttend('2');}, 1100],
		[function() {displayAttend('1');}, 2100],
		[removeAttend, 3100],
		[runSeq, 3400]
	])	
}
