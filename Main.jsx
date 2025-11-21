import { useState } from "react";
import IngredientsList from './components/IngredientsList'
import ClaudeRecipe from './components/ClaudeRecipe'

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "Chicken",
    "Turkey",
    "Oregano",
  ]);
  const [recipeShown, setRecipeShown] = useState(false);

  function toggleRecipeShown() {
    setRecipeShown((prevShown) => !prevShown);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>

      {ingredients.length > 0 && (
       <IngredientsList ingredients={ingredients}
       toggleRecipeShown={toggleRecipeShown}
       />
      )}

      {recipeShown && <ClaudeRecipe/>}
    </main>
  );
}
