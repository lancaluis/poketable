const BASE_URL = "https://pokeapi.co/api/v2";

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
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}

export async function getPokemons() {
  const response = await fetch(`${BASE_URL}/pokemon?offset=0&limit=20`);

  if (!response.ok) {
    throw new Error("Failed to fetch pokemons");
  }

  const pokemonData: IPokemons = await response.json();

  const pokemonDetails = await Promise.all(
    pokemonData.results.map(async (pokemon) => {
      const details = await getPokemonByUrl(pokemon.url);
      return { ...pokemon, details };
    }),
  );

  return pokemonDetails;
}

export async function getPokemonByUrl(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch pokemon details");
  }

  return res.json() as Promise<IPokemon>;
}
