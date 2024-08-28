import { useState } from 'react';

const RecipeForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Titel ist erforderlich.';
    if (!ingredients) newErrors.ingredients = 'Zutaten sind erforderlich.';
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
    onSubmit({ title, ingredients: ingredients.split(','), instructions });
    setTitle('');
    setIngredients('');
    setInstructions('');
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
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Zutaten (bitte einzelne Zutaten mit Kommata trennen)"
      />
      {errors.ingredients && <p style={{ color: 'red' }}>{errors.ingredients}</p>}
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