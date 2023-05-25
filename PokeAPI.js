const pokemonCount = 905; //
var pokedexInfo = {}; // Pokemon Data from the API

window.onload = async function () {
  // Each time the page refreshes, refresh pokemon info
  await updatePokemon();
  while (true) {
        await sleep(30 * 1000);
        await updatePokemon();
  }
};

async function getPokemon(num) {
  // Function gets Pokemon Info
  let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString(); // URL from the PokeAPI page

  let res = await fetch(url); //Retrives Data on a String format
  pokedexInfo = await res.json(); //Retrives data on a JSON format
  //console.log(pokedexInfo);
  //Pokemon data on variables
  let pokemonImage = pokedexInfo["sprites"]["front_default"]; //Sprite    URL
  let pokemonID = pokedexInfo["id"]; //ID
  let pokemonName = pokedexInfo["name"]; //Name
  let pokemonTypes = pokedexInfo["types"]; //Types
  let pokemonHeight = pokedexInfo["height"]; //Height in Decimeters
  let pokemonWeight = pokedexInfo["weight"]; //Weight in hectograms

  res = await fetch(pokedexInfo["species"]["url"]); //Retrives description on a String format
  let pokemonData = await res.json(); //Retrives description on a JSON format
  //console.log(pokemonData);

  pokemonData = pokemonData["flavor_text_entries"];
  
  pokemonData.forEach(entry => {
    if (entry["language"]["name"] == "en") {
        pokemonData = entry;
        return;
    }
  });

  pokemonDescription = pokemonData["flavor_text"]; //Gets the description

  pokedexInfo = {
    id: pokemonID,
    name: pokemonName,
    sprite: pokemonImage,
    height: pokemonHeight,
    weight: pokemonWeight,
    types: pokemonTypes,
    description: pokemonDescription,
  };
}

async function updatePokemon() {
  await getPokemon(getRandomInt(pokemonCount));
  console.log(pokedexInfo);
  document.getElementById("pokemon_img").src = pokedexInfo["sprite"]

  //Clear previous Pokemon
  let pokemonTypes = document.getElementById("pokemon_types");
  while (pokemonTypes.hasChildNodes()) {
    pokemonTypes.firstChild.remove();
  }

  //Update type data
  let types = pokedexInfo["types"];
  types.forEach(element => {
    let type = document.createElement("span");
    type.innerText = element["type"]["name"].toUpperCase();
    type.classList.add("type_box");
    type.classList.add(element["type"]["name"]);
    pokemonTypes.append(type);
  });

  document.getElementById("pokemon_description").innerText = pokedexInfo["description"].toString().replace(/[\r\n\f]/gm, ' ');
  document.getElementById("pokemon_id").innerText = "° " + pokedexInfo["id"].toString();
  document.getElementById("pokemon_name").innerText = pokedexInfo["name"].charAt(0).toUpperCase()+ pokedexInfo["name"].slice(1);
  document.getElementById("pokemon_weight").innerText = "Weight: \t\t" + (pokedexInfo["weight"]/10).toString() + "Kg";
  document.getElementById("pokemon_height").innerText = "Height: \t\t" + (pokedexInfo["height"]/10).toString() + "m";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};