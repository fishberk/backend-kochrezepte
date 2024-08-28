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

/* VARIANTE MIT FETCH
import { useState } from 'react';

const useAddRecipe = (recipes, setRecipes) => {
  const [apiError, setApiError] = useState('');

  const handleAddRecipe = async (newRecipe) => {
    try {
      const response = await fetch('http://localhost:5000/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipe),
      });

      if (!response.ok) {
        throw new Error('Fehler beim Hinzufügen des Rezepts.');
      }

      const addedRecipe = await response.json();
      setRecipes([...recipes, addedRecipe]);
    } catch (error) {
      setApiError(error.message);
    }
  };

  return { handleAddRecipe, apiError };
};

export default useAddRecipe;

HAUPTUNTERSCHIED ZU VARIANTE MIT AXIOS IST DIE VERWENDUNG VON FETCH ANSTELLE VON AXIOS



*/

