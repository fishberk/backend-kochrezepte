import { useState } from 'react';

const RecipeForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState(['']);
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Name ist erforderlich.';
    if (ingredients.some(ingredient => !ingredient)) newErrors.ingredients = 'Alle Zutatenfelder müssen ausgefüllt sein.';
    if (!instructions) newErrors.instructions = 'Anleitung ist erforderlich.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    onSubmit({ title, ingredients, instructions });
    setTitle('');
    setIngredients(['']);
    setInstructions('');
  };

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const addIngredientField = () => {
    setIngredients([...ingredients, '']);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Name des Rezepts"
      />
      {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
      {ingredients.map((ingredient, index) => (
        <div key={index}>
          <input
            type="text"
            value={ingredient}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
            placeholder={`Zutat ${index + 1}`}
          />
        </div>
      ))}
      {errors.ingredients && <p style={{ color: 'red' }}>{errors.ingredients}</p>}
      <button type="button" onClick={addIngredientField}>Weitere Zutat hinzufügen</button>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Anleitung"
      ></textarea>
      {errors.instructions && <p style={{ color: 'red' }}>{errors.instructions}</p>}
      <button type="submit">Rezept hinzufügen</button>
    </form>
  );
};

export default RecipeForm;