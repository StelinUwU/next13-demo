import { FavoritesPokemons } from "@/components";

export const metadata = {
  title: "Favoritos",
  description: "SEO Title",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons Favoritos <small className="text-blue-400">Global state</small>
      </span>
      <FavoritesPokemons />
    </div>
  );
}
