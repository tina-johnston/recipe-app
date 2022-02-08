import { useRef } from 'react';
import Card from '../ui/Card';
import styles from './RecipeForm.module.css';

const RecipeForm = (props) => {
  const { onAddRecipe } = props;
  
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const recipeData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
    };
    onAddRecipe(recipeData);
  };
  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor='title'>Recipe</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='image'>Recipe image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='description'>description</label>
          <textarea
            rows='5'
            required
            id='description'
            ref={descriptionInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button>add recipe</button>
        </div>
      </form>
    </Card>
  );
};

export default RecipeForm;
