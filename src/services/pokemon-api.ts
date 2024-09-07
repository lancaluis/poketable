export interface IPokemons {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

export interface IPokemon {
  id: number;
  sprites: {
    front_default: string;
  };
  name: string;
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}

export async function getPokemons(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch pokemons: ${response.statusText}`);
  }

  const pokemonData = (await response.json()) as IPokemons;

  const pokemonDetails: IPokemon[] = await Promise.all(
    pokemonData.results.map(
      async (pokemon) => await getPokemonByUrl(pokemon.url),
    ),
  );

  return { ...pokemonData, details: pokemonDetails };
}

export async function getPokemonByUrl(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch pokemon details: ${res.statusText}`);
  }
  return res.json() as Promise<IPokemon>;
}
