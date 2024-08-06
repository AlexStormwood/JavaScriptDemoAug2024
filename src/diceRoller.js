function rollDice(diceSize = 6){
	let result = Math.floor(Math.random() * diceSize) + 1;
	return result;
}

function rollDiceAndDisplayIt(){
	let diceOutcome = rollDice(20);

	console.log("Dice outcome is:" + diceOutcome);

	let diceDisplayArea = document.getElementById("diceRollOutput");
	diceDisplayArea.innerText = diceOutcome;
}


// button: diceRollButton
let diceRollButton = document.getElementById("diceRollButton");
diceRollButton.addEventListener("click", rollDiceAndDisplayIt)
