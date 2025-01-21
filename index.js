async function searchPokemon(){

    try {
        const namePokemon = document.getElementById("namePokemon").value.toLowerCase();

        if (namePokemon === "") {
            window.alert("Enter a name to search for a pokemon.");
            return;
        }
        console.log(namePokemon);
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
        if (!response.ok) {
            console.log("Error. Response not ok");
            return;
        }
        const data = await response.json();
    
        printOutEverything(data);
        
    } catch (error) {
        console.error(err);
    }

}

function printOutEverything(data){

    const pokeName = document.getElementById("pokeName");
    const gameIndex = document.getElementById("gameIndex");
    const pokeIndex = document.getElementById("pokeIndex");
    const pokeWeight = document.getElementById("pokeWeight");
    const pokeHeight = document.getElementById("pokeHeight");
    const frontPic = document.getElementById("frontPic");

    addClass(data);

    pokeName.textContent = "Name: " + firstLetterCapital(data.name);
    gameIndex.textContent = "Index: " + data.id;
    pokeIndex.textContent = "Type: " + firstLetterCapital(data.types[0].type.name);
    pokeWeight.textContent = "Weight: " + (data.weight * 0.1) + " kg"; 
    pokeHeight.textContent = "Height: " + (data.height * 10) + " cm";
    frontPic.src = data.sprites.front_default;

}

function firstLetterCapital(word) {

    const formattedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return formattedWord;

}

function addClass(data) {
    switch (data.types[0].type.name) {
        case "electric":
            pokeIndex.className = "electric";
            break;
        case "fire":
            pokeIndex.className = "fire";
            break;
        case "normal":
            pokeIndex.className = "normal";
            break;
        case "water":
            pokeIndex.className = "water";
            break;
        case "grass":
            pokeIndex.className = "grass";
            break;
        case "ice":
            pokeIndex.className = "ice";
            break;
        case "fighting":
            pokeIndex.className = "fighting";
            break;
        case "fairy":
            pokeIndex.className = "fairy";
            break;
        case "flying":
            pokeIndex.className = "flying";
            break;
        case "ghost":
            pokeIndex.className = "ghost";
            break;
        case "bug":
            pokeIndex.className = "bug";   
            break;                                                 
        case "ground":
            pokeIndex.className = "ground";
            break;
        case "poison":
            pokeIndex.className = "poison";
            break;
        case "psychic":
            pokeIndex.className = "psychic";
            break;
        case "rock":
            pokeIndex.className = "rock";  
            break;
        case "steel":
            pokeIndex.className = "steel";
            break;  
        default:
            null;
    }
}
