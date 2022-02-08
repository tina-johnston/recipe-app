import { useContext } from 'react';
import FavouritesContext from './store/favourites-contex';
import Card from '../ui/Card';
import styles from './Recipe.module.css';

const Recipe = (props) => {
  const { id, title, image, description } = props;
  const ctx = useContext(FavouritesContext);

  const itemIsFavourite = ctx.isFavourite(id);

  const toggleFavouriteHandler = () => {
    itemIsFavourite
      ? ctx.removeFavourite(id)
      : ctx.addFavourite({
          id,
          title,
          image,
          description,
        });
  };

  return (
    <Card className={styles.card}>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button className={styles.btn} onClick={toggleFavouriteHandler}>
        {itemIsFavourite ? 'remove from favourites' : 'add to favorites'}
      </button>
    </Card>
  );
};

export default Recipe;
