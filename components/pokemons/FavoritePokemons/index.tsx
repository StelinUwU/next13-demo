"use client";
import { useAppSelector } from "@/store";
import { PokemonsGrid } from "../PokemonGrid";
import { NoFavorites } from "../NoFavorites";

export const FavoritesPokemons = () => {
  const pokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );

  return (
    <>
      {pokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonsGrid pokemons={pokemons} />
      )}
    </>
  );
};
