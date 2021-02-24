import { Crypto, Symbol } from "../../types";
import remove from "lodash/remove";

export const getFavorites = (): Array<Symbol> =>
  JSON.parse(localStorage.getItem("cc-favorites") || "[]");

export const updateFavorites = (event: {
  data: Crypto;
  isSelected: boolean;
}) => {
  const { data, isSelected } = event;

  let favorites = getFavorites();
  if (!isSelected) {
    remove(favorites, (d) => d === data.symbol);
  } else {
    favorites.push(data.symbol);
  }

  localStorage.setItem("cc-favorites", JSON.stringify(favorites.sort()));
};
