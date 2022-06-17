function evolutions(pokemon) {
  if (pokemon === 'pikachu') return ['raichu'];
  console.log("Not a valid pokemon!");
  return null;
}

let pokemon = (name) => {
  let level = 1;
  let evolvePokemon = evolutions(name);
  let evolutionStage = 0;
  let pokemonName = name;
  let isCaught = false;
  return {
    'evolve': () => {
      if (evolutionStage > evolvePokemon.length) return null;
      pokemonName = evolvePokemon[evolutionStage];
      evolutionStage++;
      return pokemonName;
    },
    'levelup': () =>  ++level,
    'catch': () => isCaught = true,
    'pokeInfo': () => console.log(pokemonName,level,isCaught)
  };
};

let pikachu = pokemon('pikachu');
console.log(pikachu.levelup());
console.log(pikachu.levelup());
pikachu.pokeInfo();
pikachu.evolve();
pikachu.pokeInfo();
