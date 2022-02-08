
import { useHistory } from 'react-router-dom';
import React from 'react';
import RecipeForm from '../components/RecipeForm';

const NewRecipes = () => {
  const history = useHistory();
  const addRecipeHandler = (recipeData) => {

    
    fetch(
      'https://react-fd122-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      {
        method: 'POST',
        body: JSON.stringify(recipeData),
        headers: {
          'Contnet-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  };

  return (
    <section>
      <RecipeForm onAddRecipe={addRecipeHandler} />
    </section>
  );
};

export default NewRecipes;
