import { useState } from 'react';
import axios from 'axios';

const useAddRecipe = (recipes, setRecipes) => {
  const [apiError, setApiError] = useState('');

  const handleAddRecipe = async (newRecipe) => {
    try {
      await axios.post('http://localhost:5000/api/recipes', newRecipe);
      setRecipes([...recipes, newRecipe]);
    } catch (error) {
      setApiError('Fehler beim Hinzufügen des Rezepts.');
    }
  };

  return { handleAddRecipe, apiError };
};

export default useAddRecipe;