console.log('linked?');

// function to fetch all pokemon from our API
async function fetchPokemonData() {
  // fetch pokemon from api and store in variable
  const response = await fetch('http://localhost:3000/pokemon');

  // Convert the response to JSON
  const pokemonData = await response.json();

  // Locate the HTML element where we want to display the pokemon
const pokemonList = document.getElementById('pokemon-list');
  // Loop through the pokemon data and display each pokemon
  pokemonData.forEach((pokemon) => {
    // Create a list item for each pokemon
    const pokemonListItem = document.createElement('li');
    pokemonListItem.textContent = `${pokemon.name} - Type: ${pokemon.type}`;

    // Append the list item to the list
    pokemonList.appendChild(pokemonListItem);
  });
}
fetchPokemonData()