import React from 'react';
import Recipe from './Recipe';
import styles from './RecipeGrid.module.css';

const RecipeGrid = ({recipes}) => {
   
  return (
    <section className={styles.container}>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          id={recipe.id}
          image={recipe.image}
          title={recipe.title}
          description={recipe.description}
        />
      ))}
    </section>
  );
};

export default RecipeGrid;
