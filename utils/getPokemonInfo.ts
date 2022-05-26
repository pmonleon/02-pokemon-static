import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  const response = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
  const { data } = response;
  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
