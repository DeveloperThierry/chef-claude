import { useState } from "react";
import IngredientsList from './IngredientsList'
import ClaudeRecipe from './ClaudeRecipe'
import {getRecipeFromMistral} from '../ai'
export default function Main() {
  const [ingredients, setIngredients] = useState([
    "Chicken",
    "Black Pepper",
    "Oregano",
  ]);
  const [recipe, setRecipe] = useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
    // const recipeMarkdown = "Recipe Showing"
    setRecipe(recipeMarkdown)
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
       getRecipe={getRecipe}
       />
      )}

      {recipe && <ClaudeRecipe recipe={recipe}/>}
    </main>
  );
}
