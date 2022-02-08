import { createContext, useState } from 'react';

const FavouritesContext = createContext({
  favourites: [],
  total: 0,
  addFavourite: (favouriteRecipe) => {},
  removeFavourite: (recipeId) => {},
  isFavourite:(recipeId) => {}
});

export const FavouritesProvider = (props) => {
  const [favourites, setFavourites] = useState([]);

  const addHandler = (favouriteRecipe) => {
    setFavourites((prevFavourites) => {
      return prevFavourites.concat(favouriteRecipe);
    });
  };

  const removeHandler = (recipeId) => {
    setFavourites((prevFavourites) => {
      return prevFavourites.filter((favourite) => favourite.id !== recipeId);
    });
  };

  const isFavourite = (recipeId) => {
    return favourites.some((favourite) => favourite.id === recipeId);
  };

  const context = {
    favourites: favourites,
    total: favourites.length,
    addFavourite: addHandler,
    removeFavourite: removeHandler,
    isFavourite: isFavourite,
  };
  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
