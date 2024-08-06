

// input field: pokemonNameField

// output div: pokemonSearchOutput


async function searchForPokemon(pokemonName = "pikachu"){
	let searchResult = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName);
	let searchResultData = await searchResult.json();

	return searchResultData;
}


async function searchAndDisplayPokemonData(){
	let pokemonSearchInput = document.getElementById("pokemonNameField");

	let searchResult = await searchForPokemon(pokemonSearchInput.value);

	let searchResultTrimmed = {
		name: searchResult.name, 
		image: searchResult.sprites.front_default
	}

	
	saveData("pokemonData", JSON.stringify(searchResultTrimmed));

	renderPokemonData();

}

function saveData(dataName, dataValue){
	localStorage.setItem(dataName.toString(), dataValue.toString());
}


function renderPokemonData(){
	let dataToDisplay = JSON.parse(localStorage.getItem("pokemonData")) || {};

	let pokemonDisplayArea = document.getElementById("pokemonSearchOutput");
	pokemonDisplayArea.innerText = JSON.stringify(dataToDisplay);

	let pokemonName = document.createElement("h2");
	pokemonName.innerText = dataToDisplay.name;
	pokemonDisplayArea.appendChild(pokemonName);

	let pokemonImage = document.createElement("img");
	pokemonImage.src = dataToDisplay.image;
	pokemonDisplayArea.appendChild(pokemonImage);
}

// button: pokemonSearchButton
let pokemonFinderButton = document.getElementById("pokemonSearchButton");
pokemonFinderButton.addEventListener("click", searchAndDisplayPokemonData)
