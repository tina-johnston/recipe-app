import { useContext } from 'react';
import FavouritesContext from '../components/store/favourites-contex';
import RecipeGrid from '../components/RecipeGrid';

const FavRecipes = () => {
  const ctx = useContext(FavouritesContext);

  const content = ctx.total === 0 ? <p>You have no favourites</p> : <RecipeGrid recipes={ctx.favourites} />

  return (
    <section>
      <h3>My Favourites</h3>
      {content}
    </section>
  );
};

export default FavRecipes;
