import Card from '../ui/Card';
import styles from './RecipeForm.module.css';

const RecipeForm = () => {
  return (
    <Card>
      <form className={styles.form}>
        <div>
          <label htmlFor='title'>Recipe</label>
          <input type='text' required id='title' />
        </div>
        <div>
          <label htmlFor='image'>Recipe image</label>
          <input type='url' required id='image' />
        </div>
        <div>
          <label htmlFor='description'>description</label>
          <textarea rows='5' required id='description' />
        </div>
        <div>
          <button>add recipe</button>
        </div>
      </form>
    </Card>
  );
};

export default RecipeForm;
