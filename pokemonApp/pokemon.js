import express from 'express';
const app = express();

import cors from 'cors';

//enable CORS
app.use(
  cors({
    origin: `*`,
  })
);

const pokemonList = [
    { id: 1, name: 'Bulbasaur', type: 'Grass/Poison' },
    { id: 2, name: 'Charmander', type: 'Fire' },
    { id: 3, name: 'Squirtle', type: 'Water' },
    // Add more Pokémon as needed
  ];

  app.get('/pokemon', (req, res) => {
    res.json(pokemonList);
  });

  app.get('/pokemon/:id', (req, res) => {
    const pokemonId = req.params.id;
    const pokemon = pokemonList.find((pokemon) => pokemon.id === parseInt(pokemonId));
  
    if (pokemon) {
      res.json(pokemon);
    } else {
      res.status(404).json({ error: 'Pokémon not found' });
    }
  });

  const PORT = 8080

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });