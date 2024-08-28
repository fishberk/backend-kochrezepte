import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>
          <h2>{recipe.title}</h2>
          <p>{recipe.ingredients.join(', ')}</p>
          <p>{recipe.instructions}</p>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;