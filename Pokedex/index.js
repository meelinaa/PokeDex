//`https://pokeapi.co/api/v2/pokemon/${pokemonName}`

async function searchPokemon(){
    

    try {
        const namePokemon = document.getElementById("namePokemon").value.toLowerCase();

        if (namePokemon === "") {
            window.alert("enter a name to search for a pokemon");
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
    const pokeGewicht = document.getElementById("pokeGewicht");
    const pokeGröße = document.getElementById("pokeGröße");
    const frontPic = document.getElementById("frontPic");

    pokeName.textContent = "Name: " + ersterBuchstabeGroß(data.name);
    gameIndex.textContent = "Index: " + data.id;
    pokeIndex.textContent = "Type: " + ersterBuchstabeGroß(data.types[0].type.name);
    pokeGewicht.textContent = "Weight: " + data.weight + " kg";
    pokeGröße.textContent = "Height: " + data.height + " cm";
    frontPic.src = data.sprites.front_default;
}

function ersterBuchstabeGroß(word) {
    const formattedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return formattedWord;
}
