import { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import useAddRecipe from './hooks/useAddRecipe';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const { handleAddRecipe, apiError } = useAddRecipe(recipes, setRecipes);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/recipes');
        setRecipes(response.data);
      } catch (error) {
        setApiError('Fehler beim Laden der Rezepte.');
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Kochrezepte</h1>
      {apiError && <p style={{ color: 'red' }}>{apiError}</p>}
      <RecipeForm onSubmit={handleAddRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;