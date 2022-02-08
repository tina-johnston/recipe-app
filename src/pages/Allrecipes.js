
import { useState, useEffect } from 'react';

import RecipeGrid from '../components/RecipeGrid';
// const data = [
//   {
//     id: '1w',
//     image:
//       'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
//     title: 'chicken',
//     description: 'spicy and lemony',
//   },
//   {
//     id: '16',
//     image:
//       'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
//     title: 'chicken',
//     description: 'spicy and lemony',
//   },
//   {
//     id: '1k',
//     image:
//       'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
//     title: 'chicken',
//     description: 'spicy and lemony',
//   },
// ];

const Allrecipes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://react-fd122-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const recipes = []

        for (const key in data) {
          const recipe = {
            id: key,
            ...data[key]
          }
          recipes.push(recipe)
        }
        setLoadedData(recipes);
        setIsLoading(false);
      });
  }, []);

  const renderData = isLoading ? (
    <section>
      <p>Loading...</p>
    </section>
  ) : (
    <RecipeGrid recipes={loadedData} />
  );

  return <section>{renderData}</section>;
};

export default Allrecipes;
