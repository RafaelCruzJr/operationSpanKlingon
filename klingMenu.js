var text = document.getElementById('opInstructions'), // get the instruction text element
	nextButton = document.getElementById('next'),
	previousButton = document.getElementById('previous'),
	prac = document.getElementById('prac'),
	op = document.getElementById('op'),
	instructions = [
	"For this portion of the task, you will be performing a memory task at the same time as solving math equations.",
	'A character will appear (ex: <img src = "Klingon/F.png" width = "30">), then a simple math equation (ex: [5/5] + 2 = 3), then another character, and another equation, and so on for anywhere from 3 to 9 cycles.',
	"The math equations may be correct or incorrect. When an equation is shown to you, you must respond with either 'A' for correct or 'L' for not.",
	"Your job is to remember the characters and in which order they appeared, while accurately deciding whether the math equations are correct or not.",
	"At the end of each set of cycles you will be asked to input in which order the characters appeared. There will be 7 sets of cycles (3 to 9) and you will do this twice for a total of 14 sets.",
	"Try to be as accurate as possible with the equations, while remembering as many characters as possible.",
	"You must respond to the equations within a certain time limit based on how well you did during the practice equations.",
	"Let's first do a short practice set of 5 letters to allow you to get used to the format. Press the button when you are ready.",
	'You should have entered "1","2","3","4","5" for <img src = "Klingon/D.png" width = "30">,<img src = "Klingon/K.png" width = "30">,<img src = "Klingon/I.png" width = "30">,<img src = "Klingon/P.png" width = "30">,<img src = "Klingon/H.png" width = "30">, respectively.',
	"Let's now move on to the main task. You will be expected to correctly answer at least 75% of the math equations within the time limit for the main task.",
	"You will be given a break halfway through the task, during which your accuracy will be shown to you. Press the button when ready."],
	numIns = 0;

function changeText(newText) {
	text.innerHTML = newText;
} // make changing instruction text simple

function displayPrevious() {
	previousButton.style.display = 'block';
} // make displaying previous button simple

function removePrevious() {
	previousButton.style.display = 'none';
} // make removing previous button simple

function displayNext() {
	nextButton.style.display = 'block';
} // make displaying next button simple

function removeNext() {
	nextButton.style.display = 'none';
} // make removing next button simple

function displayOp() {
	op.style.display = 'block';
} // make displaying next button simple

function removeOp() {
	op.style.display = 'none';
} // make removing next button simple

function displayPrac() {
	prac.style.display = 'block';
} // make displaying next button simple

function removePrac() {
	prac.style.display = 'none';
} // make removing next button simple

prac.addEventListener("click",function() {numIns++; changeText(instructions[numIns]);});

function next() {
	numIns++;
	if (numIns == 1) {
		displayPrevious();
	}
	if (numIns == 7) {
		removeNext();
		displayPrac();
	}
	if (numIns == 9) {
		displayPrevious();
	}
	if (numIns == 10) {
		removeNext();
		displayOp();
	}
	changeText(instructions[numIns]); // display the current instruction text
}

function previous() {
	numIns--;
	if (numIns == 0) {
		removePrevious();
	}
	if (numIns == 6) {
		displayNext();
		removePrac();
	}
	if (numIns == 8) {
		removePrevious();
	}
	if (numIns == 9) {
		displayNext();
		removeOp();
	}
	changeText(instructions[numIns]); // display the current instruction text
}
