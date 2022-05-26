const toggleFavourite = (id: number) => {
  let favourites: number[] = JSON.parse(
    localStorage.getItem("favourites") || "[]"
  );

  if (favourites?.includes(id)) {
    favourites = favourites.filter((pokeId) => pokeId !== id);
  } else {
    favourites = [...favourites, id];
  }
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

const existInFavourites = (id: number): boolean => {
  if (typeof window === "undefined") {
    return false;
  } else {
    const favourites: number[] = JSON.parse(
      localStorage.getItem("favourites") || "[]"
    );

    if (favourites?.includes(id)) {
      return true;
    } else {
      return false;
    }
  }
};

const pokemons = (): number[] => {
  const favourites: number[] = JSON.parse(
    localStorage.getItem("favourites") || "[]"
  );

  return favourites;
};

export default { toggleFavourite, existInFavourites, pokemons: pokemons };
